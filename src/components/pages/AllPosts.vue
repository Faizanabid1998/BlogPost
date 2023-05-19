<template>
  <div class="w-[1440px] h-auto relative backdrop-blur-md">
    <div
      class="w-[1440px] h-auto flex flex-col items-center py-5 px-72 gap-5 absolute bg-neutral-100"
    >
      <div
        class="flex flex-col items-center px-3 pt-5 pb-12 bg-white w-[840px] h-[1542px]"
      >
        <div
          id="header"
          class="flex flex-row items-center justify-between px-5 py-3 w-[820px] h-14"
        >
          <div id="heading" class="font-bold text-3xl leading-10">
            All Posts
          </div>
          <the-button
            @click="add"
            btnWidth=" w-44"
            buttonText="Create Blog"
            bgClass="bg-neutral-500"
          ></the-button>
        </div>
        <div v-if="blogs.length > 0">
          <the-blog
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title"
            :date="blog.date"
            :author="blog.author"
            :category="blog.category"
            @edit-blog="handleEdit(blog.id)"
            @delete-blog="handleDelete(blog.id)"
            >>
          </the-blog>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    const blogs = ref([]);
    const router = useRouter();
    const add = () => {
      router.replace("/add");
    };
    const handleEdit = (blogId) => {
      router.push(`/edit/${blogId}`);
    };
    const handleDelete = (blogId) => {
      const deletingMessage = alert("Deleting blog...");
      axios
        .delete(
          `https://blog-app-8cfe3-default-rtdb.firebaseio.com/blogs/${blogId}.json`
        )
        .then(() => {
          blogs.value = blogs.value.filter((blog) => blog.id !== blogId);
          deletingMessage.close();
          alert("Blog deleted successfully!");
        })

        .catch((error) => {
          console.error("Error deleting blog: ", error);
        });
    };
    onMounted(() => {
      axios
        .get("https://blog-app-8cfe3-default-rtdb.firebaseio.com/blogs.json")
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          const fetchedBlogs = Object.keys(data).map((id) => ({
            id,
            ...data[id],
          }));
          blogs.value = fetchedBlogs.reverse();
        })
        .catch((error) => {
          console.error(error);
        });
    });
    return { blogs, handleEdit, handleDelete, add };
  },
};
</script>
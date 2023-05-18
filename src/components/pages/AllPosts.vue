<template>
  <div>
    <nav-bar yourText="Create Blog" heading="All Posts" route="/add"></nav-bar>
    <div v-if="blogs.length > 0">
      <the-blog
        class="my-4 mx-3"
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
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    const blogs = ref([]);
    const router = useRouter();
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
          const fetchedBlogs = Object.keys(data).map((id) => ({ id, ...data[id] }));
          blogs.value = fetchedBlogs.reverse();
        })
        .catch((error) => {
          console.error(error);
        });
    });
    return { blogs, handleEdit, handleDelete };
  },
};
</script>
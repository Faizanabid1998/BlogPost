<template>
  <div v-if="isLoggedIn">
    <div v-if="loading">
      Loading...
      <spin-loader></spin-loader>
    </div>
  

    <div v-else class="bg-neutral-200">
      <div
        class="flex flex-col items-center justify center w-full h-screen absolute bg-neutral-200"
      >
        <div
          class="flex flex-col items-center mt-5 mb-5 bg-white sm:w-[840px] w-[340px] sm:h-[1214px] h-[2814px] overflow-y-auto scrollbar-hidden sm:px-3 px-5 pt-5 sm:pb-12 pb-12"
        >
          <div
            id="header"
            class="flex flex-row sm:items-center items-start justify-between sm:px-5 sm:w-[820px] w-[300px] h-14"
          >
            <div id="heading" class="font-bold text-3xl leading-10">
              All Posts
            </div>
            <the-button
              class="hidden sm:flex"
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
              :image="blog.image"
              @edit-blog="handleEdit(blog.id)"
              @delete-blog="handleDelete(blog.id)"
              >>
            </the-blog>
          </div>
        </div>
        <div
          class="sm:hidden absolute bottom-0 py-5 w-full h-20 bg-white flex flex-col items-center justify-center"
        >
          <the-button
            @click="add"
            btnWidth=" w-72"
            buttonText="Create Blog"
            bgClass="bg-neutral-500"
          ></the-button>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted,computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex"
export default {
  setup() {
    const blogs = ref([]);
    const router = useRouter();
    const loading = ref(false);
    const store = useStore();
    const isLoggedIn = computed(() => !!store.state.token);
    const add = () => {
      router.replace("/add");
    };
    const handleEdit = (blogId) => {
      router.push(`/edit/${blogId}`);
    };
    const handleDelete = (blogId) => {
      alert("Deleting blog...");
      axios
        .delete(
          `https://blog-app-8cfe3-default-rtdb.firebaseio.com/blogs/${blogId}.json`
        )
        .then(() => {
          blogs.value = blogs.value.filter((blog) => blog.id !== blogId);
          alert("Blog deleted successfully!");
        })

        .catch((error) => {
          console.error("Error deleting blog: ", error);
        });
    };
    onMounted(() => {
      if (!isLoggedIn.value) {
        // If not logged in, redirect the user to the login page
        router.replace("/auth");
        return;
      }
      loading.value = true;
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
          loading.value = false;
        })
        .catch((error) => {
          alert("try again later", error);
          loading.value = false;
        });
    });
    return { blogs, handleEdit, handleDelete, add, loading,isLoggedIn };
  },
};
</script>
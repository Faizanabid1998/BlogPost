<template>
  <div>
    <header class="flex flex-row justify-between px-5 py-3">
      <back-button back="Back" @click="gotoBlogs"></back-button>
      <base-button editDel="Share"></base-button>
    </header>
    <div v-if="blog">
      <view-comp
        :title="blog.title"
        :description="blog.description"
        :date="blog.date"
        :author="blog.author"
        :category="blog.category"
      ></view-comp>
    </div>
  </div>
</template>
  
  <script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const blog = ref(null);

    const router = useRouter();

    onMounted(() => {
      const blogId = router.currentRoute.value.params.id;
      axios
        .get(
          `https://blog-app-8cfe3-default-rtdb.firebaseio.com/blogs/${blogId}.json`
        )
        .then((response) => {
          blog.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    });
    const gotoBlogs = () => {
      router.push("/blogs");
    };
    return { blog, gotoBlogs };
  },
};
</script>
  
  
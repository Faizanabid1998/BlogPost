<template>
  <!-- <div class="font-bold text-2xl leading-10 py-3 px-14">
    <h1>Blog</h1>
  </div> -->
  <nav-bar class="mb-10" yourText="Goto Home" heading="Blog" route="/"></nav-bar>
  <div
    title="card"
    class="container grid grid-cols-2 items-start mx-auto gap-20 justify-center w-[820px] h-[428px]"
  >
    <the-post
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :description="limitedDescription(blog.description)"
      @click="navigate(blog)"
    >
    </the-post>
  </div>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const blogs = ref([]);
    const router = useRouter();
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

    const limitedDescription = (description) => {
      const limit = 40;
      const words = description.split(" ");
      return words.slice(0, limit).join(" ") + "...";
    };
    const navigate = (blog) => {
      router.push(`/blogs/${blog.id}`);
      console.log(blog.id);
    };

    return { blogs, limitedDescription, navigate };
  },
};
</script>


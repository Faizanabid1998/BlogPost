<template>
  <div>
    <div v-if="loading">
      Loading...
      <spin-loader></spin-loader>
    </div>
    <div v-else class="bg-neutral-200">
      <div
        class="flex flex-col items-center justify center w-full h-[2578px] sm:h-[1628px] absolute bg-neutral-200"
      >
        <div
          class="bg-white flex flex-col pt-5 pb-12 sm:w-[840px] w-[340px] h-[2538px] sm:h-[1588px] overflow-y-auto scrollbar-hidden min-w-0"
        >
          <div
            id="header"
            class="flex flex-row items-center pt-3 pb-5 px-5 gap-3 sm:w-[820px] w-[300px]sm:h-7 h-14"
          >
            <div id="heading" class="font-bold text-3xl leading-10">Blog</div>
          </div>
          <div
            title="card"
            class="container sm:grid sm:grid-cols-2 flex flex-col items-center sm:pl-14 justify-center sm:w-[820px] w-80 sm:h-[428px] h-auto self-stretch mx-auto"
          >
            <the-post
              v-for="blog in blogs"
              :key="blog.id"
              :title="blog.title"
              :description="limitedDescription(blog.description)"
              :image="blog.image"
              @click="navigate(blog)"
              class="hover:cursor-pointer"
            >
            </the-post>
          </div>
        </div>
      </div>
    </div>
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
    const loading = ref(false);
    const router = useRouter();
    onMounted(() => {
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
          console.error(error);
        });
    });

    const limitedDescription = (description) => {
      const limit = 20;
      const words = description.split(" ");
      return words.slice(0, limit).join(" ") + "...";
    };
    const navigate = (blog) => {
      router.push(`/blogs/${blog.id}`);
      console.log(blog.id);
    };

    return { blogs, limitedDescription, navigate, loading };
  },
};
</script>


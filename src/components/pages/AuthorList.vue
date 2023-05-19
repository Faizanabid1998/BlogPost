<template>
  <div class="w-[1440px] h-[1024px] relative">
    <div
      class="flex flex-col items-center  py-5 px-80 gap-3 bg-neutral-200 w-[1440px] h-[1024px] absolute"
    >
      <div class="flex flex-col items-center px-3 pt-5 pb-12 bg-white w-[840px] h-[1542px] ">
      <div id="header" class="flex flex-row items-center pt-3 pb-5 px-5 gap-3 w-[820px] h-7 ">
        <div id="heading" class="font-bold  text-3xl leading-10">Blog</div>
      </div>
        <div
          title="card"
          class="container grid grid-cols-2 items-start  gap-20 justify-center w-[820px] h-[428px] self-stretch"
        >
          <the-post
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title"
            :description="limitedDescription(blog.description)"
            @click="navigate(blog)"
            class="hover:cursor-pointer"
          >
          </the-post>
          
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
    const router = useRouter();
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


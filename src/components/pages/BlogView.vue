<template>
 <div class="w-[1440px] h-auto relative backdrop-blur-md">
    <div
      class="w-[1440px] h-auto flex flex-col items-center py-5 px-72 gap-5 absolute bg-neutral-100 "
    >
      <div
        class="flex flex-col items-center px-3 pt-5 pb-12 bg-white w-[840px] h-[1542px]"
      >
 
    <div
          class="w-[820px] h-11 flex flex-row justify-between items-start px-5 mb-5 gap-3"
        >
          <div>
            <the-button
              @click="gotoBlogs"
              btnWidth="w-32"
              buttonText="Back"
              bgClass="bg-neutral-500"
            ></the-button>
          </div>
          <div>
            <the-button
              
              buttonText="Share"
              btnWidth="w-32"
              textClass="text-neutral-500"
              bgClass="bg-white"
              borderColor="border-neutral-500"
            ></the-button>
          </div>
        </div>
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
  
  
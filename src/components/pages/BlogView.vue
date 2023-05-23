<template>
  <div class="bg-neutral-200">
    <div
      class="flex flex-col items-center justify center w-full h-[2578px] sm:h-[1628px] absolute bg-neutral-200"
    >
      <div
        class="absolute bg-white sm:w-[840px] w-[340px] flex flex-col h-[2538px] sm:h-[1588px]  overflow-y-auto scrollbar-hidden px-3 pt-5 pb-12"
      >
        <div
          class="flex sm:hidden flex-row py-3 mb-5 gap-3 items-center justify-center"
        >
          <the-button
            @click="gotoBlogs"
            btnWidth="w-80"
            buttonText="Back"
            bgClass="bg-neutral-500"
          ></the-button>
        </div>
        <div
          class="hidden sm:flex w-[820px] h-11 flex-row justify-between items-start px-5 mb-5 gap-3"
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
        <div
          class="flex sm:hidden flex-row py-3 mb-5 gap-3 items-center justify-center"
        >
          <the-button
            buttonText="Share"
            btnWidth="w-80"
            textClass="text-neutral-500"
            bgClass="bg-white"
            borderColor="border-neutral-500"
          ></the-button>
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
 
  
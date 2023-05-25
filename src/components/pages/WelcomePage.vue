<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
      <h2 class="flex text-2xl font-bold mb-6 justify-center items-center">
        Welcome to Blogs App
      </h2>
      <div class="flex justify-center sm:space-x-4 flex-col sm:flex-row items-center space-y-5 sm:space-y-0">
        <button
          @click="management"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-48"
        >
          Management Section
        </button>
        <button
          @click="blogs"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-48"
        >
          All Blogs
        </button>
      </div>
    </div>
  </div>
</template>
  
 <script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const management = () => {
      router.push("/posts");
    };
    const blogs = () => {
      router.push("/blogs");
    };
    return { management, blogs };
  },
};
</script>
  
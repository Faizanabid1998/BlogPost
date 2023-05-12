<template>
  <div class="font-bold text-2xl leading-10 py-3 px-5">
    <h1>Blog</h1>
  </div>

  <div
    title="card"
    class="container mx-auto grid grid-cols-2 gap-20 w-2/4 items-start"
  >
    <the-post
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :description="blog.description"
    >
    </the-post>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const blogs = computed(function () {
      return store.getters.blog;
    });
    return { blogs };
  },
};
</script>


<template>
  <div class="font-bold text-2xl leading-10 py-3 px-14">
    <h1>Blog</h1>
  </div>

  <div
    title="card"
    class="container grid grid-cols-2 items-start mx-auto gap-5"
  >
    <the-post
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :description="limitedDescription(blog.description)"
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
    const limitedDescription = (description) => {
      const limit = 40;
      const words = description.split(' ');
      return words.slice(0, limit).join(' ') + '...';
    };
    return { blogs,limitedDescription  };
  },
};
</script>


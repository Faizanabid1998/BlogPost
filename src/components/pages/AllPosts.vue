<template>
  <div>
    <nav-bar yourText="Create Blog" heading="All Posts"></nav-bar>
    <div class="">
      <the-blog
        class="my-4 mx-3"
        v-for="blog in blogs"
        :key="blog.id"
        :title="blog.title"
        :date="blog.date"
        :author="blog.author"
        :category="blog.category"
        >>
      </the-blog>
    </div>
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
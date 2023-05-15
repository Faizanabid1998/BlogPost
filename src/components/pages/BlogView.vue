<template>
  <div>
    <header class="flex flex-row justify-between px-5 py-3">
      <back-button back="Back"></back-button>
      <base-button editDel="Share"></base-button>
    </header>
    <view-comp
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :description="blog.description"
      :date="blog.date"
      :author="blog.author"
      :category="blog.category"
    ></view-comp>
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
  
  
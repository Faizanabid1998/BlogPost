<template>
  <div class="px-7 gap-16">
    <div
      id="card"
      class="flex flex-row items-start justify-center gap-5 w-full h-32 pl-8"
    >
      <img class="w-52 h-32" src="../../images/Image.svg" alt="" />
      <div
        id="frame"
        class="flex flex-col justify-between items-start gap-5 w-[418px] h-32"
      >
        {{ title }}
        <div
          class="flex flex-row items-start gap-2 text-sm font-normal h-5 w-[418px]"
        >
          <h1>Author:&nbsp;{{ author }}</h1>
          <h1>Date:&nbsp;{{ date }}</h1>
          <h1>Category:&nbsp;{{ category }}</h1>
        </div>
      </div>
      <div
        id="buttons"
        class="flex flex-col justify-between gap-5 h-32 w-24 flex-grow-0 ml-auto"
      >
        <base-button editDel="Edit" @click="editBlog"></base-button>
        <base-button editDel="Delete" @click="deleteBlog"></base-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "date", "author", "category", "description"],
  setup(_, { emit }) {
    const editBlog = () => {
      emit("edit-blog");
    };
    const deleteBlog = () => {
      emit("delete-blog");
    };
    return { editBlog, deleteBlog };
  },
};
</script>
<template>
  <div class="mb-4 flex items-center">
    <div
      id="card"
      class="flex flex-row items-start justify-between gap-5 w-[760px] h-32 pt-3"
    >
      <img class="w-52 h-32" src="../../images/Image.svg" alt="" />
      <div
        id="frame"
        class="flex flex-col justify-between items-start gap-5 w-[418px] h-32"
      >
        {{ title }}
        <div
          class="flex flex-row items-start gap-2 text-sm font-normal h-5 w-[418px] self-stretch"
        >
        <div>
          <h1>Author:&nbsp;{{ author }}</h1>
        </div>  
        <div>
          <h1>Date:&nbsp;{{ date }}</h1>
        </div>
        <div>
          <h1>Category:&nbsp;{{ category }}</h1>
        </div>
        </div>
      </div>
      <div
        id="buttons"
        class="flex flex-col justify-between gap-5 h-32 w-24 flex-grow-0 "
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
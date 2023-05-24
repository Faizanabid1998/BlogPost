<template>
  <div class="mb-4 flex flex-col items-center">
    <div
      id="card"
      class="flex sm:flex-row flex-col items-start justify-between gap-5 sm:w-[760px] w-[300px] sm:h-32 h[394px] pt-3"
    >
      <img class="sm:w-52 w-72  sm:h-32 h-44 border-2 rounded-md" :src="image" alt="" />
      <div
        id="frame"
        class="flex flex-col justify-between items-start gap-5 sm:w-[418px] w-72 sm:h-32 h-36"
      >
        {{ title }}
        <div
          class="flex sm:flex-row flex-col items-start sm:gap-2 gap-3 text-sm font-normal sm:h-5 h-32 sm:w-[418px] w-72 self-stretch"
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
        class="flex sm:flex-col flex-row justify-between gap-5 sm:h-32 h-11 sm:w-24 w-72 flex-grow-0 "
      >
        <base-button editDel="Edit" @click="editBlog"></base-button>
        <base-button editDel="Delete" @click="deleteBlog"></base-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "date", "author", "category", "description","image"],
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
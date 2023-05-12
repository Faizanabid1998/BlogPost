<template>
    <div class="container">
        <div class="gap-8 flex flex-row w-[760px] h-32 mx-auto ">
      
          <div class="flex flex-row ">
            <img class="w-52 h-32" src="../../images/Image.svg" alt="" />
      
            <div class="grid grid-cols-1 ">
              <div class="h-7  w-[418px] pl-3 font-bold text-2xl">
                {{ title }}
              </div>
      
              <div class="flex flex-row items-end w-[418px] pl-3 gap-2 text-sm font-normal">
                <h1>Author:&nbsp;{{author}}</h1>
                <h1>Date:&nbsp;{{ date }}</h1>
                <h1>Category:&nbsp;{{ category }}</h1>
              </div>
            </div>
          </div>
         
          <div class="flex flex-col justify-between pl-6 ">
              <base-button editDel="Edit"></base-button>
              <base-button editDel="Delete"></base-button>
              
          </div>
       
        </div>

    </div>
</template>
<script>
// import { ref } from "vue";
export default {
  props: ["title", "date", "author", "category", "description"],
  // setup() {

  // },
};
</script>
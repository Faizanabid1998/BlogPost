<template>
 
    <div id="card" class="flex flex-col gap-5 sm:w-[320px]  h-[428px] sm:items-start">
      <img class="sm:w-80 w-72 h-52 rounded-xl" src="../../images/Image.svg" alt="" />
      <div class="flex flex-col items-start gap-2 sm:w-80 w-[300px] h-52 self-stretch">
        <div class="font-bold text-2xl leading-10 sm:w-80 w-[300px] h-20">
          {{ title }}
        </div>
       
        <div class="font-normal text-sm sm:w-80 w-[300px] h-32 self-stretch">{{ description }}</div>
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
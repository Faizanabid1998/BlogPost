<template>
  <div class="   ">
    <div
      id="card"
      class="mx-auto my-auto flex flex-col gap-5 w-[320px] h-[428px]"
    >
      <img class="w-auto h-auto" src="../../images/Image.svg" alt="" />
      <div class="flex flex-col items-start gap-2 w-[320px] h-52 self-stretch">
        <div class="font-bold text-2xl leading-10 w-[320px] h-20">
          {{ title }}
        </div>
        <br />
        <div class="font-normal text-sm w-[320px] h-32">{{ description }}</div>
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
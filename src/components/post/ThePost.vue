<template>
  <div
    id="card"
    class="flex flex-col sm:gap-5 items-center sm:w-[320px] h-[428px] sm:items-start"
  >
    <img class="sm:w-80 w-72 h-52 rounded-xl" :src="image" alt="" />
    <div
      class="flex flex-col items-start gap-2 sm:w-80 w-72 h-52 self-stretch m-auto"
    >
      <div class="font-bold text-2xl leading-10 sm:w-80 w-72 h-16 sm:mx-auto">
        {{ title }}
      </div>

      <div class="font-normal text-sm sm:w-80 w-72 h-32 self-stretch">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "date", "author", "category", "description", "image"],
};
</script>
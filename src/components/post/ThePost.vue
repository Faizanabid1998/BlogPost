<template>
  <div class="   ">
    <div class="container mx-auto my-auto flex flex-col">
      <div>
        <img class="w-auto h-auto" src="../../images/Image.svg" alt="" />
        <div class="container">
          <h1 class="font-bold text-2xl mt-2 w-80 h-20">
            {{ title }}
          </h1>
        </div>
      </div>

      <br />
      <div>
        <div>
          <h2 for="date">{{ date }}</h2>
        </div>
        <div>
          <h1></h1>
          <h2 for="author">{{ author }}</h2>
        </div>
        <div>
          <h2 for="category">{{ category }}</h2>
        </div>
        <div class="text-sm">
          <h2 for="category">{{ description }}</h2>
        </div>
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
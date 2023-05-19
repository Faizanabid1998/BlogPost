  <template>
    <div class="flex flex-col ml-auto items-center">
      <img class="w-[720px] h-[400px]" src="../../images/Image.svg" alt="" />
      <div class="flex flex-col gap-3">
        <div
          id="title"
          class="flex flex-row gap-3 py-5 font-bold text-3xl leading-10"
        >
          {{ title }}
        </div>
        <div
          class="flex flex-col py-3 gap-3 w-[720px] h-24 "
        >
          <div class="font-normal text-base leading-5">Date:&nbsp;{{ date }}</div>
          <div class="font-normal text-base leading-5">Author:&nbsp;{{ author }}</div>
          <div class="font-normal text-base leading-5">Categroy:&nbsp;{{ category }}</div>
        </div>
        <div
          id="desc"
          class="py-5 gap-3 font-normal text-base leading-6 w-[720px] h-[808px]"
        >
          {{ description }}
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
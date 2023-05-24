  <template>
  <div
    class="flex flex-col ml-auto items-center justify-center w-[320px] sm:w-full "
  >
    <img
      class="sm:w-[720px] w-[320px] sm:h-[400px] h-44 border-2 rounded-md"
      :src="image"
      alt=""
    />
    <div class="flex flex-col gap-3 sm:w-[720px] w-[320px]">
      <div
        id="title"
        class="flex flex-row gap-3 py-5 font-bold text-3xl leading-10"
      >
        {{ title }}
      </div>
      <div class="flex flex-col py-3 gap-3 sm:w-[720px] w-[320px] h-24">
        <div class="font-normal text-base leading-5">Date:&nbsp;{{ date }}</div>
        <div class="font-normal text-base leading-5">
          Author:&nbsp;{{ author }}
        </div>
        <div class="font-normal text-base leading-5">
          Categroy:&nbsp;{{ category }}
        </div>
      </div>
      <div
        id="desc"
        class="py-5 gap-3 font-normal text-base leading-6 sm:w-[720px] w-[320px] h-[808px]"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>
  <script>
// import { ref } from "vue";
export default {
  props: ["title", "date", "author", "category", "description" ,"image"],
  // setup() {

  // },
};
</script>
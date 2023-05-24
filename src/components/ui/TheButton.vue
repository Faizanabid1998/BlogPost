<template>
  <button
    :class="`flex flex-row items-center ${btnWidth} h-11 ${bgClass} rounded-[4px] justify-center  px-5 hover:bg-slate-400 ${borderColor} border-2 `"
  >
    <div :class="`w-32 h-6 leading-6  font-medium ${textClass}`">
      {{ buttonText }}
    </div>
  </button>
</template>


    <script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },

    bgClass: {
      type: String,
      default: "bg-neutral-500",
    },
    textClass: {
      type: String,
      default: "text-white",
    },
    borderColor: {
      type: String,
      default: "border-neutral-500",
    },
    btnWidth: {
      type: String,
      default: "w-32",
    },
  },
};
</script>
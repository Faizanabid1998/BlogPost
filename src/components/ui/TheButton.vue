<template>
  <div>
    <button
      :class="`flex flex-row items-center w-24 h-11 bg-neutral-500 rounded-md justify-center py-3 px-5`"
    >
      <div :class="`w-14 h-6 leading-6  font-medium text-white`">
        {{ buttonText }}
      </div>
    </button>
  </div>
</template>


    <script>
export default {
  props: ["buttonText"],
};
</script>
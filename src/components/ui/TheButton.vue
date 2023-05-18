<template>
  <router-link :to="route" >
    <button
      :class="`flex flex-row items-center w-44 h-11 bg-neutral-500 rounded-md justify-center py-3 px-5 hover:bg-slate-600 `"
    >
      <div :class="`w-32 h-6 leading-6  font-medium text-white`">
        {{ buttonText }}
      </div>
    </button>
  </router-link>
</template>


    <script>
export default {
  props: ["buttonText","route"],
};
</script>
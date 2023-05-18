<template>
  <div>
    <button
      :class="`flex flex-row items-center w-24 h-11 bg-white border-4  border-neutral-500 rounded-md justify-center py-3 px-5 hover:bg-slate-300`"
    >
      <div :class="`w-14 h-6 leading-6 text-xl  font-medium text-neutral-500`">
        {{ editDel }}
      </div>
    </button>
  </div>
</template>
  
  
<script>
export default {
  props: ["editDel"],
};
</script>
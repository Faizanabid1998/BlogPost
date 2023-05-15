<template>
  <nav class="mx-3 flex flex-row items-center justify-between mt-5">
    <div class="text-3xl font-bold w-36 h-10 leading-10">{{ heading }}</div>
    <div class="ml-auto">
      <the-button :button-text="yourText" :bg="`red`"></the-button>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["yourText", "heading"],
};
</script>
<template>
  <nav
    class="container flex flex-row mx-auto items-center justify-between mt-3"
  >
    <div class="text-xl font-medium w-32 h-10 leading-10">{{ heading }}</div>
    <div class="ml-auto">
      <the-button :button-text="yourText" :bg="`neutral-500`"></the-button>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["yourText", "heading"],
};
</script>
<!-- LoadingSpinner.vue -->
<template>
  <div class="flex justify-center items-center h-16">
    <div
      class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-8 w-8"
    ></div>
  </div>
</template>
  
  <style>
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
  
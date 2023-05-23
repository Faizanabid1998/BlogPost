<template>
 <router-view></router-view>
</template>

<style >
.scrollbar-hidden {
scrollbar-width: none; /* Hide scrollbar on Firefox */
-ms-overflow-style: none; /* Hide scrollbar on IE and Edge */
}

.scrollbar-hidden::-webkit-scrollbar {
width: 0; /* Hide scrollbar on Chrome, Safari, and Opera */
}
</style>

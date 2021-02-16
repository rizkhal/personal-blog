<template>
  <!-- Pagination -->
  <div class="flex flex-wrap items-center py-8">
    <a
      href="#"
      class="h-10 w-10 rounded-md bg-blue-800 hover:bg-blue-600 dark:text-gray-400 dark-hover:text-white font-semibold text-white text-sm flex items-center justify-center"
      >1</a
    >
    <a
      href="#"
      class="h-10 w-10 rounded-md font-semibold text-gray-800 dark:text-gray-400 dark-hover:text-white hover:bg-blue-600 hover:text-white text-sm flex items-center ml-3 justify-center"
      >2</a
    >
    <a
      href="#"
      class="h-10 w-10 rounded-md font-semibold text-gray-800 dark:text-gray-400 hover:text-gray-600 dark-hover:text-white text-sm flex items-center justify-center ml-3"
      >Next <i class="fas fa-arrow-right ml-2"></i
    ></a>
  </div>
</template>
<script>
export default {
  name: "Pagination",
};
</script>
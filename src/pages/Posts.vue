<template>
  <!-- Posts Section -->
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <article class="flex flex-col shadow rounded-md my-4">
      <!-- Article Image -->
      <a href="#" class="hover:opacity-75">
        <img
          class="rounded-t-md w-full max-h-80"
          src="@/assets/img/cover.jpg"
        />
      </a>
      <div class="dark:bg-gray-800 flex flex-col rounded-b-md justify-start p-6">
        <router-link :to="`/blog/this-is-detail-post`"
          href="#"
          class="text-md font-bold text-gray-800 dark:text-gray-100 hover:text-gray-700 pb-4"
          >Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</router-link
        >
        <p href="#" class="text-xs pb-3 text-gray-800 dark:text-gray-100">
          By
          <a href="#" class="font-semibold hover:text-gray-800">Rizkhal 😎</a>,
          Published on April 25th, 2020
        </p>
        <a href="#" class="text-sm text-gray-800 dark:text-gray-100"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis
          dui porta volutpat. In sit amet posuere magna..</a
        >
      </div>
    </article>

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
  </section>

  <!-- Sidebar Section -->
  <!-- <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
    
  </aside> -->
</template>

<script>
export default {
  name: "Posts",
};
</script>
<style scoped>
</style>
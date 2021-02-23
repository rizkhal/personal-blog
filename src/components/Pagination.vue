<template>
  <!-- Pagination -->
  <div class="flex flex-wrap items-center py-8">
    <!-- @click="prevPage" -->
    <a
      href="#"
      class="px-4 py-3 bg-blue-700 rounded-md font-semibold text-white hover:text-gray-600 dark-hover:text-white flex items-center justify-center mr-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6 feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      Prev
    </a>
    <!-- @click="nextPage" -->
    <a
      href="#"
      class="px-4 py-3 bg-blue-700 rounded-md font-semibold text-white hover:text-gray-600 dark-hover:text-white flex items-center justify-center ml-3"
    >
      Next
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6 feather feather-chevron-right"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    page: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    emit("next", () => );
  },
};
</script>
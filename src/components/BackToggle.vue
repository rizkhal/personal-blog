<template>
  <a
    :href="target"
    class="fixed z-40 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full shadow-md cursor-pointer left-4 top-4 dark:bg-gray-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-white dark:text-gray-800 feather feather-arrow-left"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  </a>
</template>
<script>
export default {
  name: "BackToggle",
  props: {
    target: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    let target;

    if (props.target) {
      target = props.target;
    } else {
      target = process.env.VUE_APP_BASE_URL;
    }

    return { target };
  },
};
</script>
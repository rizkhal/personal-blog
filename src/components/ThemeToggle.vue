<template>
  <div
    @click.prevent="toggle"
    class="cursor-pointer z-40 w-8 h-8 fixed right-4 top-4 rounded-full flex items-center shadow-md justify-center bg-gray-800 dark:bg-yellow-400"
  >
    <svg
      v-if="state.theme == 'light'"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4 text-white feather feather-moon"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4 text-white feather feather-sun"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  </div>
</template>
<script>
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";

export default {
  name: "ThemeToggle",
  setup(props) {
    const store = useStore();
    const toggle = () => {
      store.dispatch("toggleTheme");
    };

    const state = computed(() => store.state.theme);

    watchEffect(() => {
      state.value.theme === "light"
        ? document.documentElement.classList.remove("mode-dark")
        : document.documentElement.classList.add("mode-dark");
    });

    return { toggle, state };
  },
};
</script>
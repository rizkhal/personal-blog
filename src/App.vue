<template>
  <main class="min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-purple-50">
    <div class="container mx-auto flex flex-wrap pb-6">
	  <ThemeToggle />
      <Header />
      <router-view />
      <Footer />
    </div>
  </main>
</template>

<script>
import { onBeforeMount } from "vue";
import ThemeToggle from "@/components/ThemeToggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    ThemeToggle,
    Header,
    Footer,
  },
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("initTheme");
    });
  },
};
</script>

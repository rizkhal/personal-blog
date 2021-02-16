<template>
  <article
    v-for="(post, index) in posts"
    :key="index"
    class="flex flex-col shadow rounded-md my-4"
  >
    <!-- Article Image -->
    <a href="#" class="hover:opacity-75">
      <img class="rounded-t-md w-full max-h-80" src="@/assets/img/cover.jpg" />
    </a>
    <div class="dark:bg-gray-800 flex flex-col rounded-b-md justify-start p-6">
      <router-link
        :to="`/blog/this-is-detail-post`"
        href="#"
        class="text-md font-bold text-gray-800 dark:text-gray-100 hover:text-gray-700 pb-4"
        >{{ post.name }}</router-link
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
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Posts",
  async setup() {
    const posts = ref(null);
    const store = useStore();

    try {
      const api = await fetch(
        "https://api.github.com/repos/rizkhal/rizkhal.github.io/contents/source/_posts?ref=dev"
      );

      const response = await api.json();
      store.dispatch("setCount", response.length);

      posts.value = response;
    } catch (e) {
      console.error(e);
    }

    return { posts };
  },
};
</script>
<template>
  <div v-if="error" class="absolute top-2/4">
    {{ error.message }} ☹️
  </div>
  <article
    v-else
    v-for="(item, index) in results"
    :key="index"
    class="flex w-full flex-col shadow rounded-md my-4"
  >
    <a href="#" class="hover:opacity-75">
      <img class="rounded-t-md object-cover h-full w-full" :src="item.cover" />
    </a>
    <div class="dark:bg-gray-800 flex flex-col rounded-b-md justify-start p-4">
      <router-link
        :to="item.slug"
        href="#"
        class="text-md font-bold text-gray-800 dark:text-gray-100 hover:text-gray-700 pb-4"
        >{{ item.title }}</router-link
      >
      <p href="#" class="text-xs pb-3 text-gray-800 dark:text-gray-100">
        By <a href="#" class="font-semibold hover:text-gray-800">Rizkhal</a> on
        {{ item.date }} ☕️
      </p>
      <p class="text-sm text-gray-800 dark:text-gray-100">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>

<script>
import { ref } from "vue";
import http from "@/api/http";
import * as pattern from "@/lib/pattern";

export default {
  name: "PostLists",
  async setup() {
    const tmp = [];
    const dates = [];
    const slugs = [];
    const titles = [];
    const thumbnails = [];
    const descriptions = [];

    const results = [];
    const error = ref(null);

    try {
      const lists = await http(
        "https://api.github.com/repos/rizkhal/personal-blog-content/contents/contents/"
      );

      for (var i = 0; i < lists.length; i++) {
        const res = await http(lists[i].git_url);

        tmp.push(atob(res.content));

        dates.push(pattern.date(tmp[i]));
        slugs.push(pattern.slug(tmp[i]));
        titles.push(pattern.title(tmp[i]));
        descriptions.push(pattern.description(tmp[i]));
        thumbnails.push(
          process.env.VUE_APP_COVER_BASE_PATH + pattern.cover(tmp[i])
        );

        results.push({
          title: titles[i],
          slug: slugs[i],
          date: dates[i],
          cover: thumbnails[i],
          description: descriptions[i],
        });
      }
    } catch (e) {
      error.value = e;
    }

    return { error, results };
  },
};
</script>
<template>
  <div v-if="error" class="absolute top-2/4">{{ error.message }} ☹️</div>
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
        class="text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-gray-700 pb-4"
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

  <div v-if="lastPage >= 1" class="flex flex-wrap items-center py-8">
    <button
      @click.prevent="prev"
      :disabled="page === 1"
      :class="page === 1 ? 'opacity-25' : 'false'"
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
    </button>
    <button
      @click.prevent="next"
      :disabled="page === lastPage"
      :class="page === lastPage ? 'opacity-25' : 'false'"
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
    </button>
  </div>
</template>

<script>
import http from "@/api/http";
import { useStore } from "vuex";
import * as pattern from "@/lib/pattern";
import { ref, reactive, watchEffect, toRefs } from "vue";

export default {
  name: "PostLists",
  async setup() {
    const tmp = [];
    const dates = [];
    const slugs = [];
    const titles = [];
    const thumbnails = [];
    const descriptions = [];

    const content = [];
    const results = ref([]);
    const error = ref(null);
    const store = useStore();

    const paginate = reactive({
      page: 1,
      total: 2,
      perPage: 12,
      lastPage: 0,
    });

    try {
      const lists = await http(
        "https://api.github.com/repos/rizkhal/personal-blog-content/contents/contents"
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

        content.push({
          title: titles[i],
          slug: slugs[i],
          date: dates[i],
          cover: thumbnails[i],
          description: descriptions[i],
        });
      }

      results.value = content.slice(0, paginate.perPage);
    } catch (e) {
      error.value = e;
    }

    const next = () => {
      paginate.page++;
    };

    const prev = () => {
      paginate.page--;
    };

    watchEffect(() => {
      let start = (paginate.page - 1) * paginate.perPage;
      let end = start + paginate.perPage;
      results.value = content.slice(start, end);
      paginate.lastPage = content.length / paginate.perPage;
    });

    return {
      next,
      prev,
      error,
      results,
      ...toRefs(paginate),
    };
  },
};
</script>
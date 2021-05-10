<template>
  <div v-if="error" class="absolute top-2/4">{{ error.message }} ☹️</div>
  <div v-else class="w-full mt-4">
    <EditToggle :target="target" />
    <BackToggle />
    <div class="mb-16 text-center">
      <p class="text-lg font-semibold">{{ title }}</p>
      <p href="#" class="mt-2 text-xs text-gray-800 dark:text-gray-100">
        By <a href="#" class="font-semibold hover:text-gray-800">Rizkhal</a> on
        {{ date }} ☕️
      </p>
    </div>
    <vue3-markdown-it :html="true" :source="content" />
  </div>
</template>
<script>
import http from "@/api/http";
import "@/assets/css/md-dark.css";
import { useRouter } from "vue-router";
import { reactive, toRefs, ref } from "vue";
import VueMarkdownIt from "vue3-markdown-it";
import * as pattern from "@/lib/pattern";
import EditToggle from "@/components/EditToggle";
import BackToggle from "@/components/BackToggle";

export default {
  name: "PostDetail",
  components: {
    "vue3-markdown-it": VueMarkdownIt,
    EditToggle: EditToggle,
    BackToggle: BackToggle,
  },
  async setup() {
    const router = useRouter();
    const error = ref(null);
    const data = reactive({
      title: String,
      date: String,
      content: String,
      target: String,
    });

    try {
      const { id } = router.currentRoute.value.params;

      const response = await http(
        `https://api.github.com/repos/rizkhal/personal-blog-content/contents/contents/${id}.md?ref=master`
      );

      const parsed = atob(response.content);

      data.target = response.html_url;
      data.date = pattern.date(parsed);
      data.title = pattern.title(parsed);
      data.content = pattern.clean(parsed);
    } catch (e) {
      error.value = e;
    }

    return { error, ...toRefs(data) };
  },
};
</script>

<template>
  <div class="w-full">
    <div>
      <vue3-markdown-it :html="true" :source="content" />
    </div>
  </div>
</template>
<script>
import "@/assets/css/md-dark.css";
import { reactive, toRefs } from "vue";
import VueMarkdownIt from "vue3-markdown-it";

export default {
  name: "PostDetail",
  components: {
    "vue3-markdown-it": VueMarkdownIt,
  },
  async setup() {
    const data = reactive({
      content: null,
    });

    try {
      const api = await fetch(
        "https://api.github.com/repos/rizkhal/rizkhal.github.io/contents/source/_posts/spread-operator-to-rid-of-duplicate-value.md?ref=dev"
      );

      const response = await api.json();
      const { content } = response;

      data.content = atob(content);
    } catch (e) {
      console.error(e);
    }

    return { ...toRefs(data) };
  },
};
</script>

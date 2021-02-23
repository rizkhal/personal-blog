<template>
  <section class="min-h-screen w-full flex flex-col items-center px-3">
    <Suspense>
      <template #default>
        <AsyncPost />
      </template>
      <template #fallback>
        <div class="absolute top-2/4">Loading...</div>
      </template>
    </Suspense>
  </section>
</template>
<script>
import { defineAsyncComponent, onBeforeMount } from "vue";

const AsyncPost = defineAsyncComponent(() =>
  import("../components/PostDetail.vue" /* webpackChunkName: "post-detail" */)
);

export default {
  name: "Post",
  components: {
    AsyncPost,
  },
  setup() {
    onBeforeMount(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  },
};
</script>
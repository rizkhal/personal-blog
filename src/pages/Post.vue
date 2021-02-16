<template>
  <section class="min-h-screen w-full md:w-2/3 flex flex-col items-center px-3">
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
import { defineAsyncComponent } from "vue";

const AsyncPost = defineAsyncComponent(() =>
  import("../components/PostDetail.vue" /* webpackChunkName: "post-detail" */)
);

export default {
  name: "Post",
  components: {
    AsyncPost,
  },
};
</script>
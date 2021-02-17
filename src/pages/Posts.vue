<template>
  <section class="min-h-screen w-full md:w-2/3 flex flex-col items-center px-3">
    <Suspense>
      <template #default>
        <AsyncPostsComponent />
      </template>
      <template #fallback>
        <div class="absolute top-2/4">Loading...</div>
      </template>
    </Suspense>
  </section>
</template>

<script>
import { defineAsyncComponent, onErrorCaptured, ref } from "vue";

const AsyncPostsComponent = defineAsyncComponent(() =>
  import("../components/PostLists.vue" /* webpackChunkName: "post-lists" */)
);

export default {
  name: "Posts",
  components: {
    AsyncPostsComponent,
  },
  setup(props) {
    // 
  },
};
</script>
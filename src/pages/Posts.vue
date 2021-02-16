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
import { useStore } from "vuex";
import { defineAsyncComponent } from "vue";
import Pagination from "@/components/Pagination.vue";

const AsyncPostsComponent = defineAsyncComponent(() =>
  import("../components/PostLists.vue" /* webpackChunkName: "post-lists" */)
);

export default {
  name: "Posts",
  components: { Pagination, AsyncPostsComponent },
  setup() {
    const store = useStore();
    const { count } = store.getters;

    return { count };
  },
};
</script>
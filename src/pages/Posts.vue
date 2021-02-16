<template>
  <section class="min-h-screen w-full md:w-2/3 flex flex-col items-center px-3">
    <Suspense>
      <template #default>
        <AsyncPostsComponent />
      </template>
      <template #fallback>
        <Skeleton :count="count" />
      </template>
    </Suspense>
  </section>
</template>

<script>
import { useStore, computed } from "vuex";
import { defineAsyncComponent } from "vue";
import Skeleton from "@/components/Skeleton.vue";
import Pagination from "@/components/Pagination.vue";

const AsyncPostsComponent = defineAsyncComponent({
  loader: () =>
    import("../components/Posts.vue" /* webpackChunkName: "posts" */),
});

export default {
  name: "Posts",
  components: { Pagination, AsyncPostsComponent, Skeleton },
  setup() {
    const store = useStore();
    const { count } = store.getters;

    return { count };
  },
};
</script>
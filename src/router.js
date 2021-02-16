import { createRouter, createWebHistory } from "vue-router";

import Post from "@/pages/Post.vue";
import Posts from "@/pages/Posts.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    component: Posts,
    meta: { guest: true },
  },
  {
    path: "/blog",
    name: "Posts",
    component: Posts,
    meta: { guest: true },
  },
  {
    path: "/blog/:id",
    name: "Post",
    component: Post,
    meta: { guest: true },
  },
  { path: "/:pathMatch(.*)*", component: NotFound }
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;

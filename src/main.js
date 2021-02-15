import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/hooks/index";
import "@/index.css";

const app = createApp(App);
app.use(store); // inject store for use globaly
app.mount("#app");

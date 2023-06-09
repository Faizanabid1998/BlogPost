import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import store from './auth';
import router from "./router";
import TheButton from "./components/ui/TheButton.vue";
import NavBar from "./components/ui/NavBar";
import BaseButton from "./components/ui/BaseBtn";
import BackButton from "./components/ui/BackBtn.vue";
import ThePost from "./components/post/ThePost.vue";
import ViewComp from "./components/post/ViewComp.vue";
import TheBlog from "./components/post/TheBlog";
import SpinLoader from "./components/ui/SpinLoader";

const app = createApp(App);
app.component("the-button", TheButton);
app.component("nav-bar", NavBar);
app.component("base-button", BaseButton);
app.component("back-button", BackButton);
app.component("the-post", ThePost);
app.component("view-comp", ViewComp);
app.component("spin-loader", SpinLoader);
app.component("the-blog", TheBlog);

app.use(router);
app.use(store)
app.mount("#app");

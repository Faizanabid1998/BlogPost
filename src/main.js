import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import TheButton from "./components/ui/TheButton.vue";
import NavBar from "./components/ui/NavBar";
import BaseButton from "./components/ui/BaseBtn";
import ThePost from './components/post/ThePost.vue'
import AuthorList from "./components/pages/AuthorList.vue";
import store from './components/store/index'
import TheBlog from './components/post/TheBlog'

const app = createApp(App);
app.component("the-button", TheButton);
app.component("nav-bar", NavBar);
app.component("base-button", BaseButton);
app.component("the-post", ThePost);
app.component("author-list", AuthorList)
app.component("the-blog", TheBlog)
app.use(store)
app.mount("#app");

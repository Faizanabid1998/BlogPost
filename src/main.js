import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import TheButton from "./components/ui/TheButton.vue";
import NavBar from "./components/ui/NavBar";
import BaseButton from "./components/ui/BaseBtn";

const app = createApp(App);
app.component("the-button", TheButton);
app.component("nav-bar", NavBar);
app.component("base-button", BaseButton);

app.mount("#app");

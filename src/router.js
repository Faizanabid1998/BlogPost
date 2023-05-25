import { createRouter, createWebHistory } from "vue-router";
import AuthorList from "./components/pages/AuthorList.vue";
import AllPosts from "./components/pages/AllPosts.vue";
import BlogView from "./components/pages/BlogView.vue";
import AddEdit from "./components/pages/AddEdit.vue";
import EditBlog from "./components/pages/EditBlog.vue";
import WelcomePage from "./components/pages/WelcomePage"
import NotFound from "./components/pages/NotFound.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/blogs", component: AuthorList },
    { path: "/posts", component: AllPosts },
    { path: "/blogs/:id", component: BlogView },
    { path: "/edit/:id", component: EditBlog },
    { path: "/add", component: AddEdit },
    { path: "/:catchAll(.*)", component: NotFound },
  ],
});

export default router;

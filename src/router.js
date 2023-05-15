import { createRouter, createWebHistory } from 'vue-router';
import AuthorList from "./components/pages/AuthorList.vue";
import AllPosts from './components/pages/AllPosts.vue';
import BlogView from './components/pages/BlogView.vue'
import AddEdit from './components/pages/AddEdit.vue'
const router = createRouter({
history: createWebHistory(),
routes:[
    {path:'/',component:AllPosts},
    {path:'/blogs' , component:AuthorList },
    {path:'/posts' , component:AllPosts },
    {path:'/view' , component:BlogView },
    {path:'/edit' , component:AddEdit }
]

})


export default router;
import { createStore } from 'vuex';
import blogs from './blogs/index';
import newBlogs from './NewBlogs/index'
const store = createStore({
    modules: {
        blogs,
        newBlogs
    },
  });
  export default store;
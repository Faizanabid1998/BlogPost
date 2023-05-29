import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: null, // Initial token value is null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
});

export default store;

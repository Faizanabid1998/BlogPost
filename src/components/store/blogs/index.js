import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      blog: [
        {
          id: "b1",
          title: "How to create a simple blog app?",
          date: "123",
          author: "abcd",
          category: "blogs",
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        },
        {
          id: "b2",
          title: "How to create a simple blog app?",
          date: "123",
          author: "abcd",
          category: "blogs",
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        },
        {
          id: "b3",
          title: "How to create a simple blog app?",
          date: "123",
          author: "abcd",
          category: "blogs",
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        },
        {
          id: "b4",
          title: "How to create a simple blog app?",
          date: "123",
          author: "abcd",
          category: "blogs",
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        },
        {
          id: "b5",
          title: "abc",
          date: "123",
          author: "abcd",
          category: "blogs",
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        },
      ],
    };
  },
  mutations, //mutations:mutations
  actions,
  getters,
};

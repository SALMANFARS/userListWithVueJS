import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "One",
      },
      {
        id: 2,
        title: "Two",
      },
      {
        id: 2,
        title: "Three",
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      console.log(todo);
    },
  },

  modules: {},
});

import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "salman ",
        title2: "boroni",
        age: "24",
        adress: "moskow",
        experience: "5 year",
      },
      {
        id: 2,
        title: "Two",
        title2: "two2",
        age: "28",
        adress: "istnabul",
        experience: "2 year",
      },
      {
        id: 3,
        title: "Three",
        title2: "two2",
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    },
  },

  modules: {},
});

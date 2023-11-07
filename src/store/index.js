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
        id: 3,
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
    deleteTodo({commit }, id) {
      commit('delete_todo', id);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    }
  },

  modules: {},
});

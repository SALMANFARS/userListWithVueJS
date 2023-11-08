<template>
  <div>
    <div class="cl1 my-3 justify-content-between">
      <template v-if="!editing">
        <h4>{{ todo.title }}</h4>
        <h4>{{ todo.title2 }}</h4>
      </template>
      <template v-else>
        <input v-bind:value="todoText" @change="todoTextChange" type="text" class="col form-control">  
        <input v-bind:value="todoText2" @change="todoText2Change" type="text" class="col form-control"> 
      </template>
      <div>
        <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">{{ editing  ? 'Update':'Edit' }}</button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todo: {}
  },
  data() {
    return {
      todoText: "",
      todoText2: "",
      editing: false
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    todoText2Change(e) {
      this.todoText2 = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = !this.editing;

      if (this.editing) {
        this.todoText = todo.title;
        this.todoText2 = todo.title2;
      } else {
        todo.title = this.todoText;
        todo.title2 = this.todoText2;
        this.updateTodo(todo);
      }
    }
  }
};
</script>

<style>
.cl1 {
  display: flex;
  margin: 0 10px 0 10px;
}
</style>

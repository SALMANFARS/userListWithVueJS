<template>
  <div>
    <h1>Todo List</h1>
    <div class="txtBtn">
    <input @change="todoTextChange" v-bind:value="todoText" class="col form-control mr-2" type="text" />
    <input @change="todoText2Change" v-bind:value="todoText2" class="col form-control mr-2" type="text" />
    <button  @click="addTodoI" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';
export default {
    data() {
        return {
            todoText: "",
            todoText2: ""
        };
    },
     methods: {
         ...mapActions(["addTodo"]),
         todoTextChange(e) {
             this.todoText = e.target.value;  
         },
         todoText2Change(e) {
             this.todoText2 = e.target.value;  
         },
    addTodoI() {
        this.addTodo({
            id: v1(),
            title: this.todoText,
            title2: this.todoText2,
        });
        this.todoText = "";
        this.todoText2 = "";
    },
   },
};
</script>

<style>
.txtBtn{
    display: flex;
}
</style>

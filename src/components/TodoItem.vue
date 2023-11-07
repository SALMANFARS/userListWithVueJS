<template>
  <div>
    <div class="cl1 my-3 justify-content-between">
      <h3>{{ todo.title }}</h3>
      <div>
        <button class="btn btn-primary mx-2">Edit</button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        todo:{}
    },
    methods: {
        ...mapActions(['deleteTodo'])
    }
};
</script>

<style>
.cl1 {
  display: flex;
  margin: 0 10px 0 10px;
}
</style>

<template>
  <div>
    <h1>Todo List</h1>
    <div class="txtBtn">
      <button @click="openModal" class="btn btn-primary">
        Add New Employee
      </button>
    </div>

    <!-- Модальное окно -->
    <div
      v-if="showModal"
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      style="display: block"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Employee</h5>
            <button @click="closeModal" type="button" class="close">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="todoText">Employee Name:</label>
              <input v-model="todoText" class="form-control" type="text" />
            </div>
            <div class="form-group">
              <label for="todoText2">Employee Position:</label>
              <input v-model="todoText2" class="form-control" type="text" />
            </div>
            <div class="form-group">
              <label for="todoText3">Employee Age:</label>
              <input v-model="todoText3" class="form-control" type="text" />
            </div>
            <div class="form-group">
              <label for="todoText4">Employee experience:</label>
              <input v-model="todoText4" class="form-control" type="text" />
            </div>
            <div class="form-group">
              <label for="todoText5">Employee Adress:</label>
              <input v-model="todoText5" class="form-control" type="text" />
            </div>

            <button @click="addTodoI" class="btn btn-primary">
              Add Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "",
      todoText2: "",
      todoText3: "",
      todoText4: "",
      todoText5: "",
      showModal: false,
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
    todoText3Change(e) {
      this.todoText3 = e.target.value;
    },
    todoText4Change(e) {
      this.todoText4 = e.target.value;
    },
    todoText5Change(e) {
      this.todoText5 = e.target.value;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addTodoI() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
        title2: this.todoText2,
        age: this.todoText3,
        experience: this.todoText4,
        adress: this.todoText5,
      });
      this.todoText = "";
      this.todoText2 = "";
      this.todoText3 = "";
      this.todoText4 = "";
      this.todoText5 = "";
      this.closeModal();
    },
  },
};
</script>

<style>
/* Ваши стили */
</style>

<template>
  <div>
    <table class="table caption-top">
      <thead class="table-dark">
        <tr>
          <th scope="col" style="width: 16.67%;">Имя</th>
          <th scope="col" style="width: 16.67%;">Фамилия</th>
          <th scope="col" style="width: 16.67%;">Возраст</th>
          <th scope="col" style="width: 16.67%;">Стаж</th>
          <th scope="col" style="width: 16.67%;">Адрес</th>
          <th scope="col" style="width: 16.67%;">Изменение</th>
        </tr>
      </thead>
      <tbody class="cl1 my-3">
        <tr v-if="!editing">
          <td style="width: 16.67%;">{{ todo.title }}</td>
          <td style="width: 16.67%;">{{ todo.title2 }}</td>
          <td style="width: 16.67%;">{{ todo.age }}</td>
          <td style="width: 16.67%;">{{ todo.experience }}</td>
          <td style="width: 16.67%;">{{ todo.adress }}</td>
          <td style="width: 16.67%;">
            <button @click="updateTodoI(todo)" class="btn btn-primary mx-2 my-2">
              {{ editing ? 'Update' : 'Изменить' }}
            </button>
            <button @click="deleteTodo(todo.id)" class="btn btn-danger">Удалить</button>
          </td>
        </tr>
        <tr v-if="editing">
          <td colspan="5" style="width: 83.33%;">
            <div class="input-group">
              <input v-model="todoText" type="text" class="form-control" placeholder="Name" />
              <input v-model="todoText2" type="text" class="form-control" placeholder="Surname" />
              <input v-model="todoText3" type="text" class="form-control" placeholder="Age" />
              <input v-model="todoText4" type="text" class="form-control" placeholder="Experience" />
              <input v-model="todoText5" type="text" class="form-control" placeholder="Address" />
            </div>
          </td>
          <td style="width: 16.67%;">
            <button @click="updateTodoI(todo)" class="btn btn-primary mx-2 my-2">
              Обнавить
            </button>
            <button @click="deleteTodo(todo.id)" class="btn btn-danger">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- остальной код остается неизменным -->
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
      todoText3: "",
      todoText4: "",
      todoText5: "",
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
     todoText3Change(e) {
      this.todoText3 = e.target.value;
    },
    todoText4Change(e) {
      this.todoText4 = e.target.value;
    },
    todoText5Change(e) {
      this.todoText5 = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = !this.editing;

      if (this.editing) {
        this.todoText = todo.title;
        this.todoText2 = todo.title2;
        this.todoText3 = todo.age;
        this.todoText4 = todo.experience;
        this.todoText5 = todo.adress;
      } else {
        todo.title = this.todoText;
        todo.title2 = this.todoText2;
        todo.age = this.todoText3;
        todo.experience = this.todoText4;
        todo.adress = this.todoText5;
        this.updateTodo(todo);
      }
    }
  }
};
</script>

<style>
.cl1 {
  
  margin: 0 10px 0 10px;

}

</style>


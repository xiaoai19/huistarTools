<template>
  <div class="todo-list">
    <!-- <h1>Todo List</h1> -->
    <div class="headerTitle">
      <div class="header_txt">
        <div class="title_y">ToDo-List</div>

        <ShareLink />
      </div>
      <div class="title_small_y">
          每一件事都值得规划
      </div>
    </div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="New task" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" @change="toggleCompleted(index)" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = "";
      }
    },
    toggleCompleted(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    removeTodo(index) {
      this.todos.splice(index, 1); 
    },
  },
};
</script>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
}

span {
  flex-grow: 1;
}

button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #999;
}

.completed {
  text-decoration: line-through;
}

.headerTitle {
  margin-top: 11px;
}
.header_txt {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 120px; 
}
</style>

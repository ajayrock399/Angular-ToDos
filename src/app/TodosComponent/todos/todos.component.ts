import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItems: string | null;
  todos: Todo[];
  constructor() {

    this.localItems = localStorage.getItem("todos");
    if (this.localItems == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItems);
    }

  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    if (typeof todo.title == "undefined") {
      todo.title = ' ';
    }

    if (typeof todo.desc == "undefined") {
      todo.desc = ' ';
    }
    if (todo.title.replace(/ /g, '').length >= 1 || todo.desc.replace(/ /g, '').length >= 1) {
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }


  toggleTodo(todo: Todo) {
    console.log('still here')
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

    console.log(this.todos)
  }

}



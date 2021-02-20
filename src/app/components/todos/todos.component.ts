import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../../services/todo.service";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.fetchTodo().subscribe(todos => (this.todos = todos));
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.todoService.addTodo(todo).subscribe();
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
}

import { Component, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "src/services/todo.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"],
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  title: string;

  constructor(private todoService: TodoService) {}

  onSubmit(): void {
    const todo: Todo = { title: this.title, completed: false };
    this.addTodo.emit(todo);
    this.title = "";
  }
}

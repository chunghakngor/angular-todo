import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "src/services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  setClasses(): object {
    return {
      isCompleted: this.todo.completed,
    };
  }

  setToggleClass(): object {
    return {
      isChecked: this.todo.completed,
    };
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe();
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }
}

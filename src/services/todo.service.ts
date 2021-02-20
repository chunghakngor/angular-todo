import { Injectable } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  limit: number = 20;
  url: string = `https://jsonplaceholder.typicode.com/todos?_limit=${this.limit}`;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  fetchTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  toggleCompleted(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      JSON.stringify(todo),
      this.httpOptions
    );
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, this.httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`https://jsonplaceholder.typicode.com/todos`, JSON.stringify(Todo), this.httpOptions);
  }
}

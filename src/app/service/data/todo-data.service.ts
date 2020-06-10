import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get<Todo[]>(`${API_URL}/todos`);
  }

  removeTodo(num:number){
    return this.http.delete(`${API_URL}/todos/${num}/`);
  }

  addTodo(todo:Todo){
    return this.http.post<Todo>(`${API_URL}/todos`, todo);
  }

  getTodo(id:number){
    return this.http.get<Todo>(`${API_URL}/todos/${id}`)
  }

  updateTodo(id:number, todo: Todo){
    return this.http.put<Todo>(`${API_URL}/todos/${id}`, todo);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getTodos(name:string){
    return this.http.get<Todo[]>(`${API_URL}/todos/${name}`);
  }

  removeTodo(name:string, num:number){
    return this.http.delete(`${API_URL}/todos/${name}/${num}`);
  }

  addTodo(name:string, todo:Todo){
    return this.http.post<Todo>(`${API_URL}/todos/${name}/`, todo);
  }

  getTodo(name, id){
    return this.http.get<Todo>(`${API_URL}/todos/${name}/${id}`)
  }

  updateTodo(name: string,todo: Todo){
    return this.http.put<Todo>(`${API_URL}/todos/${name}/`, todo);
  }

}

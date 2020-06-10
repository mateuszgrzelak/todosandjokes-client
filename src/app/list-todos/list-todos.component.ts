import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from '../app.constants';

export class Todo {
  constructor(public description: string,
    public targetDate) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
  animations:[
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ]),
  ]
})
export class ListTodosComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: boolean;

  todos: Todo[] = [];

  todo: Todo;

  message: string;

  constructor(private todoService: TodoDataService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

 

  invalidDescriptionFormMessage = false;
  invalidDateFormMessage = false;

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      response => {
        this.todos = response;
      }
    );
    this.route.queryParams.subscribe(
      params => {
        if (params.updated) {
          this.message = 'Todo updated'
        }
      }
    )
    this.todo = new Todo('', '2020-12-12');
  }

  removeTodo(num: number) {
    this.todoService.removeTodo(num).subscribe(
      success => {
        this.todos.splice(num, 1);
        this.message = `Todo ${num} deleted Successful`;
      }
    );
  }

  addTodo() {
    if (!this.todo.targetDate) {
      this.invalidDateFormMessage = true;
    }else{
      this.invalidDateFormMessage = false;
    }
    if (!this.todo.description) {
      this.invalidDescriptionFormMessage = true;
    }else{
      this.invalidDescriptionFormMessage = false;
    }
    if(!this.invalidDateFormMessage && !this.invalidDescriptionFormMessage){
      let buff: Todo = new Todo(this.todo.description, this.todo.targetDate);
      this.todo = new Todo('',  '2020-12-12');
      this.todoService.addTodo(buff).subscribe(
        success => {
          this.todos.push(buff);
          this.message = 'Todo added Successful';
        }
      );
    }
  }

  updateTodo(id) {
    this.router.navigate(['todos/update', id]);
  }

}


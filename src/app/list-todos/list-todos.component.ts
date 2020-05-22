import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';

export class Todo {
  constructor(public id: number, public description: string,
    public done: boolean, public targetDate: Date) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  todo: Todo;

  message: string;

  constructor(private todoService: TodoDataService, private router: Router, private route: ActivatedRoute) { }

  invalidDescriptionFormMessage = false;
  invalidDateFormMessage = false;

  ngOnInit(): void {
    this.todoService.getTodos("mati").subscribe(
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
    this.todo = new Todo(0, '', false, new Date());
  }

  removeTodo(num: number) {
    this.todoService.removeTodo("mati", num).subscribe(
      response => {
        this.ngOnInit()
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
      this.todoService.addTodo('mati', this.todo).subscribe(
        success => {
          this.ngOnInit()
          this.message = 'Todo added Successful'
        }
      );
    }
  }

  updateTodo(id) {
    this.router.navigate(['todos/update', id]);
  }

}


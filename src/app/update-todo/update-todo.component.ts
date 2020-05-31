import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  todoNumber=0;
  todo: Todo;

  constructor(private todoService:TodoDataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.todoNumber = this.route.snapshot.params['id'];
    this.todo = new Todo('', new Date());
    this.todoService.getTodo(this.todoNumber).subscribe(
      data => this.todo = data
    );
  }

  updateTodo(){
    this.todoService.updateTodo(this.todoNumber, this.todo).subscribe(
      success => this.router.navigate(['/todos'], {queryParams:{updated: 'true'}})
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { JokesDataService } from '../service/data/jokes-data.service';
import { Joke } from '../service/data/jokes-data.service';
import { Subject } from 'rxjs';
import { LoaderService } from '../service/http/loader.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: boolean;
  disabledButton=false;

  constructor(private jokesService: JokesDataService, private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(
      (value) =>{
        this.isLoading = value;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.isLoading);
    this.getJokes();
  }

  jokes: Joke[];

  getJokes() {
    this.disabledButton=true;
    this.jokesService.getJokes().subscribe(
      data => {
        this.jokes = data;
        this.disabledButton=false;
      }
    );
    console.log(this.isLoading);
  }

}

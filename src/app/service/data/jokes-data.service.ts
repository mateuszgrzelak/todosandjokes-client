import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class Joke {
  constructor(public id: number,
  public type: string,
  public setup: string,
  public punchline: string){}
}

@Injectable({
  providedIn: 'root'
})
export class JokesDataService {

  constructor(private http: HttpClient) { }

  getJokes(){
    return this.http.get<Joke[]>(`${API_URL}/jokes`);
  }
}

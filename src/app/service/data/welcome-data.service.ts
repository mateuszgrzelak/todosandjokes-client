import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Welcome{
  constructor(public name:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<Welcome>('http://localhost:8080/');
  }

  executeParameter(name){
    return this.http.get<Welcome>(`http://localhost:8080/name/${name}`);
  }

}

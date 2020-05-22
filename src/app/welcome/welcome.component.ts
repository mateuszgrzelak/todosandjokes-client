import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name:string;
  nameMessage:string;

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  } 

  getWelcomeMessage(){
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.nameMessage = response.name;
  }
  
  handleErrorResponse(error){
    this.nameMessage = error.error.message;
  }

}

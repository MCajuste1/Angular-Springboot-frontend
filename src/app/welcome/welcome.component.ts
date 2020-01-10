import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

//ANNOTATION
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message: string = 'Some Welcome Message'
welcomeMessageFromService:string
name = ''
  handleSuccesfulResponse: any;
 
  constructor(
    private route: ActivatedRoute,
    private service:WelcomeDataService) { 

    }

  ngOnInit() {
    //COMPLIATION ERROR this.message = 5
    //console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessgae(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessage')
    //console.log("get welcome message");
  }




  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    console.log(response);
    console.log(response.message);

  }
  handleErrorResponse(error){
    //console.log(error);
    console.log(error.error);
    console.log(error.message);
    this.welcomeMessageFromService = error.error.message
  }

}

export class Class1{


}

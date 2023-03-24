import { Component } from '@angular/core';
import { InfopageService } from './services/infopage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public infopageService: InfopageService ) {


    
  }

}

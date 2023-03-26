import { Component } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( public infoPage: InfopageService ){ }

}

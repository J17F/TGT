import { Component } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( public infoPage: InfopageService ){ }

}

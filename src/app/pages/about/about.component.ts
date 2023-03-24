import { Component } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor( public infoPage: InfopageService ){ }

}

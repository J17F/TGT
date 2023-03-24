import { Component } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor( public infoPage: InfopageService ){ }

}

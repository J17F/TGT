import { Component } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  constructor( public infoPage: InfopageService ){ }

}

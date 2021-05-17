import { Component } from '@angular/core';
import {Params} from './params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BrightBoxFrontEnd';

  client: Params[] = [];
  clientname = '';
  firmname = '';
  adress = '';
  city = '';

  phone = '';
  email = '';
  ic = '';
  dic = '';

  months = '';

  

}

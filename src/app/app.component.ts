import { Component } from '@angular/core';
import {SearchService}   from './search.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SearchService]

})
export class AppComponent {

  item: number;
  subscription: Subscription;
  constructor() {}
  ngOnInit() {
    }
  

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import * as _ from 'lodash';
import { ApiClientService } from '../api-client.service';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    ApiClientService,
    AuthService
  ]

})
export class NavbarComponent implements OnInit {

  name : string ;

  constructor(
    private router: Router,
    private client: ApiClientService,
    private auth: AuthService
  ) {

  }

  ngOnInit() {

  }

  search(terms: string) {
    if (terms.length>2) {
      this.router.navigate([`search`, terms]);
    } else {
      this.router.navigate(['']);
    }
  }


  @ViewChild(ModalDirective) public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  public signIn(username: string) {
    let getti = this.client.getUser(username);
    getti.then( data => {
      this.name = data.username
      this.childModal.hide();
    })

  }

  public eventHandler(event, username) {
     if (event.keyCode === 13) {
       this.signIn(username);
     }
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap/components/rating';

import { AppComponent } from './app.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieComponent } from './movie/movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    BoxOfficeComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieComponent,
    NavbarComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    RatingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BoxOfficeComponent
      },
      {
        path: 'movie/:movieId',
        component: MovieComponent
      },
      {
        path: 'search/:searchStr',
        component: MovieSearchComponent
      }
    ]),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

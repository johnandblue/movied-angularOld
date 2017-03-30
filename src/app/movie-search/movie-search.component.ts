import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
  providers: [ ApiClientService ]

})
export class MovieSearchComponent implements OnInit {

  movies: Movie[];

  constructor(
    private client: ApiClientService,
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
  this.route.params.forEach((params: Params) => {
    let movieStr = params['searchStr'];
    this.client.searchMovies(movieStr)
      .then(movies => {
        this.movies = movies;
      }).catch(function (err) {
        console.log(err);
      });
})

  }

}

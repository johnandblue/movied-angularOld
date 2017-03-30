import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie';
import { ApiClientService } from '../api-client.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [ AuthService, ApiClientService ]
})
export class MovieListComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  categoryId: number;
  @Input()
  query: string;

  movies: Movie[];

  constructor(private client: ApiClientService) {
  }

  ngOnInit() {
    if (this.type === "discover"){
      this.client.discoverMovies()
        .then(movies => this.movies = movies);
    } else if (this.type === "search"){
      this.client.getMoviesFromSearch(this.query)
        .then(movies => this.movies = movies);
    } else {
      this.client.getMoviesFromCategory(this.categoryId)
        .then(movies => this.movies = movies);
    }

  }

}

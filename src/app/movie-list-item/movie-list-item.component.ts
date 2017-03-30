import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToMovie(){
    this.router.navigate(['/movie', this.movie.id])
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from './auth.service';

import { Movie } from './movie';
import { User } from './user';



@Injectable()

export class ApiClientService {
  private baseURL: string = "http://movied.herokuapp.com";

  constructor(private http: Http, private auth: AuthService) { }

  discoverMovies(): Promise<Movie[]> {
    return this.fetchMovies('/discover');
  }

  getMoviesFromCategory(categoryId: number): Promise<Movie[]> {
    return this.fetchMovies(`/categories/${categoryId}`);
  }

  getMoviesFromSearch(query: string): Promise<Movie[]> {
    return this.fetchMovies(`/search?q=${query}`);
  }

  searchMovies(str:string): Promise<Movie[]> {
   return this.fetchMovies(`/search?q=${str}`);
  }

  fetchMovies(url:string): Promise<Movie[]> {
    return this.http.get(`${this.baseURL}${url}`)
      .toPromise()
      .then(response => {
        return response.json().map((movie) => Movie.parse(movie))
      })
      .catch(this.handleError)
  }

  getMovie(id: number): Promise<Movie> {
    return this.http.get(`${this.baseURL}/movie/${id}`)
      .toPromise()
      .then(response => {
        return Movie.parse(response.json());
      })
      .catch(this.handleError)
  }

  getUser(username: string): Promise<User> {
    let headers = new Headers({ 'X-User': username })
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.baseURL}/me`, options)
      .toPromise()
      .then(response => {
        let user =  User.parse(response.json());
        this.auth.setUser(user);
        return this.auth.getCurrentUser();
      })
      .catch(this.handleError)
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

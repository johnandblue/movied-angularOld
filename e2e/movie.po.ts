import { browser, element, by } from 'protractor';

export class MoviePage {

  movieId: string;

  navigateTo() {
    return browser.get('/movie/' + this.movieId);
  }

  isMovieDetail() {
    return element(by.id('main-info')).isPresent();
  }


  getTitle() {
    return element(by.css('div h1')).getText();
  }

  getProductionCompany() {
    return element(by.css('p.company span')).getText();
  }

  getGenre() {
    return element(by.css('p.genre span')).getText();
  }


}

import { MoviePage } from './movie.po';

// Feature: Detailed Information of one movie. 
//   Background:Given the user is not logged
//
//   Scenario:Success of detailed information 
//     Given the user had not logged 
//     When user click on a Movie image 
//     Then the app shows Name of Movie, Description, company, genre, and stars.

describe('Detailed Information of one movie.', function() {
  let page: MoviePage;

  // 'Given the user is not logged'
  beforeEach(() => {
    page = new MoviePage();
    page.movieId = '333484';
  });

  describe('Success of detailed information', function() {

    it('When user click on a Movie image', function() {
      page.navigateTo();
      expect(page.isMovieDetail()).toBe(true);
    });

    it('Then the app shows Name of Movie, Description, company, genre, and stars.', function() {
      page.navigateTo();
      expect(page.getTitle()).toEqual('The Magnificent Seven');
      expect(page.getProductionCompany()).toEqual('Columbia Pictures');
      expect(page.getGenre()).toEqual('Action');
    });

    //TODO: 'Given the user is not logged'
  });


});

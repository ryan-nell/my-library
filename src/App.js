import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Bookshelf from './Bookshelf';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';

class App extends Component {

  // State object to query the books array
  state = {
    books: []
  };

  // Ajax call using lifecycle hook to get the books from a local db.
  componentDidMount() {
    this.getAllBooks();
  };

  //Get all the books using a promise
  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });

  };

  // Update the state of the books on from API
  updateShelf = (targetBook, targetShelf) => {
    BooksAPI.update(targetBook, targetShelf).then(() => {
      this.getAllBooks();
    });
  };

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div className="bookshelf-types">
            <div>
              <h1 className="shelf-header">Currently Reading</h1>
              
              <Bookshelf newShelf={this.updateShelf}  books={this.state.books.filter((currentBook) => (currentBook.shelf === "currentlyReading"))}/>
            </div>
            <div>
              <h1 className="shelf-header">Have Read</h1>
              <Bookshelf newShelf={this.updateShelf} books={this.state.books.filter((currentBook) => (currentBook.shelf === "read"))}/>
            </div>
            <div>
              <h1 className="shelf-header">Want To Read</h1>
              <Bookshelf newShelf={this.updateShelf} books={this.state.books.filter((currentBook) => (currentBook.shelf === "wantToRead"))}/>
            </div>
            <Link to="/BookSearch" className="search-input">Search</Link>
          </div>)}
        />
        <Route path="/booksearch" render={({history}) => (
            <BookSearch
              books={this.state.books}
              newShelf={(targetBook, targetShelf) => {
                this.updateShelf(targetBook, targetShelf);
                history.push('/');
              }}
              />
          )}
        />
      </div>
    );
  }
}

export default App;

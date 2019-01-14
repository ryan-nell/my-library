import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Bookshelf from './Bookshelf';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';

class App extends Component {

  // State object to query the books array
  state = {
    books: [],

  };

  // Ajax call using lifecycle hook to get the books from a local db.
  componentDidMount() {
    //Get all the books using a promise and set the state
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  };

  updateShelf = (targetShelf) => {
    console.log(this.state.currentShelf);
    this.setState({
      currentShelf: targetShelf
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
            <BookSearch books={this.state.books} />
          )}
        />
      </div>
    );
  }
}

export default App;

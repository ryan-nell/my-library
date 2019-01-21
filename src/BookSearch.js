import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';


class BookSearch extends Component {

  static propTypes = {
    newShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    query: '',
    bookResults: []
  };

  updateSearchQuery = (query) => {
    this.setState({ query }, () => {
      this.searchResults(this.state.query.trim());
    });
  };

  searchResults = (query) => {
    // Query exists
    if (query) {
      BooksAPI.search(query).then((results) => {
        // Search returns results
        if (results.length > 0 ) {
          this.setState({
            bookResults: results,
          });
        }
        else {
          this.setState({ bookResults: [] });
        }
      });
    }
  };

  render() {
    const {bookResults, query} = this.state;
    const {newShelf} = this.props;

    return (
      <div className="search-container">
        <div>
          <Link to="/" className="search-input">Back</Link>
          <form className="book-search-form">
            <input className="book-search-input" type="text"
              placeholder="Search By Tilte or Author"
              value={query}
              onChange={(event) => this.updateSearchQuery(event.target.value)}/>
          </form>
        </div>
        <div className="search-books-results">
          <Bookshelf
            books={bookResults}
            newShelf={newShelf}
          />
        </div>
      </div>
    );
  }
}


export default BookSearch

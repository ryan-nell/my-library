import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Bookshelf } from './Bookshelf';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as BooksAPI from './BooksAPI';

class BookSearch extends Component {

  state = {
    query: ''
  };

  updateSearchQuery = (query) => {
    BooksAPI.search(query).then(() => {
      this.setState({ query });
    });
  };

  render() {

    let showingBooks;

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingBooks = this.props.books.filter((book) => match.test(book.title));
    } else {
      showingBooks = this.props.books;
    }


    return (
      <div>
        {JSON.stringify(this.state)}
        <div>
          <Link to="/" className="search-input">Back</Link>
          <form className="book-search-form">
            <input className="book-search-input" type="text" placeholder="Search Library"
              value={this.state.query}
              onChange={(event) => this.updateSearchQuery(event.target.value)}/>
          </form>
        </div>
      </div>
    );
  }
}

export default BookSearch

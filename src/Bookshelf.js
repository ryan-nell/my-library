import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This displays books that i am currently reading
class Bookshelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    newShelf: PropTypes.func.isRequired
  }

// Define states
  state = {
    showMenu: null,
  };

  // Display/Hide the menu by changing the state
  displayMenu = id => {
    this.setState((state) => ({
      // Check & set the state with the id of the book or null
      showMenu: state.showMenu === id ? null : id,
    }));
  };

  render() {
    const { books } = this.props
    //const author = books.authors.join(',');

    return(
      <div className='book-container'>
        <div className='book-list'>
          {books.map((book) => (
            <div key={book.id}>
              {console.log(book)}
              <img src={book.imageLinks ? book.imageLinks.thumbnail: '' } alt="Book cover" />
              <button onClick={() => this.displayMenu(book.id)} type="button">Click</button>
              { this.state.showMenu === book.id ? (
                  <div className='dropdown-state'>
                    <p className="dropdown-option">Move to... </p>
                    <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                      console.log(book.shelf);}} className="dropdown-option" value="none" type="button">None</button>
                    <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                      console.log(book.shelf);}} className="dropdown-option" value="currentlyReading" type="button">Currently Reading</button>
                    <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                      console.log(book.shelf);}} className="dropdown-option" value="read" type="button">Have Read</button>
                    <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                      console.log(book.shelf);}} className="dropdown-option" value="wantToRead" type="button">Want to Read</button>
                  </div>
                ): null
              }
              <div className='book-details'>
                <div className='book-title'>{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors: null}
                </div>
                {console.log(book.authors)}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Bookshelf;

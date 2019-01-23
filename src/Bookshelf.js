import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css'

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
            <div className="book" key={book.id}>
              <div className="image-div">
                <img className="book-image" src={book.imageLinks ? book.imageLinks.thumbnail: '' } alt="Book cover" />
                <button className="shelf-button" onClick={() => this.displayMenu(book.id)} type="button">
                  <i className="fas fa-plus-circle"></i>
                </button>
              </div>
              <div className="shelf-action">
                { this.state.showMenu === book.id ? (
                    <div className='dropdown-state'>
                      <button className="disabled-button" type="button" disabled>Move To...</button>
                      <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                        }} className="shelf-button-option" value="none" type="button">None</button>
                      <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                        }} className="shelf-button-option" value="currentlyReading" type="button">Currently Reading</button>
                      <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                        }} className="shelf-button-option" value="read" type="button">Have Read</button>
                      <button onClick={(e) => {this.props.newShelf(book, e.target.value);
                        }} className="shelf-button-option" value="wantToRead" type="button">Want to Read</button>
                    </div>
                  ): null
                }
              </div>
              <div className='book-content'>
                <p className='book-title'>{book.title}</p>
                <p className="book-authors">{book.authors ? book.authors[0]: null}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Bookshelf;

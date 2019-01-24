import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css'

// This displays books that i am currently reading
class Bookshelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    newShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, newShelf } = this.props

    return(
      <div className='book-container'>
        <div className='book-list'>
          {books.map((book) => (
            <div className="book" key={book.id}>
              <div className="image-div">
                <img className="book-image" src={book.imageLinks ? book.imageLinks.thumbnail : '' } alt="Book cover" />
              </div>
              <div className="shelf-action">
                <select className='dropdown-state' onChange={(e) => {newShelf(book, e.target.value);}}
                  defaultValue={book.shelf} >
                  <option className="shelf-select-option" value="move" disabled>Move to...</option>
                  <option className="shelf-select-option" value="currentlyReading">Currently Reading</option>
                  <option className="shelf-select-option" value="wantToRead">Want to Read</option>
                  <option className="shelf-select-option" value="read">Read</option>
                  <option className="shelf-select-option" value="none">None</option>
                </select>
              </div>
              <div className='book-content'>
                <p className='book-title'>{book.title}</p>
                <p className="book-authors">{book.authors ? book.authors.join('\n') : null}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Bookshelf;

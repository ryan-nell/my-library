import React, { Component } from 'react';

// This displays books that i am currently reading
class Bookshelf extends Component {

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
    return(
      <div className='book-container'>
        <div className='book-list'>
          {this.props.books.map((book) => (
            <div key={book.id}>
              <img src={book.imageLinks.thumbnail} alt="Book cover" />
              <button onClick={() => this.displayMenu(book.id)} type="button">Click</button>
              { this.state.showMenu === book.id ? (
                  <div className='dropdown-state'>
                    <p className="dropdown-option">Move to... </p>
                    <button onClick={(e) => {this.props.newShelf( e.target.value); }} className="dropdown-option" value="none" type="button">None</button>
                    <button onClick={(e) => {this.props.newShelf( e.target.value); }} className="dropdown-option" value="currentlyReading" type="button">Currently Reading</button>
                    <button onClick={(e) => {this.props.newShelf( e.target.value); }} className="dropdown-option" value="read" type="button">Have Read</button>
                    <button onClick={(e) => {this.props.newShelf( e.target.value); }} className="dropdown-option" value="wantToRead" type="button">Want to Read</button>
                  </div>
                ): null
              }
              <div className='book-details'>
                <p className='book-title'>{book.title}</p>
                <p className='book-author'>{book.authors}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Bookshelf;

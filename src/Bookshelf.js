import React, { Component } from 'react';

// This displays books that i am currently reading
class Bookshelf extends Component {

// Define state for the menu
  state = {
    showMenu: null
  };

  // Display/Hide the menu by changing the state
  displayMenu = id => {
    this.setState( (state) =>({
      // Check & set the state with the id of the book or null
      showMenu: state.showMenu === id ? null : id
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
                    <button className="dropdown-option" type="button">Currently Reading</button>
                    <button className="dropdown-option" type="button">Have Read</button>
                    <button className="dropdown-option" type="button">Want to Read</button>
                    <button className="dropdown-option" type="button">None</button>
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

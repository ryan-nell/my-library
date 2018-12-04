import React, { Component } from 'react';

// This displays books that i am currently reading
class Bookshelf extends Component {
  render() {
    return(
      <div className='book-container'>
        <div className='book-list'>
          {this.props.books.map((book) => (
            <div key={book.id}>
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

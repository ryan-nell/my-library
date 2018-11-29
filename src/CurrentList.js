import React, { Component } from 'react';

// This displays books that i am currently reading
class CurrentList extends Component {
  render() {
    return(
      <div className='reading-container'>
        <div className='reading-header'>
          <h1>Currently Reading</h1>
        </div>
        <div className='reading-books'>
          {this.props.books.map((book) => (
            <div key={book.id}>
              {book.shelf === 'currentlyReading'&& (
                <div>
                  <div>{book.title}</div>
                  <div>{book.authors}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default CurrentList;

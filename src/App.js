import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books : []
  }

  // Ajax call using lifecycle hook to get the books from a local db.
  componentDidMount() {
    //Get all the books using a promise and set the state
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className='shelf-header'>Currently Reading</h1>
          <Bookshelf books={this.state.books.filter( (currentBook) => (
              currentBook.shelf === 'currentlyReading'
            ))}
          />
        </div>
        <div>
          <h1 className='shelf-header'>Have Read</h1>
          <Bookshelf books={this.state.books.filter( (currentBook) => (
              currentBook.shelf === 'read'
            ))}
          />
        </div>
        <div>
          <h1 className='shelf-header'>Want To Read</h1>
          <Bookshelf books={this.state.books.filter( (currentBook) => (
              currentBook.shelf === 'wantToRead'
            ))}
          />
        </div>
      </div>
    );
  }
}

export default App;

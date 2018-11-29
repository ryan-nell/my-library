import React, { Component } from 'react';
import CurrentList from './CurrentList';
import NewList from './NewList';
import PastList from './PastList'
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
      console.log(books[0])
    })
  }

  render() {
    return (
      <div className="App">
        <CurrentList books={this.state.books}/>
        <NewList />
        <PastList />
      </div>
    );
  }
}

export default App;

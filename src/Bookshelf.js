import React, { Component } from 'react';


// This displays books that i am currently reading
class Bookshelf extends Component {

  state = {
    showMenu: false
  }


  displayMenu = (showMenu) => {
    if(this.state.showMenu === false){
      this.setState({
        showMenu: true
      })
    }
    else{
      this.setState({
        showMenu: false
      })
    }
    console.log(this.props.books)
  }

  render() {
    return(
      <div className='book-container'>
        <div className='book-list'>
          {this.props.books.map((book) => (
            <div key={book.id}>
              <img src={book.imageLinks.thumbnail} alt="Book cover" />
              <button onClick={this.displayMenu} type="button">Click</button>
              { this.state.showMenu ?
                  <div className='dropdown-state'>
                    <p className="dropdown-option">Move to... </p>
                    <button className="dropdown-option" type="button">Currently Reading</button>
                    <button className="dropdown-option" type="button">Have Read</button>
                    <button className="dropdown-option" type="button">Want to Read</button>
                    <button className="dropdown-option" type="button">None</button>
                  </div>
                : null
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

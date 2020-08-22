import React from 'react';
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      bookTitle: '',
      bookAuthor: '',
      bookISBN: '',
      emptyFieldError: '',
      successAlert: '',
      bookList: []
    }
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleinput = this.handleinput.bind(this);

  }

  handlesubmit(e) {
    e.preventDefault();
    const newBookList = [...this.state.bookList, { bookTitle: this.state.bookTitle, bookAuthor: this.state.bookAuthor, bookISBN: this.state.bookISBN }]
    if (this.state.bookTitle === '' || this.state.bookISBN === '' || this.state.bookAuthor === '') {
      this.setState({
        emptyFieldError: 'Please Fill All Fields',
        successAlert: '',

      })
    }
    else {
      this.setState({
        successAlert: 'Data Submitted',
        emptyFieldError: '',
        bookList: newBookList
      })
    }

  }
  // handleDelete=(key)=>{
  //     const filteredBook = this.state.bookList.filter(book=>book.bookISBN!==key);
  //     this.setState({
  //       bookList:filteredBook
  //     })
  // }
  handleinput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (

      <div className="App">
        <Header />
        <BookList handlesubmit={this.handlesubmit} emptyFieldError={this.state.emptyFieldError} handleinput={this.handleinput} bookList={this.state.bookList} successAlert={this.state.successAlert} />
      </div>
    );
  }

}

export default App;

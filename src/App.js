import React from 'react';
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      bookTitle: '',
      key:'',
      bookAuthor: '',
      bookISBN: '',
      emptyFieldError:'',
      successAlert:'',
      isinEditMode:false,
      bookList: []
    }
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleinput = this.handleinput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handlesubmit(e) {
    e.preventDefault();
    const newBookList = [...this.state.bookList, {key:this.state.key,bookTitle: this.state.bookTitle, bookAuthor: this.state.bookAuthor, bookISBN: this.state.bookISBN }]
    if(this.state.bookTitle==='' || this.state.bookISBN==='' || this.state.bookAuthor===''){
          this.setState({
            emptyFieldError:'Please Fill All Fields',
            successAlert:'',

          })
    }
    else{
      this.setState({
        successAlert:'Data Submitted',
        emptyFieldError:'',
        key:Date.now(),
        bookList: newBookList
      })
    }
  }
  handleDelete(key){
    const filteredBook = this.state.bookList.filter(book=>book.key!==key);
      this.setState({
        bookList:filteredBook
      })
  }
  handleinput(event) {
    this.setState({
      [event.target.name]: event.target.value,
      key:Date.now()
    })
  }

  handleEdit(key) {
    this.setState({
      isinEditMode:!this.state.isinEditMode,
      rowId:key
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookList handlesubmit={this.handlesubmit} emptyFieldError={this.state.emptyFieldError} handleinput={this.handleinput} bookList={this.state.bookList} successAlert={this.state.successAlert} handleDelete={this.handleDelete} handleEdit={this.handleEdit} isinEditMode={this.state.isinEditMode} />
      </div>
    );
  }

}

export default App;

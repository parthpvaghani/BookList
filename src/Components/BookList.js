import React from 'react'
import BookForm from './BookForm';
import { Table, Button } from 'reactstrap';
function BookList(props) {

    return (
        <div className="container">
            <BookForm handlesubmit={props.handlesubmit} handleinput={props.handleinput} emptyFieldError={props.emptyFieldError} successAlert={props.successAlert} />
            <hr />
            <h1>BookList</h1>

            <Table dark>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>#ISBN</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.bookList.map((book) => {
                                return (
                                    <tr key={book.key}>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.bookAuthor}</td>
                                    <td>{book.bookISBN}</td>
                                    <td><Button onClick={()=>{props.handleDelete(book.key)}}>Delete</Button></td>
                                    </tr>
                            )
                            })
                        }

                </tbody>
            </Table>
             </div>

    )
}

export default BookList;
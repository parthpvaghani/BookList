import React from 'react'
import BookForm from './BookForm';
import { Table } from 'reactstrap';
function BookList(props) {

    return (
        <div className="container">
            <BookForm handlesubmit={props.handlesubmit} handleinput={props.handleinput} emptyFieldError={props.emptyFieldError} successAlert={props.successAlert} />
            <hr />
            <h1>BookList</h1>

            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>#ISBN</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.bookList.map((book, index) => {
                                return (
                                    <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.bookAuthor}</td>
                                    <td>{book.bookISBN}</td>
                                    {/* <td><Button onClick={props.handleDelete(book.bookISBN)}>Delete</Button></td> */}
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
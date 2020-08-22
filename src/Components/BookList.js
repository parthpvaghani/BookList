import React from 'react'
import BookForm from './BookForm';
import { Table, Button, Input } from 'reactstrap';
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
                                    <td>{(props.isinEditMode) ?
                                    <Input type="text"  defaultValue={book.bookTitle}></Input> : book.bookTitle}
                                    </td>
                                    <td>
                                    {(props.isinEditMode) ?
                                    <Input type="text" defaultValue={book.bookAuthor}></Input> : book.bookAuthor}
                                    </td>
                                    <td>
                                    {(props.isinEditMode) ?
                                    <Input type="text" defaultValue={book.bookISBN}></Input> : book.bookISBN}
                                    </td>
                                    <td><Button onClick={() => { props.handleDelete(book.key) }}>Delete</Button><Button className="ml-1" onClick={() => { props.handleEdit() }}>{(props.isinEditMode)?
                                    'Save':'Edit'}</Button></td>
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
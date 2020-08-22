import React from 'react'
import { Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
function BookForm(props) {
    return (
        <div>
            <Form onSubmit={props.handlesubmit}>
                <div className="container">
                        <FormGroup>
                            <Label for="bookTitle">Title</Label>
                            <Input type="text" id="bookTitle" name="bookTitle" onChange={props.handleinput}  />
                        </FormGroup>
                        <FormGroup>
                            
                        <Label htmlFor="bookAuthor">Author</Label>
                        <Input type="text" id="bookAuthor" name="bookAuthor" onChange={props.handleinput}/>
                  
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="bookISBN">ISBN#</Label>
                        <Input type="text" id="bookISBN" name="bookISBN" onChange={props.handleinput}/>
                        </FormGroup>
                        <Button type="submit" color="primary">SUBMIT</Button><br/>
                        
                        <Badge color="danger">{ props.emptyFieldError}</Badge>
                        <Badge color="success">{props.successAlert}</Badge>
                </div>
            </Form>

        </div>
    )
}

export default BookForm;

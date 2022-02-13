import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddNotes = () => {
    return (
        <React.Fragment>
            <Container className='note-container' fluid>
                <Form>
                    <Form.Group className="mb-3" controlId="text">
                        <Form.Label>Note</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Add Note
                        </Button>
                    </div>
                </Form>
            </Container>
        </React.Fragment>
    );
}
 
export default AddNotes;


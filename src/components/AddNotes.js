import React  from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AddNotes = () => {
    let notesJson = localStorage.getItem('notes');
    let parsedNotes = JSON.parse(notesJson);
    const existingNotes = parsedNotes ? parsedNotes : [];
    const [note, setNote] = useState('');
    const [noteList, setNoteList] = useState(existingNotes);
    const navigate = useNavigate();

    useEffect (() => {
        saveNotesToLocalStorage(noteList);
        if(noteList.length !== existingNotes.length){
            navigate('/');
        }
    },[noteList, existingNotes, navigate]);

    const saveNote = (e) => {
        e.preventDefault();
        let noteObject = {
            'name': note,
            'created_at': new Date().toLocaleString() + '',
            'updated_at': new Date().toLocaleString() + '',
            'id': new Date().getTime()
        };
        setNote('');
        setNoteList((oldNoteList) => [...oldNoteList, noteObject]);
    }

    const saveNotesToLocalStorage = (noteList) =>{
        localStorage.setItem('notes',JSON.stringify(noteList))
    }

    return (
        <React.Fragment>
            <Container className='note-container' fluid>
                <Form onSubmit={saveNote}>
                    <Form.Group className="mb-3" controlId="text">
                        <Form.Label>Note</Form.Label>
                        <Form.Control type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
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
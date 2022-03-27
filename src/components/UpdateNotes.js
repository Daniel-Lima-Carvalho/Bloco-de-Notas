import React  from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const UpdateNotes = () => {
    let { id } = useParams();
    let notesJson = localStorage.getItem('notes');
    let parsedNotes = JSON.parse(notesJson);
    const existingNotes = parsedNotes ? parsedNotes : [];
    const [noteList, setNoteList] = useState(existingNotes);
    const [noteObject, setNoteObject] = useState(noteList.find(element => element['id'] === parseInt(id)));
    const [note, setNote] = useState(noteObject['name']);
    const navigate = useNavigate();

    console.log('ID ' + id);
    console.log('Note ' + note);
    
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
            'date': new Date().toLocaleString() + '',
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
 
export default UpdateNotes;
import React  from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const UpdateNotes = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    let [noteChanged, setNoteChanged] = useState(false);
    
    let notesJson = localStorage.getItem('notes');
    let parsedNotes = JSON.parse(notesJson);

    const existingNotes = parsedNotes ? parsedNotes : [];
    let [noteList, setNoteList] = useState(existingNotes);
    
    const [noteObject, setNoteObject] = useState(noteList.find(element => element['id'] === parseInt(id)));
    const [note, setNote] = useState(noteObject['name']);
    
    useEffect (() => {
        saveNotesToLocalStorage(noteList);
        if(noteChanged){
            navigate('/');
        }
    },[noteList, navigate, noteChanged]);

    const saveNote = (e) => {
        e.preventDefault();
        let newNoteList = noteList.map(element =>
            element.id === parseInt(id)
              ? { ...element, name: note }
              : element
        );
        setNoteList(newNoteList);
        setNoteChanged(true);
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
                            Update Note
                        </Button>
                    </div>
                </Form>
            </Container>
        </React.Fragment>
    );
}
 
export default UpdateNotes;
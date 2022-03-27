import { Link } from 'react-router-dom';

const Items = () => {
    let elements = []

    const addElements = (element, index, array) => {
        elements.push(
            <Link to={"/update/" + element['id']}>
                <div className="item" key={element['id']}>
                    {element['name']} - {element['date']}
                </div>
            </Link>
        );
    }

    const getNotesFromLocalStorage = () =>{
        let notesJson = localStorage.getItem('notes');
        let notes = JSON.parse(notesJson);
        if(notes){
            notes.forEach(addElements);
        }
    }

    getNotesFromLocalStorage();

    return (
        <div className='main'>
            {elements}
        </div>
    );
}
 
export default Items;
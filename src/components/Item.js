

const Items = () => {
    let elements = []

    const addElements = (element, index, array) => {
        elements.push(
            <div className="item" key={element['date']}>
                {element['name']} - {element['date']}
            </div>
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
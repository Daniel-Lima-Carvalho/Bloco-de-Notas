

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
        notes.forEach(addElements);
    }

    getNotesFromLocalStorage();

    /*for (let i = 0; i < 3; i++) { 
        elements.push(
            <div className="item">
                Lorem ipsum dolor sit amet, ....
            </div>
        )
    }*/

    return (
        <div className='main'>
            {elements}
        </div>
    );
}
 
export default Items;
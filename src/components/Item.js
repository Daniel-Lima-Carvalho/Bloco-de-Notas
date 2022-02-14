

const Items = () => {
    let elements = []

    const getNotesFromLocalStorage = () =>{
        let notes = localStorage.getItem('notes');
        console.log(notes);
    }

    for (let i = 0; i < 3; i++) { 
        elements.push(
            <div className="item">
                Lorem ipsum dolor sit amet, ....
            </div>
        )
    }

    return (
        <div className='main'>
            {elements}
        </div>
    );
}
 
export default Items;
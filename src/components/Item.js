

const Items = () => {
    let elements = []
    
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
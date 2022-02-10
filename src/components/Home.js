import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Items from './Item';


const Home = () => {
    return (
        <React.Fragment>
            <Items />
            <Link to="/add">
                <Button className='add-button'>Add</Button> 
            </Link> 
        </React.Fragment>
    );
}
 
export default Home;

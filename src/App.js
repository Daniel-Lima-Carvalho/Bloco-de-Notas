import './App.css';
import Items from './components/Item';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
        <Menu />
        <Items />
        <Button className='add-button'>Add</Button>
    </div>
  );
}

export default App;

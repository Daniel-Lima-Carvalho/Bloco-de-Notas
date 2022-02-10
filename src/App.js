import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import AddNotes from './components/AddNotes';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/add' element={<AddNotes/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Menu from './components/Menu.js';
import Main from './components/Main.js';
import {useState} from 'react';

function App() {

  const [cant, setCant] = useState(10);

  return (
    <div className="App">
      <Menu setCant={setCant} />
      <Main cant={cant}/>
    </div>
  );
}

export default App;

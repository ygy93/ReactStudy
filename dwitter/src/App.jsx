import './App.css';
import Dweets from './components/Dweets';
import { useState, useEffect } from 'react';

function App() {
  const [Dweetse, setDweetse] = useState([]);
  useEffect(() => {
    fetch('data/dwitter.json')
    .then(res => res.json())
    .then(data => setDweetse(data))
  }, []);

  return (
      <div>
        <h1>Dwitter</h1>
        <ul>
          <li>All Dwitter</li>
          <li>My Dwitter</li>
          <li>Login / Sign</li>
        </ul>
        {
          Dweetse.map((Dweet) => (
            <Dweets 
              image = {Dweet.image}
              name = {Dweet.name}
              id = {Dweet.id}
              date = {Dweet.date}
              content = {Dweet.content}
            />
          ))
        }
      </div>
  );
}

export default App;

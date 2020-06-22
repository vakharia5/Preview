import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import {Card,Container,Row,Col} from 'react-bootstrap';
import Data from './assets/data.json';

function App() {
  return (
    <div className="App">
   {Data.map((data) => <CardList/>)
    
   }
     
    </div>
  );
}

export default App;

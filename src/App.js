import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import EditorComponent from './Task/Text_editor';
import Pdf from './Task/Pdf';
import Fieldconnect from './Task/field';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={EditorComponent} />
        <Route path='/pdf' Component={Pdf}/>
        <Route path ="/fieldlinker" Component={Fieldconnect}/>
      </Routes>

    </Router>
  );
}

export default App;

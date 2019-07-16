import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Project from './container/Project';
import NavItem from './components/navigation/NavItem';
import AddProject from './components/Project/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavItem />
        <Route exact path='/' component={Project} />
        <Route exact path='/add-project' component={AddProject} />
      </BrowserRouter>
     
    </div>
  );
}

export default App;

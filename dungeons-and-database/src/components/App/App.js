import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Archive from '../Archive/Archive';
import Campaigns from '../Campaigns/Campaigns';
import CharacterCreator from '../CharacterCreator/CharacterCreator';
import MonsterMaker from '../MonsterMaker/MonsterMaker';
import Home from '../Home/Home';
import NavMenu from '../NavMenu/NavMenu';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Archive' element={<Archive/>} />
          <Route path='/Campaigns' element={<Campaigns/>} />
          <Route path='/CharacterCreator' element={<CharacterCreator/>} />
          <Route path='/MonsterMaker' element={<MonsterMaker/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
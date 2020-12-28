import './App.css';
import React from 'react';
import TopGrid from '../TopGrid/TopGrid';
import MainGrid from '../MainGrid/MainGrid';
import { AppProvider } from '../../Context';

function App() {
  return (
    <AppProvider>
      <div>
        <TopGrid />
        <MainGrid className='mainGrid' />
      </div>
    </AppProvider>
  );
}

export default App;

//add onscroll to maingrid to set the slider value https://reactjs.org/docs/events.html#ui-events

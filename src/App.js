import { useState } from 'react';
import './App.css';

import List from './components/list/List';

function App() {
  const [toggle, setToggle] = useState('close');

  //opens menu and changes the menu icon
  const onMenuClick =(toggleState) => toggleState === 'close' ? setToggle('open'): setToggle('close')

  return (
      <div className='container'>
        <div className={`navigation ${toggle}`}>
          <div className='menu-toggle'
            onClick={()=> onMenuClick(toggle)}
        ></div>
        <List/>
  </div>
  </div>
  );
};

export default App;

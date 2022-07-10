import { useState } from 'react';
import './App.css';

import List from './components/list/List';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const onMenuClick = (toggleState) =>
  //   toggleState === 'close' ? setToggle('open') : setToggle('close');
  const onMenuClick = (currentMenuState) => setIsMenuOpen(!currentMenuState);

  return (
    <div className="container">
      <div className={`navigation ${isMenuOpen ? 'open' : 'close'}`}>
        <div className="menu-toggle" onClick={() => onMenuClick(isMenuOpen)} />
        <List />
      </div>
    </div>
  );
}

export default App;

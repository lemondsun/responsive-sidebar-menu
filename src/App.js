import { useState } from 'react';
import './App.css';

function App() {

  const [toggle, setToggle] = useState('close');

  const onMenuClick =(toggleState) => toggleState === 'close' ? setToggle('open'): setToggle('close')


  return (
  
    
      <div className='container'>
        <div className={`navigation ${toggle}`}>
          <div className='menu-toggle'
            onClick={()=> onMenuClick(toggle)}
        ></div>
        <ul className='list'>
       
            <li className='list-item'
          
          >
            <a href='#'>
              <span className='icon'>
                <ion-icon name='alert-outline'></ion-icon>
              </span>
              <span className='text'>About</span>
            </a>
            </li>
            <li className='list-item'
           
          >
            <a href='#'>
              <span className='icon'>
                <ion-icon name='call-outline'></ion-icon>
              </span>
              <span className='text'>Contact</span>
            </a>
            </li>
            <li className='list-item'
           
          >
            <a href='#'>
              <span className='icon'>
                <ion-icon name='grid-outline'></ion-icon>
              </span>
              <span className='text'>Portfolio</span>
            </a>
          </li>
         
          </ul>
  </div>
  </div>
   
  );
}

export default App;

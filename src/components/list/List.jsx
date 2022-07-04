import React, {useState} from 'react';
import '../list/list.css';

import ListItem from '../list-item/ListItem';

import menuData from '../../menuData';

export default function List() {
  const [activeNumber, setActiveNumber] = useState(null)
  
  //recieves index number from the ListItem and sets it in state
  //this allows for tracking of which ListItem is active
  const clickHandler = (number) => {
    setActiveNumber(number)
    activeNumber === number && setActiveNumber(null)
  }
//loop through the menuData and create the individual items
  const li = menuData.map((item, index) => (

    activeNumber=== index?
    <ListItem
      href={item.href}
      icon={item.icon}
      text={item.text}
      color={item.color}
      menuNumber={index}
      clickHandler={clickHandler}
      active={'active'}
      />
      :
      <ListItem
      href={item.href}
      icon={item.icon}
      text={item.text}
      color={item.color}
      menuNumber={index}
      clickHandler={clickHandler}
      active={''}
      />
  ))
  return (
    <ul className='list'>
      {li}
    </ul>
  )
}

import React, { useState } from 'react';
import '../list/list.css';

import ListItem from '../list-item/ListItem';

import menuData from '../../menuData';

const List = () => {
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(null);
  //recieves index number from the ListItem and sets it in state
  //this allows for tracking of which ListItem is active
  const clickHandler = (newActiveItemIndex) => {
    setActiveMenuItemIndex(
      activeMenuItemIndex === newActiveItemIndex ? null : newActiveItemIndex
    );
  };

  //loop through the menuData and create the individual items
  const li = menuData.map((item, index) => (
    <ListItem
      item={item}
      menuNumber={index}
      clickHandler={clickHandler}
      active={activeMenuItemIndex === index}
    />
  ));

  return <ul className="list">{li}</ul>;
};

export default List;

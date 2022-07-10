import React from 'react';
import '../list-item/list-item.css';

const ListItem = (props) => {
  const { item, active, menuNumber } = { ...props };

  return (
    <li
      className={`list-item ${active && 'active'}`}
      onClick={() => props.clickHandler(menuNumber)}
    >
      <a href={item.href}>
        <span className={`icon ${item.color}`}>
          <ion-icon name={item.icon} />
        </span>
        <span className={`text ${item.color}`}>{item.text}</span>
      </a>
    </li>
  );
};

export default ListItem;

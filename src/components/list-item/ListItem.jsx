import React from 'react';
import '../list-item/list-item.css'

export default function ListItem(props) {
  const { href, icon, text, color, active, menuNumber } = { ...props };
  
  return (
    <li className={`list-item ${active}`}
      onClick={() => props.clickHandler(menuNumber)}
    >
            <a href={href}>
              <span className={`icon ${color}`}>
                <ion-icon name={icon}></ion-icon>
              </span>
        <span className={`text ${color}`}>{text}</span>
            </a>
            </li>
  )
}

import React from 'react';
import mtuciLogo from './mtuci-logo.png'
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <img src = {mtuciLogo}/>
      <h2> <span role="img" aria-label="emoji">MtuciHub это эксперементальная платформа </span></h2>
      <h3>обмен сообщениями и учебными материалами  <span role="img" aria-label="emoji">📦</span></h3>
      <h2> Отправить лабораторную работу через чат <span role="img" aria-label="emoji">📝</span></h2>
      <h3> и это была не шутка <span role="img" aria-label="emoji">😨</span></h3>
    </div>
    {
      users
        ? (
          <div>
            <h1>Бродяги:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import mtuciLogo from './mtuci-logo.png'
import './Join.css';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('цыганский табор');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <img src = {mtuciLogo} className = "mtuciLogo"/>
        <div>
          <input placeholder="Имя" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div className = {"roomNameInput"}>
          <input placeholder="Название комнаты" className="joinInput mt-20" value = "цыганский табор" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit"><EmojiFoodBeverageIcon style={{ fontSize: 40 }}/></button>
        </Link>
      </div>
    </div>
  );
}

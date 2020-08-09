import React from 'react';
import ForwardIcon from '@material-ui/icons/Forward';
import { makeStyles } from '@material-ui/core/styles';
import './Input.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Введите сообщение..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}><ForwardIcon style={{ fontSize: 40 }}/></button>
  </form>
)

export default Input;
import appStyles from './app-styles';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');
  const classes = appStyles();

  const send = () => {
    const currentUTC = new Date().getTime();
    const expireUTC = currentUTC + 10000;
    document.cookie = `test=; expires=${expireUTC}`;
    localStorage.setItem('username', username);
  };

  const receive = () => {
    const retrieved = localStorage.getItem('username');
    setUser(retrieved);
  };

  return (
    <div style={{ fontFamily: 'Helvetica Neue' }}>
      <input type="text" onChange={e => setUsername(e.target.value)}/>
      <div 
        onClick={() => send()}
        className={classes.button }
      >
        Store username in Local Storage
      </div>
      <div
        onClick={() => receive()}
        className={classes.button}
      >
        Get username from Local Storage
      </div>
      <div>{`username: ${user}`}</div>
    </div>
  );
}

export default App;

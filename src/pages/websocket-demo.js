import React from 'react';
import Link from 'gatsby-link';

const SecondPage = () => (
  <div>
    <Link to={'/'}>Back</Link>
    <div>
      <iframe title="websocket-iframe" className="websocket-game-iframe" src="https://websocket-game.firebaseapp.com/" frameBorder="0" />
    </div>
  </div>
);

export default SecondPage;

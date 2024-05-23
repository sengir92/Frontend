import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <h4>POWERFULL</h4>
        <h1>
          Group<br />
          Practice<br />
          With Trainer
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id
          cum illo corrupti obcaecati modi vitae mollitia blanditiis deserunt
          perferendis quis magnam sunt ex, dolorum suscipit dignissimos velit
          totam minus?
        </p>
        <a className="btn btn-primary signup text-light">Sign Up</a>
        <a className="btn btn-default outline position-light">Details</a>
      </div>
    </header>
  );
};

export default Header;
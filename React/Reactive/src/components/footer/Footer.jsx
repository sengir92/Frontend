import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <img src="/img/logo.png" alt="Logo" />
        <p className="text-classes footer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a
          incidunt voluptatum voluptates officia sequi dicta totam perspiciatis?
          Odio quidem labore unde illum cupiditate, rerum eligendi deleniti
          debitis dolorem adipisci? Quia distinctio at magni a! Unde minima ex
          eaque maxime?
        </p>
        <br/>
        <div className="row footer-info">
          <div className="col-md-6">
            <h5 className="text-uppercase">Information</h5>        
            <ul className="list-unstyled mb-0">
              <li>
                <a className="text-body" href="#!">About US</a>
              </li>
              <li>
                <a className="text-body" href="#!">Classes</a>
              </li>
              <li>
                <a className="text-body" href="#!">Blog</a>
              </li>
              <li>
                <a className="text-body" href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="text-uppercase">Helpful links</h5> 
            <ul className="list-unstyled mb-0">
              <li>
                <a className="text-body" href="#!">Services</a>
              </li>
              <li>
                <a className="text-body" href="#!">Supports</a>
              </li>
              <li>
                <a className="text-body" href="#!">Terms & Conditions</a>
              </li>
              <li>
                <a className="text-body" href="#!">Privacy Policy</a>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

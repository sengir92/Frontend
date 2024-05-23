import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="box">
              <h3 className="box-h3">325</h3>
              <p className="box-p">Course</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <h3 className="box-h3">405</h3>
              <p className="box-p">Work Out</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <h3 className="box-h3">305</h3>
              <p className="box-p">Working Hour</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <h3 className="box-h3">705</h3>
              <p className="box-p">Happy Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

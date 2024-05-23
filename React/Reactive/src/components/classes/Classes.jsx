import React, { useState, useEffect } from 'react';
import './Classes.css';

const Classes = () => {
    const [activeContainer, setActiveContainer] = useState('container1');
  
    useEffect(() => {
      setActiveContainer('container1');
    }, []);
  
    const toggleContainer = (containerId) => {
      setActiveContainer(containerId);
    };
  
    return (
      <section>
        <div className="bg-cover"></div>
        <div className="container">
          <h1 className="center our-class-title">OUR CLASSES</h1>
          <hr className="orange-line-title" />
          <p className="text-center text-classes">
            Lorem ipsum dolor is not simply random text. It has roots in a piece of classical Hampden-Sydney College
          </p>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-1">
                <button
                  id="btnContainer1"
                  className="btn btn-primary btn-block"
                  onClick={() => toggleContainer('container1')}
                >
                  Yoga
                </button>
              </div>
              <div className="col-md-3 mb-1">
                <button
                  id="btnContainer2"
                  className="btn btn-primary btn-block"
                  onClick={() => toggleContainer('container2')}
                >
                  Group
                </button>
              </div>
              <div className="col-md-3 mb-1">
                <button
                  id="btnContainer3"
                  className="btn btn-primary btn-block"
                  onClick={() => toggleContainer('container3')}
                >
                  Solo
                </button>
              </div>
              <div className="col-md-3 mb-1">
                <button
                  id="btnContainer4"
                  className="btn btn-primary btn-block"
                  onClick={() => toggleContainer('container4')}
                >
                  Stretching
                </button>
              </div>
            </div>
          </div>
  
          <div className="container content-classes">
            <div
              id="container1"
              className="container-content"
              style={{ display: activeContainer === 'container1' ? 'block' : 'none' }}
            >
              <div className="row">
                <div className="col-md-6 position-text">
                  <h3>Why are your Yoga?</h3>
                  <br />
                  <p className="text-classes">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <br />
                  <h3>When comes Yoga Your Time.</h3>
                  <br />
                  <p className="text-classes date-list">Saturday-Sunday: 8:00am - 10.00am</p>
                  <p className="text-classes date-list">Monday-Tuesday: 10:00am - 12.00pm</p>
                  <p className="text-classes date-list">Wednesday-Friday: 3:00pm - 6.00pm</p>
                </div>
                <div className="col-md-6">
                  <img src="img/yoga.jpg" alt="Image 1" className="img-design" />
                </div>
              </div>
            </div>
            <div
              id="container2"
              className="container-content"
              style={{ display: activeContainer === 'container2' ? 'block' : 'none' }}
            >
              <div className="row">
                <div className="col-md-6 position-text">
                  <h3>Why are your Group?</h3>
                  <br />
                  <p className="text-classes">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <br />
                  <h3>When comes Group Your Time.</h3>
                  <br />
                  <p className="text-classes date-list">Saturday-Sunday: 12:00pm - 4.00pm</p>
                  <p className="text-classes date-list">Tuesday-Thursday: 2:00pm - 4.00pm</p>
                  <p className="text-classes date-list">Wednesday-Friday: 6:00pm - 9.00pm</p>
                </div>
                <div className="col-md-6">
                  <img src="img/group.webp" alt="Image 2" className="img-design" />
                </div>
              </div>
            </div>
            <div
              id="container3"
              className="container-content"
              style={{ display: activeContainer === 'container3' ? 'block' : 'none' }}
            >
              <div className="row">
                <div className="col-md-6 position-text">
                  <h3>Why are your Solo?</h3>
                  <p className="text-classes">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <br />
                  <h3>When comes Solo Your Time.</h3>
                  <br />
                  <p className="text-classes date-list">Saturday-Sunday: 10:00am - 12.00am</p>
                  <p className="text-classes date-list">Monday-Tuesday: 12:00pm - 2.00pm</p>
                  <p className="text-classes date-list">Wednesday-Friday: 2:00pm - 4.00pm</p>
                </div>
                <div className="col-md-6">
                  <img src="img/solo.jpg" alt="Image 3" className="img-design" />
                </div>
              </div>
            </div>
            <div
              id="container4"
              className="container-content"
              style={{ display: activeContainer === 'container4' ? 'block' : 'none' }}
            >
              <div className="row">
                <div className="col-md-6 position-text">
                  <h3>Why are your Stretching?</h3>
                  <p className="text-classes">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <br />
                  <h3>When comes Stretching Your Time.</h3>
                  <br />
                  <p className="text-classes date-list">Saturday-Sunday: 11:00am - 1.00pm</p>
                  <p className="text-classes date-list">Tuesday-Thursday: 10:00am - 12.00pm</p>
                  <p className="text-classes date-list">Wednesday-Friday: 10:00am - 12.00pm</p>
                </div>
                <div className="col-md-6">
                  <img src="img/stret.webp" alt="Image 4" className="img-design" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Classes;
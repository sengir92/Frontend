import React from 'react';
import './Trainer.css'; // Stil dosyasını oluşturduğunuzdan emin olun

const Trainer = () => {
  return (
    <section id="trainer">
      <div className="container">
        <h1 className="center our-class-title">OUR BEST TRAINERS</h1>
        <hr className="orange-line-title"/>
        <p className="text-center text-classes">
          Lorem ipsum dolor is not simply random text. It has roots in a place of classical 
          Hampden-Sdyney College.
        </p>
        <br/>
        <div className="row">
          <div className="col-md-4">
            <div className="card trainer-card">
              <img src="/img/trainer1.jpg" className="card-img-top" alt="Trainer 1"/>
              <div className="pt-name">
                <h3>Jean Doe</h3>
                <p>Zumba Trainer</p>
              </div>
              <div className="first"></div>
              <div className="last"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card trainer-card">
              <img src="/img/trainer2.jpg" className="card-img-top" alt="Trainer 2"/>
              <div className="pt-name">
                <h3>John Doe</h3>
                <p>Weight Trainer</p>
              </div>
              <div className="first"></div>
              <div className="last"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card trainer-card">
              <img src="/img/trainer3.jpg" className="card-img-top" alt="Trainer 3"/>
              <div className="pt-name">
                <h3>Jane Doe</h3>
                <p>Cardio Trainer</p>
              </div>
              <div className="first"></div>
              <div className="last"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;

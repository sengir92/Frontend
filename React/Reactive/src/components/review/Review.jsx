import React from 'react';
import './Review.css'; // CSS dosyasını dahil ediyoruz

const Review = () => {
  return (
    <section id="review">
      <div className="container">
        <h1 className="center our-class-title">REVIEW CLIENT</h1>
        <hr className="orange-line-title"/>
        <p className="text-center text-classes">
          Lorem ipsum dolor is not simply random text. It has roots in a place of classical 
          Hampden-Sdyney College.
        </p>
        <br/>
        <div className="row client-all">
          <div className="col-md-6">
            <div className="client">
              <div className="client-info">
                <img src="img/client1.jpg" alt="Client 1" />
                <div className="name">
                  <p className="contact-info text-classes">John Doe</p>
                  <span className="contact-info text-classes">CFO</span>
                </div>
              </div>
              <div className="client-comment">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  libero neque atque sit eligendi beatae minus, pariatur numquam
                  facilis aspernatur odit facere laboriosam recusandae ad. Laborum
                  fuga ducimus ratione odio?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="client">
              <div className="client-info">
                <img src="img/client2.jpg" alt="Client 2" />
                <div className="name">
                  <p className="contact-info text-classes">Angela Doe</p>
                  <span className="contact-info text-classes">CEO</span>
                </div>
              </div>
              <div className="client-comment">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  libero neque atque sit eligendi beatae minus, pariatur numquam
                  facilis aspernatur odit facere laboriosam recusandae ad. Laborum
                  fuga ducimus ratione odio?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

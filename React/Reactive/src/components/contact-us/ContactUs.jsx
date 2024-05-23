import React from 'react';
import './ContactUs.css'; // CSS dosyasını dahil ediyoruz

const ContactUs = () => {
  return (
    <section id="contact-us">
      <div className="container">
        <h1 className="center our-class-title">CONTACT US</h1>
        <hr className="orange-line-title"/>
        <p className="text-center text-classes">
          Lorem ipsum dolor is not simply random text. It has roots in a place of classical 
          Hampden-Sdyney College.
        </p>
        <br/>
        <div className="row"> 
          <div className="col-md-6">
            <div className="row contacts">
              <div className="col-md-6">
                <p className="contact-info text-classes">Mobile Number</p>
                <p className="contact-info text-classes">+135 773 321 44442</p>
              </div>
              <div className="col-md-6">
                <p className="contact-info text-classes">Email Address</p>
                <p className="contact-info text-classes">demo@demo.com</p>
              </div>
            </div>
            <br/>
            <h3>Make An Appointment</h3>
            <form action="return false" className="contact-form">
              <input type="text" name="name" placeholder="İsminiz" className="form-control"/>
              <input type="email" name="email" placeholder="E-posta adresiniz" className="form-control mt-4"/>
              <textarea name="message" rows="5" placeholder="Mesaj" className="form-control mt-4"></textarea>
            </form>
          </div>
          <div className="col-md-6">
            <div id="google-map">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.2742577481754!2d-70.56107012373896!3d41.45496659180036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sde!2str!4v1714322982949!5m2!1sde!2str"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

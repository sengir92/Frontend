import React, { useState } from 'react';
import './BmiCalculator.css'; // Stil dosyasını ayrıca oluşturduğunuzdan emin olun

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [arrowPosition, setArrowPosition] = useState('0%');

  const calculate = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);
    if (weightValue > 0 && heightValue > 0) {
      const bmiValue = weightValue / ((heightValue / 100) ** 2);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setArrowPosition('17%');
      } else if (bmiValue < 24.9) {
        setArrowPosition('33%');
      } else if (bmiValue < 29.9) {
        setArrowPosition('48%');
      } else if (bmiValue < 34.9) {
        setArrowPosition('63%');
      } else {
        setArrowPosition('80%');
      }
    }
  };

  return (
    <section className="bmi-calculater">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>BMI Calculator</h2>
            <p className="text-classes">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br/>
            <p className="text-classes">
              Lorem ipsum dolor is not simply random text. 
              It has roots in a piece of classical Hampden-Sydney College
            </p>
            <div className="calculator">
              <input
                type="number"
                id="height"
                min="120"
                placeholder="Your Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onInput={calculate}
              />
              <label htmlFor="height"> cm </label>
              <input
                type="number"
                id="weight"
                min="20"
                placeholder="Your Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onInput={calculate}
              />
              <label htmlFor="weight"> kg </label>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-center">
              Your BMI: <span id="bmi-result">{bmi}</span>
            </h3>
            <img src="img/bmi-index.jpg" alt="BMI Index" className="img-bmi" />
            <div className="arrow-up" style={{ left: arrowPosition }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;

import React from 'react';
import './PurchaseForm.css';

const PurchaseForm = () => {
  const products = [
    {
      img: 'img/purchase1.jpg',
      alt: 'Purchase 1',
      title: 'Kettlebell / 5kg',
      originalPrice: '89,99$',
      discountedPrice: '59,99$',
    },
    {
      img: 'img/purchase2.jpg',
      alt: 'Purchase 2',
      title: 'Treadmill',
      originalPrice: '899,99$',
      discountedPrice: '599,99$',
    },
    {
      img: 'img/purchase3.jpg',
      alt: 'Purchase 3',
      title: 'Adjustable Dumbbell',
      originalPrice: '89,99$',
      discountedPrice: '59,99$',
    },
    {
      img: 'img/purchase4.jpg',
      alt: 'Purchase 4',
      title: 'Kettlebell / 3kg',
      originalPrice: '89,99$',
      discountedPrice: '59,99$',
    },
  ];

  return (
    <section id="purchase-form">
      <div className="container">
        <h1 className="center our-class-title">PURCHASE FROM US</h1>
        <hr className="orange-line-title" />
        <p className="text-center text-classes">
          Lorem ipsum dolor is not simply random text. It has roots in a place of classical Hampden-Sdyney College.
        </p>
        <br />
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.alt} />
                <div className="card-body">
                  <h5 className="card-title center">{product.title}</h5>
                  <small className="card-text center">
                    <small>{product.originalPrice}</small> / {product.discountedPrice}
                  </small>
                  <p className="card-price">Add To Cart</p>
                  <small id="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PurchaseForm;

import React from 'react';
import './Subscribe.css';

export default function Subscribe() {
  return (
    <div className='subscribe'>
      <div className="container">
        <div className="row px-sm-5 pt-3 text-light">
          <div className="col-md-10 col-sm-12 col-lg-7 ms-auto text-center">
            <p className='fs-3 pt-5'>SUBSCRIBE FOR OUR TRAVEL NEWSLETTERS</p>
            <p className='fs-6'>Join our community of over 3000,000 global 
            readers who receive emails filled with news, promotions, 
            and other good stuff from G Adventures.</p>
            <p>
            <input type="email" className="bg-transparent email p-1" placeholder=" Enter your email address......"/>
            <button type="submit" className="border-0 py-2 px-md-5 m-1 rounded but">Search</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

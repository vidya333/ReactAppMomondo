import React from 'react';
import { Container, Stack } from '@mui/material';
import coliseum from '../../assets/img/coliseum.jpg';
import './Help.css';

export default function Help() {
  return (
    <div className='help position-relative'>
      <img src={coliseum} alt="coliseum" className='position-absolute bottom-0 end-0 coliseum' 
      width={'250px'} height={'250px'} />
      <div className='container'>
        <div className="row pt-5">
          <p className="text-light fs-3" style={{marginBottom:"3px"}}>GET A QUICK ESTIMATE !</p>
          <p className="text-light fs-5" style={{marginBottom:"6px"}}>GET A PROFESSIONAL HELP</p>
          <hr style={{width: '100px',border:" 1px solid white",marginLeft: '9px',opacity: "100%"}}></hr>
        </div>
        <div className="row">
          <form>
          <select name="purpose" id="purpose" className="col-lg-2 col-sm-5 col-12 p-2 me-1 my-1 border-0" style={{color: '#5d6063'}}>
              <option selected>Travel Purpose</option>
              <option value="Educational">Educational</option>
              <option value="Migarte">Migarte</option>
              <option value="Proffessional">Proffessional</option>
              <option value="Medical">Medical</option>
              <option value="Trip">Trip</option>
              <option value="Other">Other</option>
          </select>
          <input type="text" className="col-lg-2 col-sm-5 col-12 p-2 me-1 my-1 border-0" placeholder="Travel-Date &#xf073;" style={{fontFamily: "'Roboto', sans-serif,FontAwesome"}}/>
          <input type="text" className="col-lg-2 col-sm-5 col-12 p-2 me-1 my-1 border-0" placeholder="Number of people"/>
          <input type="text" className="col-lg-2 col-sm-5 col-12 p-2 me-1 my-1 border-0" placeholder="Your Email"/>
          <button  className="px-2 p-2 my-1 bg-warning border-0 col-lg-2 col-sm-5 col-12">CALCULATE NOW</button>
          </form>
        </div>
      </div>
    </div>
  )
}

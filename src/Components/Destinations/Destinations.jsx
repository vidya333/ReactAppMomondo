import React, { useState } from 'react';
import './Destinations.css';
import datas from '../../JSON/Destinations.json';

export default function Destinations() {

  function Mainmenu({data}){
    return(
      <div className="col-lg-3 col-sm-6 col-12">
          <div className="card border-3 mb-5 mx-4 mx-sm-0" style={{height:'90%'}}>
            <img src={data.img} className="card-img-top"/>
            <div className="card-body">
              <div className="card-title fw-bold">
                <span className='text-orange'>{data.price} </span>
                {data.title}
              </div>
              <p className="card-text">{data.description}</p>
            </div>
          </div>
        </div>
    )
  }
  return (
    <div className='destination'>
      <div className="container">

        <div className="row text-center p-5">
          <p className='fs-3 text-light'>POPULAR DESTINATIONS</p>
        </div>

        <div className="row">
        {datas.map((item,index)=>{
          return <Mainmenu data={item} key={index}></Mainmenu>
        })}
        
          
        </div>
      </div>
    </div>
  )
}

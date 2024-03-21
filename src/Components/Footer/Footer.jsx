import React from 'react';
import countries from '../../JSON/countries.json';
import cities from '../../JSON/cities.json';
import sites from '../../JSON/sites.json';
import sites2 from '../../JSON/sites2.json';
import logo from '../../assets/img/momo1.jpg';
import links from '../../JSON/footer.json';
import './Footer.css';

export default function Footer() {

function Countries({country}){
  return (
    <li className="text-secondary">
      <i className="fa-solid fa-earth-asia"></i> Flights to <a href="#" 
      className="text-light text-decoration-none">{country.name}</a></li>
  )
}

function Cities({city}){
  return(
    <li className="text-secondary">
      <i className="fa-solid fa-location-dot"></i> Flights to <a href="#" 
      className="text-light text-decoration-none">{city.name}</a></li>
  )
}

function Sites({site}){
  return(
    <li><img src={site.image} width="16px"/>&nbsp; {site.name}</li>
  )
}

function Sites2({site2}){
  return(
    <li><img src={site2.image} width="16px"/>&nbsp; {site2.name}</li>
  )
}

function Links({link}){
  return(
    <li className='mx-2'> { link.label } </li>
  )
}
  return (
    <div className='footer py-5'>
      <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6">
              <p className="fs-4 text-light">Top Countries</p>
                <ul className="list-unstyled">
                  {countries.map((item,index)=>{
                    return <Countries country={item} key={index}></Countries>
                  })}
                </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <p className="fs-4 text-light">Top Cities</p>
                <ul className="list-unstyled">
                  {cities.map((item,index)=>{
                    return <Cities city={item} key={index}></Cities>
                  })}
                </ul>
            </div>

            <div className="col-lg-5 col-md-12 d-sm-flex text-light">
              <div className="list-unstyled col-sm-6">
                <li style={{fontSize: "20px"}}>International Sites</li><br/>
                {sites.map((item,index)=>{
                  return <Sites site={item} key={index}></Sites>
                })}
              </div>

            <div className="list-unstyled col-sm-6 pt-sm-5">
              {sites2.map((item,index)=>{
                  return <Sites2 site2={item} key={index}></Sites2>
                })}
              </div>
            </div>

            <div className="row" style={{color:"#8d8f94"}}>
              <div className="d-sm-flex">
              <img  src={logo} width="36px" height="36px" className="ms-3 logo2" style={{borderRadius: '50%'}}/>
                <ul className="list-unstyled d-md-flex bottom mt-1">
                  {links.map((item,index)=>{
                    return <Links link={item} key={index}></Links>
                  })}
                  <li className="iconlist text-center ms-lg-5">
                      <i className="fa-brands fa-twitter ic" style={{color: '#606162',fontSize: 'larger'}}></i>&nbsp;
                      <i className="fa-brands fa-facebook ic" style={{color: '#8a8c8f',fontSize: 'larger'}}></i>&nbsp;
                      <i className="fa-brands fa-google-plus ic" style={{color: '#77797e',fontSize: 'larger'}}></i>&nbsp;
                  </li>
                </ul>
              </div>
              <div className="ms-sm-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Isq 
                minus consequuntur Designed By - Vidya Tandel.
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

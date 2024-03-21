import React from 'react';
import './Fun.css';

export default function Fun() {
  const box = [
    {
      icon : "fa-solid fa-person-biking",
      distance : '5670M',
      type : 'CYCLING TRACK'
    },
    {
      icon : "fa-solid fa-route" ,
      distance : '480M',
      type : 'DISTANCE COVERED'
    },
    {
      icon : "fa-solid fa-person-hiking",
      distance : '5670M',
      type : 'ALTITUDE HIKED'
    },
    {
      icon : "fa-solid fa-sailboat",
      distance : '180 M',
      type : 'SAILING DISTANCE'
    },
    {
      icon : "fa-solid fa-mountain-sun",
      distance : '570 DAYS',
      type : 'SPEND ADVENTURE'
    },
    {
      icon : "fa-solid fa-tree",
      distance : '567M',
      type : 'JUNGLE DISTANCE'
    }
  ]
function Main({content}){
  return(
    <div className="col-lg-2 col-md-4 col-6 text-center text-light mb-3">
      <div className="box h-100 w-100 rounded py-3 px-sm-2 px-1">
        <p style={{fontFamily:"'Roboto', sans-serif,FontAwesome",fontSize:'50px',marginBottom:'0'}}>
        <i className={content.icon}></i>
        </p>
        {content.distance}<br/>
        {content.type}
      </div>
  </div>
  )
}
  return (
    <div className='fun'>
       <div className="container">
          <div className="row text-light text-center fs-3">
            <p className='m-sm-5'>SOME FUN WE COVERED</p>
          </div>
          <div className="row">
            {box.map((item,index)=>{
              return <Main content = {item} key={index}/>
            })}
          </div>
       </div>
    </div>
  )
}

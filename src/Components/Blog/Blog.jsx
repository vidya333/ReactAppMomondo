import React from 'react';
import blog1 from '../../assets/img/blog.jpg';
import blog2 from '../../assets/img/mom.jpg';
import './Blog.css';

export default function Blog() {
  return (
    <div className='blog py-5'>
    <div className="container">
        <div className="row mx-2">
            <p className="fs-3 text-center">LATEST BLOG</p>
            <p className="text-center col-lg-8 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur doloremque laboriosam veritatis,
                culpa omnis, voluptate quam non quas sed, repudiandae mollitia! Iste labore ipsum alias hic  obcaecati
                animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui maiores?
            </p>
        </div>
        <div className="row px-4">
            <div className="col-lg-6">
               <div className="row py-4">
                <div className="col-sm-4 pb-3 position-relative image">
                    <img  className="img-fluid imgs1" src={blog1}/>
                    
                </div>
                <div className="col-sm-8">
                    Feb 03, 2016 <br/>
                    10 THINGS TODO BEFORE TRAVEL
                    <hr width="50px" style={{opacity: '100%',color: "#b4512d",border: '1px #a34d2e solid'}}/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus blanditiis 
                    nisi mollitia Lorem ipsum dolor,
                </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="row py-4">
                <div className="col-sm-4 pb-3 position-relative image">
                    <img  className="img-fluid imgs2" src={blog2}/>
                    
                </div>
                <div className="col-sm-8">
                    Jan 23, 2016 <br/>
                    SAY NO TO LAZY LIFE
                    <hr width="50px" style={{opacity: '100%',color: '#99776a',border: '1px #8f7d76 solid'}}/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus blanditiis 
                    nisi mollitia Lorem ipsum dolor 
                </div>
               </div> 
            </div>
        </div>
        <div className="text-center text-secondary" style={{cursor: 'pointer'}}>
            &#9679;&#9679;&#9679;
       </div>
    </div>
    </div>
  )
}

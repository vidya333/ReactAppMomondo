import React from 'react';
import { Nav } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './Banner.css';


export default function Banner() {
  return (
    <div className='banner w-full'>
      <div className="heading p-5">
        <p className='fs-1 ps-md-5 pt-md-5'>"The best place to find the <br/> cheapest airfares"</p>
        <p className='fs-3 ps-md-5'>- every single time</p>
      </div>
      
      <div className="form ms-sm-5 bg-purple-Transparent mx-sm-5 ps-0 py-1 mt-sm-5 mx-2">
          <Nav variant="pills" defaultActiveKey="#" className='ps-1'>
            <Nav.Item>
              <Nav.Link href="#" className='me-1 bg-pink rounded-0 pil' 
              style={{fontFamily:"'Roboto', sans-serif,FontAwesome"}}>
              &#xf072; Flights</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#" className='me-1 rounded-0 bg-purple pil' 
              style={{fontFamily:"'Roboto', sans-serif,FontAwesome"}}>
              &#xf015; Hotels</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#" className='me-1 rounded-0 bg-purple pil'
              style={{fontFamily:"'Roboto', sans-serif,FontAwesome"}}>
              &#xf1b9; Cars</Nav.Link>
            </Nav.Item>
          </Nav>
          <form>
            <div className="row g-1 px-1 pt-1">
              <div className="col-sm-6 col-md-2">
                <input type="text" placeholder='&#xf041; Enter Origin City'  className='w-100 p-1'
                 style={{fontSize: '14.6px',fontFamily:"'Roboto', sans-serif,FontAwesome"}}/>
              </div>
              <div className="col-sm-6 col-md-2">
              <input type="text" placeholder="&#xf041; Enter Destination city"  className='w-100 p-1'
                 style={{fontSize: '14.6px',fontFamily:"'Roboto', sans-serif,FontAwesome"}}/>
              </div>
              <div className="col-sm-6 col-md-2">
              <input placeholder='23-Mar-2024 &#xf073;'  className='w-100 p-1'
                 style={{fontSize: '14.6px',fontFamily:"'Roboto', sans-serif,FontAwesome"}}/>
              </div>
              <div className="col-sm-6 col-md-2">
              <input  placeholder="28-Mar-2024 &#xf073;" className='w-100 p-1'
                 style={{fontSize: '14.6px',fontFamily:"'Roboto', sans-serif,FontAwesome"}}/>
              </div>
              <div className="col-sm-6 col-md-2">
              <select className="form-select rounded-0" aria-label="Default select example" 
                  style={{fontSize: '13px',fontFamily:"'Roboto', sans-serif,FontAwesome",color:'gray'}}>
                  <option disabled hidden selected> &#xf0c0; 1 Passenger</option>
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passenger</option>
                      <option value="3">3 Passenger</option>
                      <option>More</option>
                    </select>
              </div>
              <div className="col-sm-6 col-md-2 sbutton" >
                  <button type="submit" className="form-control bg-pink text-light border-0 rounded-0 sub " value="search">Search</button>
              </div>
            </div>
          </form>
          <div className="row g-1 px-1 lastrow">
            <div className="col-sm-6 col-xl-2 col-lg-3" style={{color:'white',fontFamily:"'Roboto', sans-serif,FontAwesome",borderBottom:'1px dotted #8daece'}}>
              &#xf021; Trip type: 
              <select style={{backgroundColor: 'transparent',border: '0px',color: '#8daece',fontSize: '16px'}}>
                  <option > Return trip</option>
                  <option >One way trip</option>
              </select>
            </div>
            <div className="col-sm-6 col-xl-2 col-lg-3" style={{color:'white',fontFamily:"'Roboto', sans-serif,FontAwesome",borderBottom:'1px dotted #8daece' }}>
              &#xf145; Ticket Class 
              <select style={{backgroundColor: 'transparent',border: '0px',color: '#8daece',fontSize: '16px'}}>
                  <option >Economy</option>
                  <option >Bussiness</option>
                  <option >First</option>
              </select>
            </div>
            <div className="col-sm-6 col-xl-2 col-lg-3" style={{color:'white'}}>
              Direct Flights Only &#9744;
            </div>
            <div className="col-sm-6 col-xl-2 col-lg-3" style={{color:'white'}}>
              Include Nearby Airports &#9744;
            </div>
          </div>
      </div>
    </div>
  )
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Flights from './Components/Flights/Flights';
import Hotel from './Components/Hotel/Hotel';
import CarHire from './Components/CarHire/CarHire';
import TripFinder from './Components/TripFinder/TripFinder';
import Inspirations from './Components/Inspirations/Inspirations';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/flights" element={<Flights/>}></Route>
        <Route path = "/hotels" element={<Hotel />}></Route>
        <Route path = "/carhire" element={<CarHire/>}></Route>
        <Route path = "/tripfinder" element={<TripFinder/>}></Route>
        <Route path = "/inspirations" element={<Inspirations/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

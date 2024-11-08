import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
      <div>
        <div className="max-w-7xl mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <div>
        <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;
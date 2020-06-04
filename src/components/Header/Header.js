import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <header className='header '>
        <div className='row '>
          <div className='col-sm-12 col-md-6 header-text pl-lg-4'>
            <h2 className='display-4 ml-lg-4'>
              Where Technology partners with Creativity.
            </h2>
            <p>
              We create projects for companies and startups with a passion for
              quality.
            </p>
            <div className='d-sm-block d-lg-inline-block m-2'>
              <Link to='/about' className='button m-2'>
                Learn More
              </Link>
              <Link to='/contact' className='button m-2'>
                Contact Us
              </Link>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <img
              src={require('./../../static/header-image.svg')}
              alt='Artifiical Intelligence Phone'
              width='90%'
            />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;

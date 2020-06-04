import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className='navbar navbar-expand-lg navbar-custom'
          style={{ backgroundColor: '#7E24A6' }}
        >
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>
              <i className='fas fa-bars' style={{ color: 'white' }}></i>
            </span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarTogglerDemo01'>
            <Link className='navbar-brand' to='/' style={{ color: 'white' }}>
              <img
                src='https://www.findmind.in/assets/images/findmind_icon_without_text.png'
                alt='DeepMind Analytics Logo'
                width='50px'
              />
              <span>&nbsp;DeepMind Analytics</span>
            </Link>
            <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
              <li className='nav-item '>
                <Link className='nav-link' to='/' style={{ color: 'white' }}>
                  Home
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  className='nav-link'
                  to='/about'
                  style={{ color: 'white' }}
                >
                  About
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  className='nav-link'
                  to='/contact'
                  style={{ color: 'white' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

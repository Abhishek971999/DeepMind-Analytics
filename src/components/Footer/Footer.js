import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='container py-5'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <img
                src='https://www.findmind.in/assets/images/findmind_icon_without_text.png'
                alt='FindMind Analytics Logo'
                width='50px'
              />
              <small>&nbsp;DeepMind Analytics</small>
              <small className='d-block text-muted mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam assumendLink quibusdam.
              </small>
              <div className='d-block'>
                <Link to='/'>
                  <i
                    className='fab fa-google-plus-square fa-2x m-1'
                    style={{ color: '#D64836' }}
                  ></i>
                </Link>
                <Link to='/'>
                  <i
                    className='fab fa-linkedin fa-2x m-1'
                    style={{ color: '#0C61C0' }}
                  ></i>
                </Link>
                <Link to='/'>
                  <i
                    className='fab fa-facebook fa-2x m-1'
                    style={{ color: '#1D4B99' }}
                  ></i>
                </Link>
              </div>
            </div>

            <div className='col-6 col-lg-3'>
              <h5>Navigate</h5>
              <ul className='list-unstyled text-small'>
                <li>
                  <Link className='text-muted' to='#'>
                    Advertisers
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Developers
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Company
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Connect
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-6 col-lg-3'>
              <h5>Privacy & TOS</h5>
              <ul className='list-unstyled text-small'>
                <li>
                  <Link className='text-muted' to='#'>
                    Advertiser Agreement
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Acceptable Use Policy
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Pivacy Policy
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Technology Privacy
                  </Link>
                </li>
                <li>
                  <Link className='text-muted' to='#'>
                    Developer Agreement
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-lg-3'>
              <h5>Phone</h5>
              <ul className='list-unstyled text-small'>
                <p className='text-muted'>Address : xx00 E. Union Ave</p>
                <p className='text-muted'>Suite 1100,IndiLink ,CO 80237</p>
                <p className='text-muted'>+998 765432 123</p>
                <p className='text-muted'>xyz@ai.com</p>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;

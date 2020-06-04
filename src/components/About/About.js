import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from './../Card';
import './About.css';
class About extends Component {
  state = {
    result: [],
  };
  fetchImage = (num) => {
    axios
      .get(`https://picsum.photos/id/${num}/info`)
      .then((res) => {
        let result = this.state.result.concat(res.data);
        this.setState({ result }, () => console.log(result));
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.fetchImage(0);
    this.fetchImage(1);
    this.fetchImage(2);
  }
  render() {
    const { result } = this.state;
    return (
      <Fragment>
        <div className='about-section  p-sm-2 p-lg-4'>
          <h1 className='text-center text-white'>About Us</h1>
          <p className='text-center text-white'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
          </p>
          <div className='row mt-lg-4'>
            <div className='col-sm-12 col-md-6'>
              <img
                src={require('./../../static/About.svg')}
                alt='Artifiical Intelligence Phone'
                width='90%'
              />
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='row'>
                <div className='col-12 mb-lg-2 p-4 about-dummy'>
                  <h5 className='text-white'>Powerful Mobile and Online App</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam, vitae modi fuga repudiandae vero pariatur.
                  </p>
                </div>
                <div className='col-12 mb-lg-2 p-4 about-dummy'>
                  <h5 className='text-white'>
                    Brings More Transparency and Speed
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam, vitae modi fuga repudiandae vero pariatur.
                  </p>
                </div>
                <div className='col-12 mb-lg-2 p-4 about-dummy'>
                  <h5 className='text-white'>
                    Special for multiple use capabilities
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam, vitae modi fuga repudiandae vero pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-section'>
          <h1 className='text-center'>Our Posts</h1>
          <Card result={result} />
        </div>
      </Fragment>
    );
  }
}
export default About;

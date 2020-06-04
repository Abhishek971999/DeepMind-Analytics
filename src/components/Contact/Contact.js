import React, { Component } from 'react';
import './Contact.css';
class Contact extends Component {
  render() {
    return (
      <div className='contact-section '>
        <div className='text-center text-white p-sm-2 p-lg-4'>
          <h1 className='contact-header-text'>Contact With Us</h1>
          <p className='contact-subheader-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
          </p>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className='row justify-content-center'>
            <div className='col-sm-12 col-lg-3 m-2 mb-4'>
              <input
                placeholder='Jeff Dean'
                type='text'
                name='name'
                className='ip'
              />
            </div>
            <div className='col-sm-12 col-lg-3 m-2 mb-4'>
              <input
                placeholder='xyz@ai.com'
                type='text'
                name='email'
                className='ip'
              />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-sm-12 col-lg-6 m-2 mb-4'>
              <input
                placeholder='Subject'
                type='text'
                name='subject'
                className='ip textarea'
              />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-sm-12 col-lg-6 m-2 mb-4'>
              <textarea
                placeholder='Message'
                type='text'
                name='message'
                className='ip textarea'
                cols='30'
                rows='4'
              />
            </div>
          </div>
          <div className='text-center'>
            <button type='submit' className='button  mb-4'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log('Form has been Submitted!');
  };
}
export default Contact;

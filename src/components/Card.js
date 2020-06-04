import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Card extends Component {
  render() {
    if (this.props.result.length != 3)
      return (
        <div className='p-sm-2 p-lg-4'>
          <h1 className='text-center'>Loading Posts...</h1>
        </div>
      );
    let post = this.props.result;

    return (
      <div className='row justify-content-center mt-lg-4'>
        {post &&
          post.map((p, key) => {
            return (
              <div className='col-sm-10 col-md-4 col-lg-3'>
                <div className='card'>
                  <img
                    src={p.download_url}
                    className='card-img-top'
                    alt='Image'
                  />
                  <div className='card-body'>
                    <h6 className='card-title d-inline-block'>
                      {p.author} &nbsp;&nbsp;&nbsp;
                    </h6>
                    <a
                      href={p.download_url}
                      className='round-button'
                      download='image'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i class='fas fa-arrow-down text-white'></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
export default Card;

import React, { Component } from 'react'

class Footer extends Component {
  state = {}
  render () {
    return (

        <div className='site-footer'>
<div class='container'>
  <div class='row'>
    <div class='col-4 col-sm-2 text-white  offset-1'>
      <h5>Links</h5>
      <ul class='list-unstyled'>
        <li>
          <a href='index.html'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Sites</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </div>

    <div class='col-6 col-sm-5 text-center text-primary'>
      <h5>Connect With Us</h5>
      <a class='btn btn-social-icon btn-instagram text-warning fs-1' href='http://instagram.com/'>
        <i
          class='fa
                                    fa-instagram'
        ></i>
      </a>
      <a class='btn btn-social-icon btn-facebook text-warning fs-1' href='http://facebook.com/'>
        <i
          class='fa
                                    fa-facebook'
        ></i>
      </a>
      <a class='btn btn-social-icon btn-twitter text-warning fs-1' href='http://twitter.com/'>
        <i
          class='fa
                                    fa-twitter'
        ></i>
      </a>
      <a class='btn btn-social-icon btn-google text-warning fs-1' href='http://youtube.com/'>
        <i
          class='fa
                                    fa-youtube'
        ></i>
      </a>
    </div>
    <div class='col-sm-4  text-center'>
      <a role='button' class='btn btn-link text-white' href='tel:+12065551234'>
        <i class='fa fa-phone'></i>
        1-206-555-5555
      </a>
      <br />
      <a
        role='button'
        class='btn btn-link text-white'
        href='mailto:campsites@nucamp.co'
      >
        <i
          class='fa
                                    fa-envelope-o'
        ></i>{' '}
        stayFaded4Life@barber.com
      </a>
    </div>
  </div>
</div>

        </div>
     
    )
  }
}

export default Footer

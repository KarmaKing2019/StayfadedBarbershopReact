import React, { Component } from 'react'
import createClass from 'create-react-class'
import '../App.css'

class Booking extends Component {
  state = {}
  render () {
    const Component = createClass({
      iframe: function () {
        return {
          __html: this.props.iframe
        }
      },

      render: function () {
        return (
          <div>
            <div dangerouslySetInnerHTML={this.iframe()} />
          </div>
        )
      }
    })

    const iframe =
      '<iframe src="https://stayfaded2044.setmore.com/" width="100%" height="850"></iframe>'

    if (this.props.showBooking) {
      return (
        <div className='container mb-4'>
          <div className='row'>
            <div class='col-2 col-lg-2 p-2 border border-black mb-3 mt-3 shadow-lg text-center rounded fade-black'>
              <img style={{ width: '250px' }} src='img/barber_strips.jpeg' />
            </div>
            <div class='col-7 col-lg-7 p-2 border border-black mb-3 mt-3 shadow-lg text-center rounded fade-black'>
              <div class=' border border-red p-4 shadow-lg mt-1 rounded fade-white'>
                <h5>
                  <b>Stay Faded | </b> Book Today
                </h5>
                <address>
                  6301 Denison Ave <br />
                  Cleveland, OH, OH 44102
                </address>

                <a role='button' class='btn btn-link' href='tel:+12065551234'>
                  <i class='fa fa-phone'></i>
                  1-206-555-1234
                </a>
                <br />
                <a
                  role='button'
                  class='btn btn-link'
                  href='mailto:campsites@nucamp.co'
                >
                  <i class='fa fa-envelope-o'></i>
                  FreddieKruger@StayFaded.org
                </a>
              </div>
            </div>

            <div class='col-3 col-lg-3 p-2 border border-black mb-3 mt-3 shadow-lg text-center rounded fade-black'>
              <img
                style={{ width: '240px' }}
                className='shadow-lg rounded img-thumbnail'
                src='img/barbers_do_it_better.jpg'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Component iframe={iframe} />
            </div>
          </div>
        </div>
      )
    }
    return null
  }
}

export default Booking

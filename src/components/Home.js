import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'
import YoutubeEmbed from './YouTubeEmbed'
import ReactPlayer from 'react-player'
import 'font-awesome/css/font-awesome.min.css'
import HomeGallery from './HomeGallery'

const Home = props => {
  if (props.showHome) {
    return (
      <React.Fragment>
        <div className='container mt-3 mb-4'>
          <div className='row'>
            <div className='col-xs-7 col-lg-7'>
              <Carousel>
                <Carousel.Item interval={4000}>
                  <img
                    className='d-block w-100'
                    src='img/haircut2.jpg'
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <h3>Clean Cut Precision</h3>
                    <p>
                      Each cut made with precison and pride. Your 100%
                      satisfaction is our pursuit of excellence.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className='d-block w-100'
                    src='img/stay_outside.png'
                    alt='Second slide'
                  />
                  <Carousel.Caption>
                    <h3>Stay Faded</h3>
                    <p>
                      Located on the Westside, easily accessible, and always
                      available ready to serve you. Come meet our team of
                      professionals
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className='d-block w-100'
                    src='img/stay_inside2.png'
                    alt='Third slide'
                  />
                  <Carousel.Caption>
                    <h3>Meet our Stay Faded Family</h3>
                    <p>Free WiFi, entertainment, and great conversation.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <div class='container myHorizontal fade-black pl-4 mt-4 mb-4'>
                <div class='row myHorizontal'>
                  <div
                    class='row myHorizontal overflow-auto mt-3'
                    style={{ height: '750px', 'overflow-x': 'hidden' }}
                  >
                    <HomeGallery />

                    <div class='col-6 col-lg-4 shadow col-md-4 col-xs-6 thumb '></div>
                  </div>
                </div>
              </div>

              <div className='mt-4 shadow'>
                <img
                  class='img-thumbnail img-fluid'
                  src='img/home.jpg'
                  alt='Another alt text'
                />
              </div>
            </div>

            {/* ###################### RIGHT PANEL ####################### */}

            <div className='col-sm-4'>
              <div
                style={{ backgroundColor: 'white', verticalAlign: 'text-top' }}
                class='p-1 col align-top align-middle p-4  mt-1 mb-0 mr-0 border-5 fade-white rounded'
              >
                <div class='vertical-align:top; embed-responsive embed-responsive-4by3 mt-2 mb-2   '>
                  <div
                    className='mb-1 border'
                    style={{ width: '350px', position: 'relative' }}
                  >
                    <ReactPlayer
                      className='react-player align-top m-0 shadow-lg'
                      style={{ position: 'relative' }}
                      url='barbershop_vid.mp4'
                      height='200'
                      width='100%'
                      controls={true}
                      muted={true}
                      playing={true}
                      loop={true}
                    />
                  </div>

                  <div className=' mb-3 p-2 text-center'>
                    <i className='bi-alarm'></i>

                    <a
                      className='btn btn-social-icon btn-instagram'
                      href='http://instagram.com/'
                    >
                      <i
                        className='fa
                                        fa-instagram'
                      ></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-facebook'
                      href='http://facebook.com/'
                    >
                      <i
                        className='fa
                                        fa-facebook'
                      ></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-twitter'
                      href='http://twitter.com/'
                    >
                      <i
                        className='fa
                                        fa-twitter'
                      ></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-google'
                      href='http://youtube.com/'
                    >
                      <i
                        className='fa
                                        fa-youtube'
                      ></i>
                    </a>
                  </div>
                </div>

                <div class='vertical-align:top;  mt-2 mb-2   '>
                  <img
                    class='img-responsive col-md-12 mb-2 border p-1'
                    src='img/hiring/Hire.png'
                  />
                </div>

                <div
                  style={{ height: '800px' }}
                  class=' mt-1 mb-3 border mx-auto shadow-lg'
                >
                  <div class=''>
                    <div style={{ height: '200px' }} class='embed-responsive '>
                      <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.084665489563!2d-81.73340668457197!3d41.45907897925774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830efd46e0dea25%3A0x1c0a054cbbf9b48a!2sStay%20Faded%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1612502075423!5m2!1sen!2sus'
                        width='200'
                        height='200'
                        frameborder='0'
                        style={{ border: '0' }}
                        allowfullscreen=''
                        aria-hidden='false'
                        tabindex='0'
                      ></iframe>
                    </div>
                    <h5 class='mt-3 mb-0 ml-3'>
                      <b>Stay Faded Barbershop</b>
                    </h5>
                    <p class='p-3'>
                      6301 Denison Ave
                      <br />
                      Cleveland, OH, OH 44102
                      <br />
                      Get Directions (216) 217-2280
                    </p>
                  </div>
                  <div class='ml-3 mr-3 mt-5 shadow'>
                    <img
                      class='img-thumbnail img-fluid'
                      src='img/cavaliers2.png'
                      alt='Another alt text'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  return null
}

export default Home

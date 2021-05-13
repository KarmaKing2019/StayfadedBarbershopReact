import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Navbar,
  Nav,
  Jumbotron,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import '../App.css'

class HomeHeader extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <React.Fragment>
        <Jumbotron className='fluid  banner '>
          <div className='container '>
            <div className='row'>
              <div class='col-2 col-xm-0  mr-0 align-self-center'></div>

              <div className='col-8 col-xm-12  mr-0 align-self-center'>
                <div className='  align-self-center'>
                  <img
                    className='shadow rounded-Image '
                    style={{ height: '190px', textShadow: '2px 2px' }}
                    src='../img/wearebarber.jpg'
                    alt='Another alt text'
                  />
                  <h1
                    className='m-0 bannerTitle rockSaltFont'
                    style={{
                      position: 'absolute',
                      top: '10%',
                      left: '54%',
                      transform: 'translate(-50%, -50%)',
                      textShadow: '2px 2px black'
                    }}
                  >
                    Stay Faded Barbershop
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar bg='dark' className='p-3 ' variant='dark'>
          <Navbar.Brand
            className='ml-5'
            style={{ textAlign: 'left', marginLeft: '100px' }}
            href='#home'
          >
            <strong>
              <span></span>Stay Faded
              <span className='text-warning'>Barbershop</span>
            </strong>
          </Navbar.Brand>

          <Nav className='justify-content-end' style={{ width: '90%' }}>
            <Nav.Link href='#home' onClick={this.props.showHome}>
              Home
            </Nav.Link>
            <Nav.Link href='#features' onClick={this.props.showCatalog}>
              Catalog
            </Nav.Link>
            <Nav.Link href='#pricing' onClick={this.props.showBooking}>
              Booking
            </Nav.Link>
          </Nav>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default HomeHeader

import React, { Component } from 'react'
import Header from './HomeHeader'
import Home from './Home'
import Catalog from './Catalog'
import Booking from './Booking'
import Footer from './Footer'

class Main extends Component {
  state = {
    showCatalog: false,
    showHome: true,
    showBooking: false
  }

  showBooking = () => {
    //alert('show Booking')

    this.setState({ showBooking: !this.state.showBooking })
    this.setState({ showHome: false })
    this.setState({ showCatalog: false })

    //alert(this.state.showBooking)
  }

  showCatalog = () => {
    //alert('show Catalog')

    this.setState({ showCatalog: !this.state.showCatalog })
    this.setState({ showHome: false })
    this.setState({ showBooking: false })

    //alert(this.state.showBooking)
  }

  showHome = () => {
    //alert('show Home')
    this.setState({ showHome: true })
    this.setState({ showBooking: false })
    this.setState({ showCatalog: false })

    //alert(this.state.showBooking)
  }

  render () {
    return (
      <React.Fragment>
        <Header
          showBooking={this.showBooking}
          showCatalog={this.showCatalog}
          showHome={this.showHome}
        />

        <Booking showBooking={this.state.showBooking} />
        <Catalog showCatalog={this.state.showCatalog} />
        <Home showHome={this.state.showHome} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Main

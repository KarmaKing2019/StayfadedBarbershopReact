import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import '../App.css'
import Gallery from 'react-grid-gallery'

const IMAGES = [
  {
    src: 'img/men_cuts/taper_fade.jpg',
    thumbnail: 'img/men_cuts/taper_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Taper Fade', title: 'Taper Fade' },
      { value: '$15', title: '$15' }
    ],
    caption: 'Taper Fade Only $15'
  },
  {
    src: 'img/men_cuts/high_fade.jpg',
    thumbnail: 'img/men_cuts/high_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'High Fade', title: 'Ocean' },
      { value: '$15', title: 'People' }
    ],
    caption: 'High Fade $15'
  },

  {
    src: 'img/men_cuts/mid_fade.jpg',
    thumbnail: 'img/men_cuts/mid_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Mid Fade', title: 'Ocean' },
      { value: '$20', title: 'People' }
    ],
    caption: 'Mid Fade $20'
  },

  {
    src: 'img/men_cuts/bald_fade.jpg',
    thumbnail: 'img/men_cuts/bald_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Bald Fade', title: 'Ocean' },
      { value: '$15', title: 'People' }
    ],
    caption: 'Bald Fade $15'
  },

  {
    src: 'img/men_cuts/skin_fade.jpg',
    thumbnail: 'img/men_cuts/skin_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Skin Fade', title: 'Ocean' },
      { value: '$20', title: 'People' }
    ],
    caption: 'Skin Fade $20'
  },

  {
    src: 'img/men_cuts/afro_fade.jpg',
    thumbnail: 'img/men_cuts/afro_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Afro Fade', title: 'Ocean' },
      { value: '$25', title: 'People' }
    ],
    caption: 'Afro Fade $25'
  },

  {
    src: 'img/men_cuts/fade_haircut_designs.jpg',
    thumbnail: 'img/men_cuts/fade_haircut_designs.jpg',
    thumbnailWidth: 240,
    thumbnailHeight: 240,
    tags: [
      { value: 'Fade Cut Design', title: 'Ocean' },
      { value: '$35', title: 'People' }
    ],
    caption: 'Fade Cut with Design $35'
  },

  {
    src: 'img/men_cuts/fade_haircut_line.jpg',
    thumbnail: 'img/men_cuts/fade_haircut_line.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Fade Cut Line', title: 'Ocean' },
      { value: '$35', title: 'People' }
    ],
    caption: 'Fade Cut with Line $35'
  },

  {
    src: 'img/men_cuts/curly_hair_fade.jpg',
    thumbnail: 'img/men_cuts/curly_hair_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Curly Cut Fade', title: 'Ocean' },
      { value: '$35', title: 'People' }
    ],
    caption: 'Curly Hair Fade'
  },

  {
    src: 'img/men_cuts/mohawk_fade_haircut.jpg',
    thumbnail: 'img/men_cuts/mohawk_fade_haircut.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Mohawk Fade Cut', title: 'Ocean' },
      { value: '$35', title: 'People' }
    ],
    caption: 'Mohawk Fade Cut'
  },

  {
    src: 'img/men_cuts/burst_fade.jpg',
    thumbnail: 'img/men_cuts/burst_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Burst Fade', title: 'Ocean' },
      { value: '$35', title: 'People' }
    ],
    caption: 'Burst Fade $35'
  },

  {
    src: 'img/men_cuts/boosie_fade.jpg',
    thumbnail: 'img/men_cuts/boosie_fade.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Bo0sie Fade', title: 'Ocean' },
      { value: '$25', title: 'People' }
    ],
    caption: 'Boosie Fade $25'
  }
]

const BRAIDS = [
  {
    src: 'img/braids/braided_braids.jpg',
    thumbnail: 'img/braids/braided_braids.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Braided Braids', title: 'Taper Fade' },
      { value: '$50', title: '$15' }
    ],
    caption: 'Braided Braids 50$'
  },

  {
    src: 'img/braids/tiny_cornrows.jpg',
    thumbnail: 'img/braids/tiny_cornrows.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Tiny Cornrows', title: 'Taper Fade' },
      { value: '$75', title: '$15' }
    ],
    caption: 'Tiny Cornrows $75'
  },

  {
    src: 'img/braids/top_Knot.jpg',
    thumbnail: 'img/braids/top_Knot.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Top Knot', title: 'Taper Fade' },
      { value: '$80', title: '$15' }
    ],
    caption: 'Top Knot 80$'
  },

  {
    src: 'img/braids/man_bun_braids.jpg',
    thumbnail: 'img/braids/man_bun_braids.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Man Bun Braids', title: 'Taper Fade' },
      { value: '$75', title: '$15' }
    ],
    caption: 'Man Bun Braids 75$'
  },

  {
    src: 'img/braids/feed_in_braids.jpg',
    thumbnail: 'img/braids/feed_in_braids.jpg',
    thumbnailWidth: 220,
    thumbnailHeight: 240,
    tags: [
      { value: 'Feed In Braids', title: 'Taper Fade' },
      { value: '$100', title: '$15' }
    ],
    caption: 'Feed In Braids 100$'
  }
]

class Catalog extends Component {
  state = {}

  render () {

    if (this.props.showCatalog) {

return (
  <div
    className='container-sm mt-3 fade-white mb-4  p-4'
    style={{ height: '1200px' }}
  >
    <div className='row'>
      <Tabs eventKey='profile' id='uncontrolled-tab-example'>
        <Tab eventKey='home' title='Services'>
          <div className='Container'>
            <div className='row'>
              <div className='col-12'>
                <div class='card'>
                  <h5 class='card-header'>Featured</h5>
                  <div class='card-body'>
                    <h5 class='card-title'>
                      Looking for a new style? You have options.
                    </h5>
                    <p class='card-text'>(Customized styles accepted)</p>

                    <Gallery images={IMAGES} />
                  </div>
                </div>
              </div>

              <div className='col-12 mt-3'>
                <div className='card'>
                  <h5 className='card-header'>NEW!!! Braids & Twists</h5>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      (Now offering that next level look){' '}
                    </h5>
                    <p className='card-text'>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>

                    <Gallery images={BRAIDS} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey='profile' title='Prices'>
          <div
            style={{ height: '900px', marginTop: '50px;' }}
            className=' fade-white p-4 justify-content-center'
          >
            <h3> Stay Faded Price List</h3>
            <br />
            <br />

            <div className='container'>
              <div className='row'>
                <div classname='col-6'>
                  <table className='table table-sm mb-5'>
                    <thead>
                      <tr className='table-secondary'>
                        <th scope='col'>#</th>
                        <th scope='col'>Cuts & Fades</th>
                        <th scope='col'>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'></th>
                        <td>Taper Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>High Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Mid Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Bald Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Skin Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Afro Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Skin Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Fade and Design</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Fade and Line</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Curly Hair Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Mohawk Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Burst Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Boosie Fade</td>
                        <td>$15</td>
                      </tr>
                      <tr className='table-secondary'>
                        <th scope='col'></th>
                        <td scope='col'>
                          <b> Braids & Twists</b>
                        </td>
                        <td scope='col'>
                          <b>Price</b>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Braided Braids</td>
                        <td>$55</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Tiny Cornrows</td>
                        <td>$55</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Top Knot Braids</td>
                        <td>$65</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Man Bun Braids</td>
                        <td>$65</td>
                      </tr>
                      <tr>
                        <th scope='row'></th>
                        <td>Feed In Braids</td>
                        <td>$65</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  </div>
)


    }
    return null;

  }
}

export default Catalog

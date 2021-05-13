import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import ImageViewer from 'react-simple-image-viewer'

export default function HomeGallery () {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = [
    'img/ac_pics/cut1.jpg',
    'img/ac_pics/cut2.jpg',
    'img/ac_pics/cut3.jpg',
    'img/ac_pics/cut4.jpg',
    'img/ac_pics/cut5.jpg',
    'img/ac_pics/cut6.jpg',
    'img/ac_pics/cut7.jpg',
    'img/ac_pics/cut8.jpg',
    'img/ac_pics/cut9.jpg',
    'img/ac_pics/cut10.jpg',
    'img/ac_pics/cut11.jpg',
    'img/ac_pics/cut12.jpg',
    'img/ac_pics/cut13.jpg',
    'img/ac_pics/cut14.jpg',
    'img/ac_pics/cut15.jpg',
    'img/ac_pics/cut16.jpg',
    'img/ac_pics/cut17.jpg',
    'img/ac_pics/cut18.jpg',
    'img/ac_pics/cut19.jpg',
    'img/ac_pics/cut20.jpg',
    'img/ac_pics/cut21.jpg',


    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1920/1080/nature',
    'http://placeimg.com/1500/500/nature'
  ]

  const openImageViewer = useCallback(index => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width='200'
          className='m-2 shadow'
          height="250"yar 
          key={index}
          style={{ margin: '3px' }}
          alt=''
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)'
          }}
        />
      )}
    </div>
  )
}


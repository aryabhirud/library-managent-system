import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

 
function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="/assets/images/symbiosis_building.jpg"
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="/assets/images/symbiosis_library.jpg"
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}

export default ImageSlider

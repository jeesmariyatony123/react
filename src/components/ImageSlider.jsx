import React, { useState } from 'react'

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    return (
        <div className="image-slider">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
            <div className="slider">
                {images.map((image, index) => (
                    <div key={index} className={index === currentIndex ? "slide active" : "slide"}>
                        <img className='images' src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>)
}

export default ImageSlider
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Carrousel.css';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="card">
                        <div class="card-header">
                            <div class="avatar"></div>
                            <div class="title-bar">
                                <div class="title"></div>
                                <div class="subtitle"></div>
                            </div>
                        </div>
                        <div class="card-image"></div>
                        <div class="card-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div class="card-actions">
                            <button class="action-button code-button">
                                <i class="fas fa-code"></i>
                            </button>
                            <button class="action-button live-view-button">Live View</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

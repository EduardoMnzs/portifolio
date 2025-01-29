import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const NextArrow = (props) => {
  const { onClick, disabled } = props;
  return (
    <div
      className={`next-arrow ${disabled ? 'disabled' : ''}`}
      onClick={!disabled ? onClick : null}
    >
      <i className="fas fa-chevron-circle-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick, disabled } = props;
  return (
    <div
      className={`prev-arrow ${disabled ? 'disabled' : ''}`}
      onClick={!disabled ? onClick : null}
    >
      <i className="fas fa-chevron-circle-left"></i>
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const totalSlides = 7;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: (
      <NextArrow
        disabled={currentSlide >= totalSlides - 1}
        onClick={() => sliderRef.current.slickNext()}
      />
    ),
    prevArrow: (
      <PrevArrow
        disabled={currentSlide === 0}
        onClick={() => sliderRef.current.slickPrev()}
      />
    ),
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: (
            <NextArrow
              disabled={currentSlide >= totalSlides - 1}
              onClick={() => sliderRef.current.slickNext()}
            />
          ),
          prevArrow: (
            <PrevArrow
              disabled={currentSlide === 0}
              onClick={() => sliderRef.current.slickPrev()}
            />
          ),
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: (
            <NextArrow
              disabled={currentSlide >= totalSlides - 1}
              onClick={() => sliderRef.current.slickNext()}
            />
          ),
          prevArrow: (
            <PrevArrow
              disabled={currentSlide === 0}
              onClick={() => sliderRef.current.slickPrev()}
            />
          ),
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: (
            <NextArrow
              disabled={currentSlide >= totalSlides}
              onClick={() => sliderRef.current.slickNext()}
            />
          ),
          prevArrow: (
            <PrevArrow
              disabled={currentSlide === 0}
              onClick={() => sliderRef.current.slickPrev()}
            />
          ),
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: (
            <NextArrow
              disabled={currentSlide >= totalSlides - 1}
              onClick={() => sliderRef.current.slickNext()}
            />
          ),
          prevArrow: (
            <PrevArrow
              disabled={currentSlide === 0}
              onClick={() => sliderRef.current.slickPrev()}
            />
          ),
        },
      },
    ],
  };

  const cards = [
    { id: 1, profile: 'fas fa-robot', title: 'Uni Recognition', content: 'Content 1', technology1: 'C', technology2: 'C++', technology3: 'Flask', technologyplus: 'Postgress', img: './static/img/recog.png', text: 'Uni Recognition is an AI-based project that uses ESP-32 Cam for facial recognition to automate student attendance. Developed with Flask and PostgreSQL, it streamlines attendance management in educational institutions.' },

    { id: 2, profile: 'fas fa-gamepad', title: 'Laser Killer', content: 'Content 2', technology1: 'C', technology2: 'C++', technology3: 'Flask', technologyplus: 'Postgress', img: './static/img/laser.png', text: 'Laser Killer is a project from the Agile Project Factory course designed to identify weeds using AI and an ESP-32 Cam, eliminating them with a laser. Developed with Flask and PostgreSQL, it offers an innovative, automated solution for weed control.' },

    { id: 3, profile: 'far fa-comments', title: 'Pandora', content: 'Content 3', technology1: 'Python', technology2: 'API Gemini', technology3: 'API ElevenLabs', technologyplus: '+', img: './static/img/pandora.png', text: 'Pandora is an intelligent voice assistant project that uses Python to identify voices and provide responses. It integrates the Gemini API for generating answers and the ElevenLabs API for voice synthesis, delivering a seamless and natural voice interaction experience.' },

    { id: 4, profile: 'fas fa-atom', title: 'Piveta System', content: 'Content 4', technology1: 'JS', technology2: 'HTML', technology3: 'CSS', technologyplus: '+', img: './static/img/piveta.png', text: 'Piveta System is a multi-tool project designed to accelerate processes with a wide range of functions. Built with Python, Flask, and PostgreSQL, it provides an efficient and flexible solution for various tasks, streamlining workflows and enhancing productivity.' },

    { id: 5, profile: 'fas fa-calculator', title: 'Calculator Free Market', content: 'Content 5', technology1: 'React Native', technology2: 'Android', technology3: 'IOS', technologyplus: '+', img: './static/img/ml.png', text: 'Calculator Free Market is a project that helps track product prices, calculate profits, expenses, and more. Built with React Native, it provides an intuitive tool for sellers to monitor and manage their product values, ensuring better financial control and decision-making.' },


    { id: 6, profile: 'fas fa-seedling', title: 'Projeto Y', content: 'Content 6', technology1: 'JS', technology2: 'HTML', technology3: 'CSS', technologyplus: '+', img: 'https://via.placeholder.com/350x200', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet tempor placerat. Mauris vel ipsum et est iaculis fringilla. Vestibulum aliquet consectetur aliquam. Sed arcu lectus, dapibus quis enim quis, molestie convallis urna.' },

    { id: 7, profile: 'fas fa-eye', title: 'Projeto Z', content: 'Content 7', technology1: 'JS', technology2: 'HTML', technology3: 'CSS', technologyplus: '+', img: 'https://via.placeholder.com/350x200', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet tempor placerat. Mauris vel ipsum et est iaculis fringilla. Vestibulum aliquet consectetur aliquam. Sed arcu lectus, dapibus quis enim quis, molestie convallis urna.' },

    { id: 8, profile: '', title: 'Card 8', content: 'Content 8', technology1: 'JS', technology2: 'HTML', technology3: 'CSS', technologyplus: '+', img: 'https://via.placeholder.com/350x200', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet tempor placerat. Mauris vel ipsum et est iaculis fringilla. Vestibulum aliquet consectetur aliquam. Sed arcu lectus, dapibus quis enim quis, molestie convallis urna.' },

    { id: 9, profile: '', title: 'Card 9', content: 'Content 9', technology1: 'JS', technology2: 'HTML', technology3: 'CSS', technologyplus: '+', img: 'https://via.placeholder.com/350x200', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet tempor placerat. Mauris vel ipsum et est iaculis fringilla. Vestibulum aliquet consectetur aliquam. Sed arcu lectus, dapibus quis enim quis, molestie convallis urna.' },

    { id: 10, profile: '', title: 'Card 10', content: 'Content 10', technology1: 'JS', technology2: 'HTML', technology3: 'CSS', technologyplus: '+', img: 'https://via.placeholder.com/350x200', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet tempor placerat. Mauris vel ipsum et est iaculis fringilla. Vestibulum aliquet consectetur aliquam. Sed arcu lectus, dapibus quis enim quis, molestie convallis urna.' },
    
    { id: 11, profile: '', title: 'Card 11', content: 'Content 11', technology1: 'JS', technology2: 'HTML', technology3: 'CSS', technologyplus: '+', img: 'https://via.placeholder.com/350x200', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet tempor placerat. Mauris vel ipsum et est iaculis fringilla. Vestibulum aliquet consectetur aliquam. Sed arcu lectus, dapibus quis enim quis, molestie convallis urna.' },
  ];

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${currentSlide === index ? 'focused' : ''}`}
          >
            <div className="card-header">
              <div className="profile-icon"><i className={card.profile}></i></div>
              <div className="profile-info">
                <div className="profile-line">{card.title}</div>
                <div className='tecnologia-container'>
                  <div className="profile-line small">{card.technology1}</div>
                  <div className="profile-line small">{card.technology2}</div>
                  <div className="profile-line small">{card.technology3}</div>
                  <div className="profile-line small">{card.technologyplus}</div>
                </div>
              </div>
            </div>
            <div className="card-image"><img src={card.img}/></div>
            <div className="card-content">
              <p>{card.text}</p>
            </div>
            <div className="card-footer">
              <button className="code-button">
                <i className="fas fa-code"></i>
              </button>
              <button className="live-button">Live View</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
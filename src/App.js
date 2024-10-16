import React, { Suspense, useEffect, useState, useRef } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import Carousel from './Carousel';
import AboutContent from './About';

function BoyModel() {
  const gltf = useGLTF('/cenario.glb');
  return null;
  // return <primitive object={gltf.scene} />; // Caso queira mostrar o modelo
}

function CameraController() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const initialPosition = { x: -50, y: 5, z: 30 };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    const maxOffset = { x: 3, y: 3, z: 3 };
    camera.position.x += (initialPosition.x + mousePos.x * maxOffset.x - camera.position.x) * 0.05;
    camera.position.y += (initialPosition.y + mousePos.y * maxOffset.y - camera.position.y) * 0.05;
    camera.position.z += (initialPosition.z + mousePos.x * maxOffset.z - camera.position.z) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function App() {
  const sections = ['Home', 'About', 'Work', 'Contact'];
  const [currentSection, setCurrentSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioAtivo, setAudioAtivo] = useState(true);
  const waveRef = useRef(null);
  const audioRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioAtivo) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error('Erro ao tentar reproduzir o áudio:', error));
      }
      setAudioAtivo(!audioAtivo);
    }
  };

  const handleNavClick = (sectionIndex) => {
    if (waveRef.current) {
      waveRef.current.classList.remove('animate');
      waveRef.current.style.zIndex = 10000;

      setTimeout(() => {
        waveRef.current.classList.add('animate');
      }, 50);

      setTimeout(() => {
        setCurrentSection(sectionIndex);
      }, 1500);
    }
  };

  const handleAnimationEnd = () => {
    if (waveRef.current) {
      waveRef.current.style.zIndex = -10000;
      waveRef.current.classList.remove('animate');
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      setCurrentSection((prevSection) => {
        if (event.deltaY > 0) return Math.min(prevSection + 1, sections.length - 1);
        return Math.max(prevSection - 1, 0);
      });
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [sections.length]);

  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (cursorDot) {
        cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    const handleMouseEnter = () => cursorDot?.classList.add('expand');
    const handleMouseLeave = () => cursorDot?.classList.remove('expand');

    document.addEventListener('mousemove', handleMouseMove);

    const clickableElements = document.querySelectorAll('a, button, .clickable');
    clickableElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clickableElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="App">
      <audio ref={audioRef} src="#" loop></audio>
      <div className="cursor-dot"></div>

      <nav className="navbar">
        <div className="logo">
          <img className="logo-img" src="/logo.svg" alt="Logo" />
        </div>
        <div className="nav-buttons">
          <button className={`sound-button ${!audioAtivo ? 'muted' : ''}`} onClick={toggleAudio}>
            <i className={`fas ${audioAtivo ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
          </button>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="options-side">
          <ul>
            {sections.map((section, index) => (
              <li key={section} className={currentSection === index ? 'active' : ''}>
                <a href={`#${section}`} onClick={() => handleNavClick(index)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fas fa-envelope"></i>
        </div>
        <div className="footer-text">© 2024 by Eduardo Menezes.</div>
      </div>

      <div className="sections" style={{ transform: `translateY(-${currentSection * 100}vh)` }}>
        <div className="section" id="section1">
          <h1 className="title-overlay">Hi, my <br /> name is Lorem.</h1>
          <p className="subtitle-overlay">I love creating beautiful user experiences.</p>
          <button className="cta-button">Get in touch</button>
          <div className="svg-scroll-container">
          <svg width="50" height="70" viewBox="0 0 75 5" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="0" width="30" height="50" rx="15" ry="15" fill='none' stroke="white" strokeWidth="3" />
            <circle cx="25" cy="15" r="4" fill="white">
              <animate
                attributeName="cy"
                from="15"
                to="35"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          </div>
          <div className="canvas-container">
            <Canvas camera={{ position: [-10, 5, 20], fov: 2 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 7]} intensity={1.0} castShadow />
              <pointLight position={[-10, 10, -10]} intensity={0.8} />
              <spotLight position={[15, 20, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
              <hemisphereLight skyColor={'#ffffff'} groundColor={'#b97a20'} intensity={0.6} />
              <CameraController />
              <Suspense fallback={<Html>Loading...</Html>}>
                <BoyModel />
              </Suspense>
            </Canvas>
          </div>
        </div>

        <div className="section" id="section2">
          <AboutContent />
        </div>

        <div className="section" id="section3">
          <div className="section-header">
            <div className="section-subtitle">
              <span className="line"></span>
              <span className="subtitle-text">Portfolio</span>
            </div>
            <h2 className="section-title">Some things<br />I've worked on</h2>
            <div className="carousel-container-master">
              <Carousel />
            </div>
          </div>
        </div>

        <div className="section" id="section4">
          <div className="section-header">
            <div className="section-subtitle">
              <span className="line"></span>
              <span className="subtitle-text">Say Hello 👋</span>
            </div>
            <h2 className="section-title">Contact me</h2>
            <div className="contact-container">
              <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                <div className="social-icons">
                  <a href="#"><i className="fab fa-github"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>

                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
            <footer className="footer-container">
              <p>© Eduardo Menezes</p>
              <a href="#">Legal Notice</a>
              <a href="#">Privacy Policy</a>
            </footer>
          </div>
        </div>
      </div>

      <svg ref={waveRef} onAnimationEnd={handleAnimationEnd} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="wave">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#1b1f3b", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#1b1f3b", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#blueGradient)"
          d="M300,100 
        C360,60, 450,80, 480,150
        C510,220, 470,280, 430,320
        C390,360, 450,440, 380,490
        C310,540, 230,510, 180,460
        C130,410, 100,340, 140,280
        C180,220, 80,160, 170,120
        C260,80, 240,140, 300,100
        Z"
        />
      </svg>
    </div>
  );
}

export default App;
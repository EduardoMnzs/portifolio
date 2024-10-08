import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

function BoyModel() {
  const gltf = useGLTF('/cenario.glb');
  return <primitive object={gltf.scene} />;
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
    if (camera) {
      const maxOffsetX = 3;
      const maxOffsetY = 3;
      const maxOffsetZ = 3;

      camera.position.x +=
        (initialPosition.x + mousePos.x * maxOffsetX - camera.position.x) * 0.05;
      camera.position.y +=
        (initialPosition.y + mousePos.y * maxOffsetY - camera.position.y) * 0.05;
      camera.position.z +=
        (initialPosition.z + mousePos.x * maxOffsetZ - camera.position.z) * 0.05;

      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

function App() {
  const sections = ['section1', 'section2', 'section3', 'section4'];
  const [currentSection, setCurrentSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scroll para baixo
        setCurrentSection((prevSection) => Math.min(prevSection + 1, sections.length - 1));
      } else {
        // Scroll para cima
        setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (cursorDot) {
        cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    // Adiciona o evento de movimento do mouse após a montagem do componente
    document.addEventListener('mousemove', handleMouseMove);

    // Limpa o evento ao desmontar o componente
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez, após a montagem

  return (
    <div className="App">
      <div class="cursor-dot"></div>
      <nav className="navbar">
        <div className="logo">
          <img className="logo-img" src="/logo.svg" alt="Logo" />
        </div>
        <div className="nav-buttons">
          <button className="sound-button">
            <i className="fas fa-volume-up"></i>
          </button>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className='options-side'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fas fa-envelope"></i>
        </div>
        <div className="footer-text">
          © 2024 by Eduardo Menezes.
        </div>
      </div>

      <div className="sections" style={{ transform: `translateY(-${currentSection * 100}vh)` }}>
        <div className="section" id="section1">
          <h1 className="title-overlay">Hi, my <br /> name is Eduardo.</h1>
          <p className="subtitle-overlay">I love creating beautiful user experiences.</p>
          <button className="cta-button">Get in touch</button>
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
          <h1>Section 2</h1>
          <p>Content for section 2.</p>
        </div>

        <div className="section" id="section3">
          <h1>Section 3</h1>
          <p>Content for section 3.</p>
        </div>

        <div className="section" id="section4">
          <h1>Section 4</h1>
          <p>Content for section 4.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
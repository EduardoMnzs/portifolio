import React, { Suspense, useRef, useEffect, useState } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

function BoyModel() {
  // Carregar o modelo GLB
  const gltf = useGLTF('/cenario.glb');

  return <primitive object={gltf.scene} />;
}

function CameraController() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const initialPosition = { x: -50, y: 5, z: 30 };

  // Capturar movimento do mouse e normalizar entre -1 e 1
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
      // Limites para a posição da câmera a partir da posição inicial
      const maxOffsetX = 3; // Máximo deslocamento no eixo X
      const maxOffsetY = 3; // Máximo deslocamento no eixo Y
      const maxOffsetZ = 3; // Máximo deslocamento no eixo Z

      // Movendo a câmera suavemente com base na posição do mouse
      camera.position.x +=
        (initialPosition.x + mousePos.x * maxOffsetX - camera.position.x) * 0.05;
      camera.position.y +=
        (initialPosition.y + mousePos.y * maxOffsetY - camera.position.y) * 0.05;
      camera.position.z +=
        (initialPosition.z + mousePos.x * maxOffsetZ - camera.position.z) * 0.05;

      // Mantendo a câmera sempre olhando para o centro da cena
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img className='logo-img' src="/logo.svg" alt="Logo" />
        </div>
        <div className="nav-buttons">
          <button className="sound-button">
            <i className="fas fa-volume-up"></i>
          </button>
          <button className="hamburger-button">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      {/* Primeira Seção */}
      <div className="section" id="section1">
        <h1 className="title-overlay">
          Hi, my <br />
          name is Lorem
        </h1>
        <p className="subtitle-overlay">I love creating beautiful user experiences.</p>
        <button className="cta-button">Get in touch</button>
        <div className="canvas-container">
          <Canvas camera={{ position: [-10, 5, 20], fov: 2 }}>
            {/* Luzes */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 7]} intensity={1.0} castShadow />
            <pointLight position={[-10, 10, -10]} intensity={0.8} />
            <spotLight
              position={[15, 20, 5]}
              angle={0.3}
              penumbra={1}
              intensity={1.5}
              castShadow
            />
            <hemisphereLight skyColor={'#ffffff'} groundColor={'#b97a20'} intensity={0.6} />

            {/* Controlador da Câmera */}
            <CameraController />

            {/* Modelo */}
            <Suspense fallback={<Html>Loading...</Html>}>
              <BoyModel />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Segunda Seção */}
      <div className="section" id="section2">
        <h1>Section 2</h1>
        <p>Content for section 2.</p>
      </div>

      {/* Terceira Seção */}
      <div className="section" id="section3">
        <h1>Section 3</h1>
        <p>Content for section 3.</p>
      </div>
    </div>
  );
}

export default App;
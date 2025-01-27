import React from 'react';
import './About.css';
import perfilImg from './img/perfil.png';

const AboutContent = () => {
    return (
        <div id="about-content-container">
            {/* SVG de Perfil */}
            <svg width="600" height="200" viewBox="-10 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="profile-clip">
                        <polyline points="5,0 80,0 85,5 85,95 5,95 0,90 0,5 5,0" />
                    </clipPath>
                </defs>

                <rect x="0" y="0" width="300" height="100" fill="rgba(0, 88, 165, 0.2)" clipPath="url(#profile-clip)" />

                <polyline className="animated-polyline" fill="none" stroke="#34bfff" strokeWidth="1.5"
                    points="5,0 80,0 85,5 85,95 5,95 0,90 0,5 5,0" />

                <image href={perfilImg} x="3" y="-1" width="95" height="95" />

                <polyline className="animated-polyline" fill="rgba(0, 88, 165, 0.2)" stroke="#34bfff" strokeWidth="1.5"
                    points="85,35 130,35 135,30 280,30 285,35 285,95 85,95 85,65" />

                <g>
                    <text className="animated-text" x="105" y="60" fill="#34bfff" fontSize="8" fontWeight="bold">Name:</text>
                    <text className="animated-text" x="105" y="74" fill="#34bfff" fontSize="12" fontWeight="bold">Eduardo</text>

                    <text className="animated-text" x="170" y="60" fill="#34bfff" fontSize="8" fontWeight="bold">Age:</text>
                    <text className="animated-text" x="170" y="74" fill="#34bfff" fontSize="12" fontWeight="bold">21</text>

                    <text className="animated-text" x="220" y="60" fill="#34bfff" fontSize="8" fontWeight="bold">From:</text>
                    <text className="animated-text" x="220" y="74" fill="#34bfff" fontSize="12" fontWeight="bold">Brazil</text>
                </g>
            </svg>

            {/* SVG de Skills */}
            <svg width="600" height="380" viewBox="0 0 300 138" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip-skill-section">
                        <polyline points="10,5 60,5 65,5 145,5 150,10 290,10 295,15 295,135 290,140 15,140 10,135 10,5" />
                    </clipPath>
                </defs>

                <rect x="0" y="0" width="300" height="150" fill="rgba(0, 88, 165, 0.2)" clipPath="url(#clip-skill-section)" />

                <polyline className="animated-polyline" fill="none" stroke="#34bfff" strokeWidth="1.5"
                    points="10,5 60,5 65,5 145,5 150,10 290,10 295,15 295,135 290,140 15,140 10,135 10,5" />

                <g clipPath="url(#clip-skill-section)">
                    <text className="animated-text" x="25" y="25" fill="#34bfff" fontSize="12" fontWeight="bold">SKILLS</text>

                    <text className="animated-text" x="25" y="50" fill="#34bfff" fontSize="10">Web Developer</text>
                    <rect className="animated-rect" x="100" y="43" width="120" height="5" fill="#34bfff" />
                    <rect x="100" y="43" width="150" height="5" fill="rgba(52, 191, 255, 0.2)" />

                    <text className="animated-text" x="25" y="70" fill="#34bfff" fontSize="10">React</text>
                    <rect className="animated-rect" x="100" y="63" width="70" height="5" fill="#34bfff" />
                    <rect x="100" y="63" width="150" height="5" fill="rgba(52, 191, 255, 0.2)" />

                    <text className="animated-text" x="25" y="90" fill="#34bfff" fontSize="10">React Native</text>
                    <rect className="animated-rect" x="100" y="83" width="45" height="5" fill="#34bfff" />
                    <rect x="100" y="83" width="150" height="5" fill="rgba(52, 191, 255, 0.2)" />

                    <text className="animated-text" x="25" y="110" fill="#34bfff" fontSize="10">Pyhton</text>
                    <rect className="animated-rect" x="100" y="103" width="90" height="5" fill="#34bfff" />
                    <rect x="100" y="103" width="150" height="5" fill="rgba(52, 191, 255, 0.2)" />

                    <text className="animated-text" x="25" y="130" fill="#34bfff" fontSize="10">UI/UX</text>
                    <rect className="animated-rect" x="100" y="123" width="95" height="5" fill="#34bfff" />
                    <rect x="100" y="123" width="150" height="5" fill="rgba(52, 191, 255, 0.2)" />
                </g>
            </svg>
            <svg className='about-section' width="600" height="350" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                {/* Definição do clipPath */}
                <defs>
                    <clipPath id="clip-about-section">
                        <polyline points="10,5 60,5 65,0 220,0 225,5 290,5 295,10 295,155 290,160 20,160 15,155 15,50 10,45 10,5" />
                    </clipPath>
                </defs>

                {/* Retângulo de Fundo Limitado pelo clipPath */}
                <rect x="0" y="0" width="300" height="200" fill="rgba(0, 88, 165, 0.2)" clipPath="url(#clip-about-section)" />

                {/* Contorno com um design mais detalhado */}
                <polyline className='animated-polyline' fill="none" stroke="#34bfff" strokeWidth="1.5"
                    points="10,5 60,5 65,0 220,0 225,5 290,5 295,10 295,155 290,160 20,160 15,155 15,50 10,45 10,5" />

                <text className="animated-text" id='about-section-title' x="25" y="25" fill="#34bfff" fontSize="12" fontWeight="bold">ABOUT</text>

                {/* Seção com ícone de pessoa e descrição */}
                <g transform="translate(20, 40)">
                    <rect className="animated-text" x="5" y="-5" width="40" height="40" fill="rgba(52, 191, 255, 0.2)" rx="10" ry="10" />

                    <foreignObject className='animated-text' x="13" y="5" width="30" height="30">
                        <i className="fa fa-graduation-cap" style={{ color: '#34bfff', fontSize: '20px' }}></i>
                    </foreignObject>


                    <text className="animated-text" x="50" y="12" fill="#34bfff">
                        I'm a computer science student at UNIMAR
                    </text>
                    <text className="animated-text" x="50" y="22" fill="#34bfff">
                        - University of Marília.
                    </text>
                </g>

                {/* Seção com ícone de coração e descrição */}
                <g transform="translate(20, 80)">
                    <rect className="animated-text" x="225" y="-5" width="40" height="40" fill="rgba(52, 191, 255, 0.2)" rx="10" ry="10" />

                    <foreignObject className='animated-text' x="232" y="5" width="30" height="30">
                        <i className="fa fa-code" style={{ color: '#34bfff', fontSize: '20px' }}></i>
                    </foreignObject>

                    <text className="animated-text" x="5" y="12" fill="#34bfff">
                        I like new challenges and developing new skills,
                    </text>
                    <text className="animated-text" x="5" y="22" fill="#34bfff">
                        learning and teaching is essential for me.
                    </text>
                </g>

                {/* Seção com ícone de foguete e descrição */}
                <g transform="translate(20, 120)">
                    <rect className="animated-text" x="5" y="-5" width="40" height="40" fill="rgba(52, 191, 255, 0.2)" rx="10" ry="10" />

                    <foreignObject className='animated-text' x="14  " y="5" width="20" height="20">
                        <i className="fas fa-rocket" style={{ color: '#34bfff', fontSize: '20px' }}></i>
                    </foreignObject>

                    <text className="animated-text" x="50" y="12" fill="#34bfff">
                        I dream of becoming a teacher,
                    </text>
                    <text className="animated-text" x="50" y="22" fill="#34bfff">
                        but I still have a lot to learn until then!
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default AboutContent;
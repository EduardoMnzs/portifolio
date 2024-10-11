import React from 'react';

const AboutContent = () => {
    return (
        <div id="about-content-container">
            <svg
                id="skills-svg"
                viewBox="-2 -2 506 815"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMid"
            >
                {/* Defs */}
                <defs>
                    <linearGradient
                        id="about-profile-picture-mask-gradient"
                        gradientTransform="rotate(90)"
                    >
                        <stop offset="5%" stopColor="#60CAFF" />
                        <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                    </linearGradient>

                    <linearGradient
                        id="about-background-gradient"
                        gradientTransform="rotate(90)"
                    >
                        <stop offset="30%" stopColor="rgba(0, 88, 165, .15)" />
                        <stop offset="95%" stopColor="rgba(0, 132, 255, .3)" />
                    </linearGradient>

                    <polyline
                        id="about-icon-background"
                        fill="#00b7ff18"
                        points="0,10 10,0 65,0 75,10 75,65 65,75 10,75 0,65"
                    />
                </defs>

                {/* Header */}
                <g id="about-svg-header">
                    {/* Profile Picture Background */}
                    <polyline
                        id="about-profile-background"
                        className="about-box-background"
                        points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
                    />

                    {/* Header Content Background */}
                    <polyline
                        id="about-header-background"
                        className="about-box-background"
                        points="145,85 250,85 260,95 490,95 500,105 500,135 500,150 490,160 200,160 190,170 145,170"
                    />

                    {/* Profile Picture Mask */}
                    <mask id="about-profile-picture-mask">
                        <rect fill="black" x="0" y="0" width="145" height="170" />
                        <polyline
                            fill="white"
                            points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
                        />
                        <rect
                            id="about-profile-picture-mask-rect"
                            fill="black"
                            width="145"
                            height="170"
                            style={{ transition: '1.2s' }}
                            x="0"
                            y="-0"
                        />
                    </mask>

                    {/* Profile Picture */}
                    <image
                        href="/skills-profile-picture.png"
                        opacity="1"
                        height="170"
                        width="145"
                        x="2"
                        mask="url(#about-profile-picture-mask)"
                        imageRendering="optimizeSpeed"
                    />

                    {/* Profile Picture Borders */}
                    <polyline
                        className="about-box-line"
                        points="65,170 10,170 0,160 0,10 10,0 70,0"
                    />
                    <polyline
                        className="about-box-line"
                        points="65,170 145,170 145,50 135,40 135,10 125,0 70,0"
                    />

                    {/* Header Content Borders */}
                    <polyline
                        className="about-box-line"
                        points="145,85 250,85 260,95 490,95 500,105 500,135"
                    />
                    <polyline
                        className="about-box-line"
                        points="145,170 190,170 200,160 490,160 500,150 500,135"
                    />

                    {/* Header Content */}
                    <g transform="translate(170 118)" fill="#34bfff" fontWeight="bold">
                        <text x="0" y="0" fontSize="12" className="about-header-upper-text">
                            Name :
                        </text>
                        <text x="0" y="20" fontSize="18" className="about-header-lower-text">
                            David
                        </text>
                        <text x="110" y="0" fontSize="12" className="about-header-upper-text">
                            Age :
                        </text>
                        <text x="110" y="20" fontSize="18" className="about-header-lower-text">
                            23
                        </text>
                        <text x="200" y="0" fontSize="12" className="about-header-upper-text">
                            From :
                        </text>
                        <text x="200" y="20" fontSize="18" className="about-header-lower-text">
                            Germany
                        </text>
                    </g>
                </g>

                {/* Skills and About Sections */}
                {/* Resto do SVG continua aqui, replicando a estrutura acima */}
            </svg>
        </div>
    );
};

export default AboutContent;
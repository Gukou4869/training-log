import * as React from 'react';

interface BackgroundProps {}
const Background: React.FC<BackgroundProps> = props => {
    return (
        <div
            className=""
            style={{
                width: '100%',
                height: '10px',
                position: 'absolute',
                left: 0,
                bottom: 0,
                zIndex: 1,
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,90.7C672,85,768,75,864,69.3C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};

export default Background;
import React from 'react';
import Background from '../resources/music.jpg';

function LandingPage() {
  return (
    <div style={{
    width: "100%",
    height: "800px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundImage: `url(${Background})`}} >
      
    </div>
  );
}

export default LandingPage;

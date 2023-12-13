import React, { useRef } from 'react';

function App() {
  
  const currentAudioRef = useRef();

  const playSound = (soundSrc) => {

    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }

    const audio = new Audio(soundSrc);
    audio.play();

    currentAudioRef.current = audio;
  };

  // Function to handle button click
  const handleButtonClick = (color, soundSrc) => {
    // Play a sound
    playSound(soundSrc);

    // You can perform additional actions based on the button's color
    console.log(`Button with color ${color} clicked!`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button style={{ backgroundColor: 'brown', border: '1px solid black', padding: '10px', margin: '5px' }} onClick={() => handleButtonClick('brown', '/resources/brown.mp3')}>
        Brown
      </button>

      <button style={{ backgroundColor: 'pink', border: '1px solid black', padding: '10px', margin: '5px' }} onClick={() => handleButtonClick('pink', '/resources/pink.mp3')}>
        Pink
      </button>

      <button style={{ backgroundColor: 'white', border: '1px solid black', padding: '10px', margin: '5px' }} onClick={() => handleButtonClick('white', '/resources/white.mp3')}>
        White
      </button>
    </div>
  );
}

export default App;

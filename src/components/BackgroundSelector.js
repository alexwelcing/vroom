import React, { useState } from 'react';

export default function BackgroundSelector({ onSetBackground }) {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleSetBackground = () => {
    onSetBackground(backgroundImage);
  };

  return (
    <div className="background-selector">
      <input type="file" onChange={(e) => setBackgroundImage(URL.createObjectURL(e.target.files[0]))} />
      <button onClick={handleSetBackground}>Set Background</button>
    </div>
  );
}

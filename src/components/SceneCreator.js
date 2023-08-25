import React, { useState } from 'react';
import { Objects } from './Objects';

export default function SceneCreator() {
  const [scene, setScene] = useState([]);
  const [selectedObject, setSelectedObject] = useState('sphere');

  const handleAddObject = () => {
    setScene([...scene, selectedObject]);
  };

  return (
    <div className="scene-creator">
      <div className="object-selector">
        <button onClick={() => setSelectedObject('sphere')}>Sphere</button>
        <button onClick={() => setSelectedObject('cube')}>Cube</button>
        <button onClick={() => setSelectedObject('cone')}>Cone</button>
      </div>
      <div className="scene">
        {scene.map((objectType, index) => (
          <Objects key={index} type={objectType} />
        ))}
      </div>
      <button onClick={handleAddObject}>Add Object</button>
    </div>
  );
}

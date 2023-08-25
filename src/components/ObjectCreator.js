import React, { useState } from 'react';

export default function ObjectCreator({ onCreate }) {
  const [shape, setShape] = useState('sphere');
  const [size, setSize] = useState(1);

  const handleCreateObject = () => {
    onCreate({ shape, size });
  };

  return (
    <div className="object-creator">
      <select onChange={(e) => setShape(e.target.value)}>
        <option value="sphere">Sphere</option>
        <option value="cube">Cube</option>
        <option value="cone">Cone</option>
      </select>
      <input type="number" value={size} onChange={(e) => setSize(e.target.value)} />
      <button onClick={handleCreateObject}>Create Object</button>
    </div>
  );
}

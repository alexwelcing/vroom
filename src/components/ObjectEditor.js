import React from 'react';

export default function ObjectEditor({ object, onEdit }) {
  return (
    <div className="object-editor">
      <label>Shape: {object.shape}</label>
      <label>Size:</label>
      <input
        type="number"
        value={object.size}
        onChange={(e) => onEdit({ ...object, size: e.target.value })}
      />
    </div>
  );
}

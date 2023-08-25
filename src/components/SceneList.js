import React from 'react';

export default function SceneList({ scenes, onSelectScene }) {
  return (
    <div className="scene-list">
      <h3>Your Scenes</h3>
      <ul>
        {scenes.map((scene, index) => (
          <li key={index} onClick={() => onSelectScene(index)}>
            {scene.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

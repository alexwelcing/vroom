import React, { useState } from 'react';
import ObjectCreator from './ObjectCreator';
import ObjectEditor from './ObjectEditor';
import { Objects } from './Objects';

export default function Scene() {
  const [objects, setObjects] = useState([]);

  const handleCreateObject = (object) => {
    setObjects([...objects, object]);
  };

  const handleEditObject = (index, newObject) => {
    const updatedObjects = [...objects];
    updatedObjects[index] = newObject;
    setObjects(updatedObjects);
  };

  return (
    <div className="scene">
      <ObjectCreator onCreate={handleCreateObject} />
      {objects.map((object, index) => (
        <div key={index}>
          <Objects type={object.shape} size={object.size} />
          <ObjectEditor object={object} onEdit={(newObject) => handleEditObject(index, newObject)} />
        </div>
      ))}
    </div>
  );
}

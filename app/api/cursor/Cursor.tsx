import React, { useState, useEffect } from 'react';

const ShadowCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        pointerEvents: 'none',
        borderRadius: '50%',
        boxShadow: '0 0 20px 20px rgba(195, 0, 0, 0.7)',
        transform: 'translate(4px, 5px)',
        zIndex: 9999,
      }}
    />
  );
};

export default ShadowCursor;
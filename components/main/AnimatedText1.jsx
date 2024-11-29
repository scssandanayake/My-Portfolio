"use client";

import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const AnimatedText1 = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1300); // 2 second delay //or 2000 for double animation

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return <span className="text-accent">|</span>;

  return (
    <TypeAnimation
      sequence={[
        'Hello.',
        3000,
        'Hola.',
        3000,
        'Bonjour.',
        3000,
        'Namaste.',
        3000,
      ]}
      wrapper="span"
      speed={20}
      className="h1 mb-6"
      repeat={Infinity}
    />
  );
};

export default AnimatedText1;
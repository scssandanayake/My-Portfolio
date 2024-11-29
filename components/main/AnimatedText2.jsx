"use client";

import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const AnimatedText2 = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1300); // 2 second delay //or 2000 for double animation

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return <span className="text-accent">|</span>;

  return (
    <TypeAnimation  //greeting types hello,hola,konichiwa...
      sequence={[
        'Chamara Sandanayake.',
        3000,
        'DS Undergrad.',
        3000,
      ]}
      wrapper="span"
      speed={20}
      className="text-accent"
      repeat={Infinity}
    />
  );
};

export default AnimatedText2;
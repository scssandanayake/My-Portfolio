"use client";
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return <span className="text-accent">|</span>;

  return (
    <TypeAnimation
      sequence={[
        'Chamara Sandanayake.',
        3000,
        'DS Undergraduate.',
        3000,
      ]}
      wrapper="span"
      speed={20}
      className="text-accent"
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
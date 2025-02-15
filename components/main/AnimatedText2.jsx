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
        'Chamara Srinath.',
        4000,
        //'An Undergraduate.',
        //4000,
      ]}
      wrapper="span"
      speed={15}
      className="text-accent"
      repeat={Infinity}
    />
  );
};

export default AnimatedText2;
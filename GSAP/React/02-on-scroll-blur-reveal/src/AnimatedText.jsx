import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('.letter');

    // Apply animation to each letter individually
    letters.forEach((letter, index) => {
      gsap.fromTo(
        letter,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: letter,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="text-container">
      <p ref={textRef}>
        {text.split('').map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default AnimatedText;

import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  // Array of demo banner images (replace with your images in /public folder)
  const images = [
    '/header_img.png',
    '/header_img2.png',
    '/header_img3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
    </div>
  );
};

export default Header;

// src/components/Clients/LogoSlider.tsx
"use client"; // Ensure this is a Client Component

import React, { useState } from 'react';
import { Client } from '@/types/client';

interface LogoSliderProps {
  clients?: Client[]; // Make clients optional
}

const LogoSlider: React.FC<LogoSliderProps> = ({ clients = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
  };



  return (
    <div style={styles.container}>
      <button style={styles.buttonPrev} onClick={goToPrevious}>
        &#10094;
      </button>
      <div style={styles.carouselContainer}>
        <div
          style={{
            ...styles.carouselSlides,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {clients.map((client) => (
            <div key={client.id} style={styles.carouselSlide}>
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.slideLink}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  style={styles.image}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <button style={styles.buttonNext} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

// Inline styles for the carousel
const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '1200px', // Adjust as needed
    margin: '0 auto', // Center the slider
  },
  carouselContainer: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
  },
  carouselSlides: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    width: '100%',
  },
  carouselSlide: {
    minWidth: '100%',
    boxSizing: 'border-box',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    opacity: '0.7',
    transition: 'opacity 0.3s ease-in-out',
  },
  slideLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    textDecoration: 'none',
    color: 'inherit',
  },
  buttonPrev: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 10,
  },
  buttonNext: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 10,
  },
};

export default LogoSlider;

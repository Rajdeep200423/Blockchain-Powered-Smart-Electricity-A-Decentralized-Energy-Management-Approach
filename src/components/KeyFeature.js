import React from 'react';
import styled, { keyframes } from 'styled-components';
import image1 from '../assets/coin.png';
import image2 from '../assets/SmartMeter.png';

// Pulsing animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;  // Changed to row for side-by-side layout
  gap: 5rem;
  background: transparent;
  padding: 2rem;
  justify-content: center; // Center the items horizontally
  flex-wrap: wrap; // Allow wrapping on small screens
  padding-top: 100px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 
              0 0 20px rgba(255, 255, 255, 0.6);
  padding: 1.5rem;
  transition: all 0.3s ease;
  width: calc(40% - 1rem); // Each item takes half width minus gap
  min-width: 300px; // Minimum width before wrapping

  &:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.9), 
                0 0 25px rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 900px) {
    width: 100%; // Full width on smaller screens
    min-width: unset;
  }
`;

const ItemImage = styled.div`
  flex: 1;
  padding-right: 1.5rem;
  
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
  }

  &.pulse {
    img {
      animation: ${pulse} 2s infinite ease-in-out;
    }
  }
`;

const ItemText = styled.div`
  flex: 1;
  padding-left: 1.5rem;
  color: white;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const KeyFeature = () => {
  return (
    <Container>
      <Item>
        <ItemImage className="pulse">
          <img src={image1} alt="Feature 1" />
        </ItemImage>
        <ItemText>
          <h3>Electro Coin</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ItemText>
      </Item>
      
      <Item>
        <ItemImage>
          <img src={image2} alt="Feature 2" />
        </ItemImage>
        <ItemText>
          <h3>Smart Meter</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </ItemText>
      </Item>
    </Container>
  );
};

export default KeyFeature;
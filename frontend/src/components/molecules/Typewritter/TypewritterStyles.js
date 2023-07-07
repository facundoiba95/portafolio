import styled, { keyframes } from 'styled-components';


const typingAnimation = keyframes`
  from {
    width: 0;
  }
`;

const blinkAnimation = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const TypewriterContainer = styled.div`
  font-family: 'Fira Code';
  position: absolute;
  top: 20px;
  left: 60px;
`;

export const TypewriterLine = styled.p`
  width: 100%;
  display: block;
  white-space: nowrap;
  font-size: 2.4rem;
  border-right: 4px solid white;
  overflow: hidden;
  padding-right: 10px;
  animation: ${typingAnimation} 2s steps(30), ${blinkAnimation} 0.5s infinite step-end alternate;
`;



import React, { useEffect, useState, useRef } from 'react';
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

const TypewriterContainer = styled.div`
  font-family: 'Fira Code';
  position: absolute;
  top: 45px;
  left: 60px;
  width:auto;
  display:flex;
  flex-direction:column;
  gap:20px;

  @media (max-width: 768px) {
    align-items:flex-start;
  }
`;

const TypewriterLine = styled.p`
  width: 100%;
  display: block;
  white-space: nowrap;
  font-size: 1.5rem;
  overflow: hidden;
  line-height:18px;
  padding-right: ${props => (props.isLastLine ? '14px' : '10px')};
  border-right: ${props => (props.isLastLine ? '4px solid white' : 'none')};
  animation: ${typingAnimation} 0.4s steps(30), ${blinkAnimation} 0.2s infinite step-end alternate;
  color: #2EDF37;
  
  @media (max-width: 768px) {
    display:flex;
  }
`;

const Typewriter = ({ lines }) => {
  const containerRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const lineElements = container.querySelectorAll('p');

    lineElements.forEach((line, index) => {
      const text = line.textContent;
      line.textContent = '';

      Array.from(text).forEach((char, charIndex) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        // charSpan.style.animationDelay = `${index * 0}s, ${charIndex * 0}ms`;
        line.appendChild(charSpan);
      });
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleLines(prevLines => prevLines + 1);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [visibleLines]);

  return (
    <TypewriterContainer ref={containerRef}>
      {lines.slice(0, visibleLines).map((line, index) => (
         <TypewriterLine key={index} isLastLine={index === visibleLines - 1}>
          {`"${line}" ,`}
        </TypewriterLine>
      ))}
      <p>{`]`}</p>
    </TypewriterContainer>
  );
};

export default Typewriter;
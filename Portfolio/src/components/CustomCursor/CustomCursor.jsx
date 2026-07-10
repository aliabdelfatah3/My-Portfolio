import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CustomCursor = ({ mousePos }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const { x, y } = mousePos;

  return (
    <>
      {/* Small dot */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: x,
          top: y,
          width: isHovering ? '0px' : '8px',
          height: isHovering ? '0px' : '8px',
          marginLeft: isHovering ? '0px' : '-4px',
          marginTop: isHovering ? '0px' : '-4px',
          borderRadius: '50%',
          backgroundColor: '#19B8F2',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Glowing ring */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: x,
          top: y,
          width: isHovering ? '50px' : '36px',
          height: isHovering ? '50px' : '36px',
          marginLeft: isHovering ? '-25px' : '-18px',
          marginTop: isHovering ? '-25px' : '-18px',
          borderRadius: '50%',
          border: `2px solid ${isHovering ? 'rgba(39, 213, 196, 0.8)' : 'rgba(25, 184, 242, 0.5)'}`,
          backgroundColor: isHovering ? 'rgba(39, 213, 196, 0.08)' : 'transparent',
          boxShadow: isHovering
            ? '0 0 20px rgba(39, 213, 196, 0.4)'
            : '0 0 10px rgba(25, 184, 242, 0.2)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
        }}
      />
    </>
  );
};

CustomCursor.propTypes = {
  mousePos: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default CustomCursor;

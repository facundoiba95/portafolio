import * as React from "react";
import { motion } from "framer-motion";
import ('./SectionFramerMotionStyles.css')
import { useInView } from "react-intersection-observer";
import { NavbarHeaderItemStyles } from "../NavbarHeader/NavbarHeaderStyles";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 20,
    opacity: 1
  }
};

const SectionFramerMotion = ({array}) => {
  const navigator = useNavigate();
  const [ ref, inView] = useInView();

  const itemsHeader = [
    { name: 'Home', handleFunction: () => navigator('/') },
    { name: 'Proyectos', handleFunction: () => navigator('/projects/allProjects') },
    { name: 'About Me', handleFunction: () => navigator('/aboutme') },
    { name: 'Contacto', handleFunction: () => navigator('/contact') }
  ];
  
  return (
    <motion.ul
    ref={ref}
    className="container"
    variants={container}
    initial="hidden"
    animate={inView ? 'visible' :'hidden'}
  >
    {itemsHeader.map((index) => (
      <motion.li key={index.name} className="item" variants={item} onClick={index.handleFunction}>
        {index.name}
      </motion.li>
    ))}
  </motion.ul>
  )
};

export default SectionFramerMotion;
import React, { useState,useEffect } from 'react';

const Menu = (props) => {
  
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${props.isOpen===true && width>=1400 ? "openMenu completeMenu":"delay-menu completeMenu"} `}>
          <nav>
      
              <a  onClick={()=>{props.handleClick()}} className={`${props.isOpen===true ? "linkSlide linkSlide1":"linkSlide4"} link `} href="#sec1">Who am I?</a>
              <a  onClick={()=>{props.handleClick()}}  className={`${props.isOpen===true ? "linkSlide linkSlide2":"linkSlide3"} link`} href="#sec2">Skills</a>
              <a  onClick={()=>{props.handleClick()}}  className={`${props.isOpen===true ? "linkSlide linkSlide3":"linkSlide2"} link`} href="#sec3">Projects</a>
              <a  onClick={()=>{props.handleClick()}}  className={`${props.isOpen===true ? "linkSlide linkSlide4":"linkSlide1"} link`} href="#sec4">Contact</a>
          </nav>
          <div onClick={()=>{props.handleClick()}} className='closeButton'>Close</div>
  </div>
  );
};

export default Menu;

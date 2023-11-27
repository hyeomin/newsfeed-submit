import React, { useEffect, useState } from "react";
import styled from "styled-components";

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const TopScrollButton = styled.button`
    cursor: pointer;
    position: fixed;
    width: 50px;
    height: 50px;
    right: 60px;
    bottom: 50px;
    border-radius: 50px;
    background-color: #a64b2a;
    font-weight: 600;
    color: white;
    border: 0px;
  `;
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div className="scroll__container">
        <TopScrollButton id="top" onClick={scrollToTop} type="button">
          Top
        </TopScrollButton>
      </div>
    )
  );
}

export default TopButton;

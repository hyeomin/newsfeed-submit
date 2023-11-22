import React, { useState } from "react";
import styled from "styled-components";
import defaultUser from "../assets/no-image.gif";

function Photos() {
  const images = [
    "https://i.namu.wiki/i/Ta8cG1UY_YJYnskdBOZWHxlGbb7ouhCkOPmfh3nF4WkGRmAvTd-U4Ilzu_oJhIaYcfIm6-IKH1wLL463WoWdwg.webp",
    "https://cdn.imweb.me/thumbnail/20220705/15c3cd346055a.jpg",
    "https://cdn.paris.spl.li/wp-content/uploads/574786-%EB%B0%A4%EC%86%8C%EB%B3%B4%EB%A3%A8-%EB%A7%98%EB%AA%A8%EC%8A%A4_%EC%8D%B8%EB%84%A4%EC%9D%BC3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  return (
    <>
      <Overflow>
        <SlideContainer>
          <Slide>
            <img src={images[currentIndex] ?? defaultUser} alt="기본이미지" />
          </Slide>
        </SlideContainer>
        <PrevBtn
          onClick={() =>
            setCurrentIndex(
              currentIndex > 0 ? currentIndex - 1 : images.length - 1,
            )
          }
        >
          prev
        </PrevBtn>
        <NextBtn
          onClick={() =>
            setCurrentIndex(
              currentIndex < images.length - 1 ? currentIndex + 1 : 0,
            )
          }
        >
          next
        </NextBtn>
      </Overflow>
    </>
  );
}

export default Photos;

const Overflow = styled.div`
  overflow: hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  transform: translate(-0vw);
  transition: all 2s;
`;
const Slide = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PrevBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 10px;
`;
const NextBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
`;

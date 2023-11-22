import React from "react";
import styled from "styled-components";
import mainImg from "../assets/breadMain.jpg";

const HomeImg = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
`;

const ContentsInput = styled.input`
  display: flex;
  margin-left: 100px;
  width: 300px;
  height: 100px;
  justify-content: center;
  text-align: start;
`;

function Home() {
  return (
    <div>
      <nav>
        <HomeImg src={mainImg}></HomeImg>
      </nav>
      <div>
        <button>파일첨부</button>
        <ContentsInput
          type="text"
          placeholder="오늘의 빵을 공유해주세요!"
        ></ContentsInput>
      </div>
    </div>
  );
}

export default Home;

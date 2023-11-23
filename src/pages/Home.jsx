import React, { useState } from "react";
import { default as styled } from "styled-components";
import mainImg from "../assets/breadMain.jpg";
import { GlobalStyles } from "../components/NightMode";

const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeImg = styled.img`
  display: flex;
  width: 200px;
  height: 80px;
  margin: 20px;
`;

const WrappingBtns = styled.div`
  display: flex;
`;

const Btns = styled.button`
  margin: 20px;
  flex: 0 0 90%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  border: 0px;
`;

const PostBreadBtn = styled.button`
  background-color: transparent;
  border: 0px;
  width: 150px;
  height: 30px;
  text-align: center;
  font-size: 20px;
`;
const LoginBtn = styled.button`
  background-color: transparent;
  border: 0px;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 20px;
`;
const ModeBtn = styled.button`
  background-color: transparent;
  border: 0px;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 20px;
`;

function Home() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
      <GlobalStyles theme={theme} />
      <div>
        <HomeHeader>
          <HomeImg src={mainImg}></HomeImg>
          <WrappingBtns>
            <Btns>
              <PostBreadBtn>빵 소개하러 가기</PostBreadBtn>
              <LoginBtn>로그인</LoginBtn>
              <ModeBtn onClick={themeToggler}>
                {theme === "light" ? "🌚" : "🌞"}
              </ModeBtn>
            </Btns>
          </WrappingBtns>
        </HomeHeader>
        <li>
          <ul>카드</ul>
        </li>
      </div>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as styled } from "styled-components";
import { GlobalStyles } from "../components/NightMode";

const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeImg = styled.button`
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
  width: 170px;
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
  const navigate = useNavigate();
  const navigateWriting = () => {
    navigate("/write");
  };
  const navigateLogin = () => {
    navigate("/register");
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
      <GlobalStyles theme={theme} />
      <div>
        <HomeHeader>
          <HomeImg onClick={navigateHome}></HomeImg>
          <WrappingBtns>
            <Btns>
              <PostBreadBtn onClick={navigateWriting}>
                빵 소개하러 가기
              </PostBreadBtn>
              <LoginBtn onClick={navigateLogin}>로그인</LoginBtn>
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import breadMain from "../assets/breadMain.jpg";

export default function Header({ users }) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const navigateWriting = () => {
    navigate("/write");
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateHome = () => {
    navigate("/");
  };
  const MovetoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HomeHeader>
        <ImgButton onClick={navigateHome}>
          <ButtonImg src={breadMain} />
        </ImgButton>
        <WrappingBtns>
          <Btns>
            <SearchBtn>🔍</SearchBtn>
            <PostBreadBtn onClick={navigateWriting}>
              빵 소개하러 가기
            </PostBreadBtn>
            {users.isdone === false ? (
              <>
                <LoginBtn onClick={navigateLogin}>로그인</LoginBtn>
                <LoginBtn onClick={() => navigate("/register")}>
                  회원가입
                </LoginBtn>
              </>
            ) : (
              <>
                <h1>{users.nickname}님 환영합니다.</h1>
                <LogOutBtn onClick={() => navigate("/register")}>
                  로그아웃
                </LogOutBtn>
              </>
            )}
            <ModeBtn onClick={themeToggler}>
              {theme === "light" ? "🌚" : "🌞"}
            </ModeBtn>
          </Btns>
        </WrappingBtns>
      </HomeHeader>
      {/* <BtnWrapper>
          {users.isdone === false ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button onClick={() => navigate("/login")}>로그인</Button>{" "}
              <Button onClick={() => navigate("/register")}>회원가입</Button>{" "}
            </div>
          ) : (
            <>
              <h1>{users.nickname}님 환영합니다.</h1>
              <div>
                <Button onClick={() => navigate("/register")}>로그아웃</Button>{" "}
              </div>
            </>
          )}
        </BtnWrapper> */}
    </>
  );
}

// const HeadWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   height: 100px;
// `;

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   font-size: large;
//   border-radius: 5px;
//   margin-right: 50px;
//   width: 100px;
// `;

// const BtnWrapper = styled.div`
//   background-color: yellow;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100px;
//   width: 200px;
// `;

const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonImg = styled.img`
  display: flex;
  width: 200px;
  height: 80px;
  margin: 10px;
  cursor: pointer;
`;

const ImgButton = styled.button`
  display: flex;
  width: 200px;
  height: 80px;
  margin: 20px;
  background-color: transparent;
  border: 0px;
`;

const WrappingBtns = styled.div`
  display: flex;
`;

const Btns = styled.div`
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
  background-color: #ffebc1;
  border: 0px;
  border-radius: 20px;
  width: 170px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;
const LoginBtn = styled.button`
  background-color: #ffebc1;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;

const LogOutBtn = styled.button`
  background-color: #ffebc1;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;

const ModeBtn = styled.button`
  background-color: transparent;
  border: 0px;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;

const SearchBtn = styled.button`
  background-color: #ffebc1;
  border: 0px;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;
const TopButton = styled.button`
  cursor: pointer;
  position: fixed;
  width: 40px;
  height: 40px;
`;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as styled } from "styled-components";
import breadMain from "../assets/breadMain.jpg";
import HomePageCards from "../components/HomePageCards";
import { GlobalStyles } from "../components/NightMode";
import Sorting from "../components/Sorting";

const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MypageBtn = styled.button`
  background-color: #ffebc1;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
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

const SearchInput = styled.input`
  display: flex;
  width: auto;
  height: 35px;
  border-radius: 30px;
  padding: 10px;
`;

function Home({ users, setUsers }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const navigate = useNavigate();
  const navigateWriting = () => {
    if (users.isdone) {
      navigate("/write");
    } else {
      alert("로그인이 필요합니다!");
    }
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
    <div>
      <GlobalStyles theme={theme} />
      <div>
        <HomeHeader>
          <ImgButton onClick={navigateHome}>
            <ButtonImg src={breadMain} />
          </ImgButton>
          <WrappingBtns>
            <Btns>
              <SearchInput />
              <SearchBtn>🔍</SearchBtn>
              <PostBreadBtn onClick={navigateWriting}>
                빵 소개하러 가기
              </PostBreadBtn>
              {users?.isdone === false ? (
                <LoginBtn onClick={navigateLogin}>로그인</LoginBtn>
              ) : (
                <>
                  <MypageBtn onClick={() => navigate("/mypage")}>
                    {users.nickname}의 마이페이지
                  </MypageBtn>
                  <LogOutBtn onClick={() => navigate("/register")}>
                    로그아웃
                  </LogOutBtn>
                </>
              )}
              <LoginBtn onClick={() => navigate("/register")}>
                회원가입
              </LoginBtn>
              <ModeBtn onClick={themeToggler}>
                {theme === "light" ? "🌚" : "🌞"}
              </ModeBtn>
            </Btns>
          </WrappingBtns>
        </HomeHeader>
        {/* //여기까지 헤더부분 */}
        <Sorting />
        <HomePageCards />
      </div>
    </div>
  );
}

export default Home;

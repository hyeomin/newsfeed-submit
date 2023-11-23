import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultUser from "../assets/no-image.gif";
import Post from "../components/Post";

function Detail() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  const MovetoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <ButtonHome onClick={navigateHome}>Home</ButtonHome>
        <Header>
          <ProfileImg>
            <img src={null ?? defaultUser} alt="프로필이미지" />
          </ProfileImg>
          <Title>여기에는 제목이 들어갈 겁니다 맛있는 빠아아아앙!!</Title>
          <Date>2023/11/22</Date>
        </Header>

        <Post />
      </Container>
      <Button onClick={MovetoTop}>Top</Button>
    </>
  );
}

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1200px;
  height: 70px;
  background-color: lightgray;
  text-align: center;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: brown;
  align-items: center;
`;

const Date = styled.p`
  font-size: 15px;
  color: blue;
  margin-left: 500px;
`;

const Button = styled.button`
  cursor: pointer;
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

const ButtonHome = styled.button`
  cursor: pointer;
  position: fixed;
  left: 40px;
  top: 40px;
`;

const ProfileImg = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

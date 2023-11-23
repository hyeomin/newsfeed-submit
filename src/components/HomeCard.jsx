import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Bread from "../assets/Bread1.jpeg";

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled.button`
  width: 200px;
  height: 100px;
  overflow: hidden;
  border: 0px;
  background-color: transparent;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const UserNameAndTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const SelectedBread = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  background-color: yellow;
`;

export default function HomeCard() {
  const navigate = useNavigate();
  const navigateDetail = () => {
    navigate("/detail");
  };
  return (
    <CardWrapper>
      <Thumbnail onClick={navigateDetail}>
        <img src={Bread} />
      </Thumbnail>
      <UserInfo>
        <UserNameAndTime>
          <p>이름</p>
          <time>날짜</time>
        </UserNameAndTime>
        <SelectedBread>
          <p>빵종류</p>
          <p>좋아요 수</p>
        </SelectedBread>
      </UserInfo>
      <Content>내용</Content>
    </CardWrapper>
  );
}

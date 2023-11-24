import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fakeData from "../data/fakeData";

const Container = styled.section`
  display: grid;
`;

const CardsWrapper = styled.ul`
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px;
  border-radius: 12px;
`;

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

export default function HomePageCards() {
  const cardData = fakeData;
  const navigate = useNavigate();
  const navigateDetail = () => {
    navigate("/detail");
  };

  return (
    <Container>
      <CardsWrapper>
        {cardData.map((item) => {
          return (
            <CardWrapper>
              <Thumbnail onClick={navigateDetail}>
                <img src={item.postImage} />
              </Thumbnail>
              <UserInfo>
                <UserNameAndTime>
                  <p>{item.userName}</p>
                  <time>날짜</time>
                </UserNameAndTime>
                <SelectedBread>
                  <p>{item.breadType}</p>
                  <p>🍞17</p>
                </SelectedBread>
              </UserInfo>
              <Content>{item.postContent}</Content>
            </CardWrapper>
          );
        })}
      </CardsWrapper>
    </Container>
  );
}

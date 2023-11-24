import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  width: 200px;
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
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const UserNameAndTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: aqua;
  font-size: 10px;
`;

const SelectedBread = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: blue;
  width: 200px;
`;

const Content = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  background-color: yellow;
`;

export default function HomePageCards() {
  const { posts } = useSelector((state) => state.postsReducer);
  const navigate = useNavigate();
  const navigateDetail = () => {
    navigate(`/detail/${posts.id}`);
  };
  const dispatch = useDispatch();

  return (
    <Container>
      <CardsWrapper>
        {posts.map((item) => {
          return (
            <CardWrapper>
              <Thumbnail onClick={navigateDetail}>
                <img src={item.postImage} />
              </Thumbnail>
              <UserInfo>
                <UserNameAndTime>
                  <p>{item.id}</p>
                  <time>{item.updatedAt}</time>
                </UserNameAndTime>
                <SelectedBread>
                  <p>{item.breadType}</p>
                  <p>🍞17</p>
                </SelectedBread>
              </UserInfo>
              <Content>{item.postTitle}</Content>
            </CardWrapper>
          );
        })}
      </CardsWrapper>
    </Container>
  );
}

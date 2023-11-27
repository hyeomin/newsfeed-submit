import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchPosts } from "../redux/modules/postsReducer";
import TopButton from "./TopButton";

const Container = styled.section`
  display: grid;
`;

const CardsWrapper = styled.ul`
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 100px;
  border-radius: 12px;
`;

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffebc1;
  border-radius: 10px;
  width: 220px;
  height: 320px;
`;

const Thumbnail = styled.button`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 0px;
  background-color: transparent;
  border-radius: 20px;
  margin: 10px;
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
  font-size: 10px;
`;

const SelectedBread = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
  margin: 10px;
`;

export default function HomePageCards() {
  // const cardData = fakeData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const navigateDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container>
      <CardsWrapper>
        {posts
          .map((item) => {
            return (
              <CardWrapper
                onClick={() => {
                  navigateDetail(item.id);
                }}
              >
                <Thumbnail>
                  <img src={item.postimage} />
                </Thumbnail>
                <UserInfo>
                  <UserNameAndTime>
                    <p>{item.nickname}</p>
                    <time>{item.updatedAt.substring(0, 10)}</time>
                  </UserNameAndTime>
                  <SelectedBread>
                    <p>{item.breadType}</p>
                    <p>🍞17</p>
                  </SelectedBread>
                </UserInfo>
                <Content>{item.postTitle}</Content>
              </CardWrapper>
            );
          })
          .sort(function (a, b) {
            return a - b;
          })}
      </CardsWrapper>
      <TopButton />
    </Container>
  );
}

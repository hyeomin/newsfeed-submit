import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import defaultUser from "../assets/no-image.gif";
import { deletePost, fetchPosts } from "../redux/modules/postsReducer";

function Post() {
  const images = [
    "https://i.namu.wiki/i/Ta8cG1UY_YJYnskdBOZWHxlGbb7ouhCkOPmfh3nF4WkGRmAvTd-U4Ilzu_oJhIaYcfIm6-IKH1wLL463WoWdwg.webp",
    "https://cdn.imweb.me/thumbnail/20220705/15c3cd346055a.jpg",
    "https://cdn.paris.spl.li/wp-content/uploads/574786-%EB%B0%A4%EC%86%8C%EB%B3%B4%EB%A3%A8-%EB%A7%98%EB%AA%A8%EC%8A%A4_%EC%8D%B8%EB%84%A4%EC%9D%BC3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { posts } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const onMoveToEditHandler = (id) => {
    navigate(`/write/${id}`, { state: { post, isEditing: true } });
  };

  const onDeleteHandler = (id) => {
    const confirmation = window.confirm("게시물을 삭제하시겠습니까?");
    if (confirmation) {
      dispatch(deletePost(id));
    }
  };

  const post = posts.find((item) => item.id === params.id);

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth returns 0-11
    const day = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours > 13 ? "오후 " + (hours - 12) : "오전" + hours;

    return `${year}년 ${month}월 ${day}일 ${ampm}시 ${minutes}분`;
  };

  return (
    <Container>
      <PostContainer className="post-container">
        <ImgContainer className="image-section">
          <img src={images[currentIndex] ?? defaultUser} alt="기본이미지" />
          <ButtonContainer className="button-container">
            <button
              onClick={() => {
                setCurrentIndex(
                  currentIndex > 0 ? currentIndex - 1 : images.length - 1,
                );
                alert("clicked!");
              }}
            >
              prev
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex < images.length - 1 ? currentIndex + 1 : 0,
                )
              }
            >
              next
            </button>
          </ButtonContainer>
        </ImgContainer>
        <TextContainer className="text-section">
          <h2>{post.postTitle}</h2>
          <p>{formattedDate(post.createdAt)}</p>
          <p>소개할 빵: {post.breadType}</p>
          <p>{post.userName}</p>
          <Content className="post-content">{post.postContent}</Content>
        </TextContainer>
      </PostContainer>

      <Footer className="footer">
        <button onClick={() => navigate(`/`)}>홈으로 가기</button>
        <UpdateButtonWrapper>
          <button onClick={() => onMoveToEditHandler(post.id)}>수정하기</button>
          <button onClick={() => onDeleteHandler(post.id)}>삭제하기</button>
        </UpdateButtonWrapper>
      </Footer>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  column-gap: 20px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100%;

  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 10px;

  position: absolute;

  & button {
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 5px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 10px;

  width: 500px;
  padding: 20px;

  & h2 {
    font-size: 30px;
    font-weight: 800px;

    padding: 10px 0;
  }

  & p {
    display: flex;
    flex-direction: column;

    row-gap: 10px;

    font-size: 18px;
  }
`;

const Content = styled.div`
  height: 300px;

  background-color: #e7e6e6;
  border-radius: 20px;
  padding: 20px;

  font-size: 18px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  & button {
    font-size: 15px;

    padding: 10px 20px;

    border: 1px solid lightgray;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
const UpdateButtonWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

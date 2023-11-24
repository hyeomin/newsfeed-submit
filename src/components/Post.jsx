import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import defaultUser from "../assets/no-image.gif";
import { fetchPosts } from "../redux/modules/postsReducer";

function Post() {
  const images = [
    "https://i.namu.wiki/i/Ta8cG1UY_YJYnskdBOZWHxlGbb7ouhCkOPmfh3nF4WkGRmAvTd-U4Ilzu_oJhIaYcfIm6-IKH1wLL463WoWdwg.webp",
    "https://cdn.imweb.me/thumbnail/20220705/15c3cd346055a.jpg",
    "https://cdn.paris.spl.li/wp-content/uploads/574786-%EB%B0%A4%EC%86%8C%EB%B3%B4%EB%A3%A8-%EB%A7%98%EB%AA%A8%EC%8A%A4_%EC%8D%B8%EB%84%A4%EC%9D%BC3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { posts } = useSelector((state) => state.postsReducer);

  console.log("params --> ", params);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const onMoveToEditHandler = (id) => {
    navigate(`/write/${id}`);
  };

  const post = posts.find((item) => item.id.toString() === params.id);

  return (
    <>
      <OutContainer>
        <PrevBtn
          onClick={() => {
            setCurrentIndex(
              currentIndex > 0 ? currentIndex - 1 : images.length - 1,
            );
            alert("clicked!");
          }}
        >
          prev
        </PrevBtn>
        <Container>
          <Overflow>
            <SlideContainer>
              <Slide>
                <img
                  src={images[currentIndex] ?? defaultUser}
                  alt="기본이미지"
                />
              </Slide>
            </SlideContainer>
          </Overflow>
          <Review>작성자가 쓴 텍스트 넣을 거임</Review>
          <p>{post.postTitle}</p>
          <button onClick={() => onMoveToEditHandler(post.id)}>수정하기</button>
        </Container>
        <NextBtn
          onClick={() =>
            setCurrentIndex(
              currentIndex < images.length - 1 ? currentIndex + 1 : 0,
            )
          }
        >
          next
        </NextBtn>
      </OutContainer>
    </>
  );
}

export default Post;

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
  height: 500px;
  width: 1200px;
  margin: 20px;
`;

const Review = styled.main`
  flex-direction: row;
  color: black;
  background-color: yellow;
`;

const Overflow = styled.div`
  overflow: hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  /* transform: translate(-0vw);
  transition: all 2s; */
`;
const Slide = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PrevBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 50px;
`;
const NextBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 50px;
`;

const OutContainer = styled.div`
  display: flex;
  align-items: center;
`;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FileUpload from "../components/FileUpload";
import {
  addPost,
  deletePost,
  fetchPosts,
  updatePost,
} from "../redux/modules/postsReducer";

function Write({ users }) {
  const breadList = [
    { id: 0, name: "소금빵" },
    { id: 1, name: "크로와상" },
    { id: 2, name: "식빵" },
    { id: 3, name: "케이크" },
    { id: 4, name: "베이글" },
    { id: 5, name: "타르트" },
    { id: 6, name: "카스테라" },
  ];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedBread, setSelectedBread] = useState(breadList[0].name);

  const location = useLocation();
  const { post, isEditing } = location.state || {
    post: null,
    isEditing: false,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  const { posts } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (isEditing && post) {
      setTitle(post.postTitle);
      setContent(post.postContent);
      setSelectedBread(post.breadType);
      // Any other state you need to set
    }
  }, [isEditing, post]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    } else if (name === "selectedBread") {
      setSelectedBread(value);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.length === 0) {
      alert("제목을 입력해주세요");
    } else if (content.length === 0) {
      alert("내용을 입력해주세요");
    } else {
      window.confirm("제출하시겠습니까?");
    }
    const timestamp = new Date().toISOString();

    const newPost = {
      postTitle: title,
      postContent: content,
      userID: users.id,
      userName: users.nickname,
      breadType: selectedBread,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    console.log("new Post -->", newPost);

    dispatch(addPost(newPost));

    navigate(`/detail/${param.id}`);
  };

  const onSubmitUpdateHandler = (event) => {
    dispatch(updatePost({ id: post.id, title, content, selectedBread }));
  };

  const onDeleteHandler = (id) => {
    const confirmation = window.confirm("게시물을 삭제하시겠습니까?");
    if (confirmation) {
      dispatch(deletePost(id));
    }
  };

  return (
    <Container>
      {/* <Header /> */}
      <SelectContainer className="select-bread">
        <label>내가 소개하고 싶은 빵은 </label>
        <select
          name="selectedBread"
          value={selectedBread}
          onChange={onChangeHandler}
        >
          {breadList.map((bread) => {
            return (
              <option key={bread.id} value={bread.name}>
                {bread.name}
              </option>
            );
          })}
        </select>
      </SelectContainer>
      <TitleInput
        name="title"
        value={title}
        onChange={onChangeHandler}
        placeholder="제목을 입력하세요"
      />

      <TextArea
        name="content"
        value={content}
        onChange={onChangeHandler}
        placeholder="내용을 입력하세요"
      />
      <FileUpload />
      <Footer>
        <button onClick={() => navigate("/home")}>홈으로 돌아가기</button>
        {isEditing && post ? (
          <button onClick={onSubmitUpdateHandler}>수정 완료</button>
        ) : (
          <button onClick={onSubmitHandler}>완료</button>
        )}
      </Footer>
    </Container>
  );
}

export default Write;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;

  margin: 200px auto;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 20px;
  font-size: 20px;

  & select {
    background-color: #eaeaea;
    font-size: 18px;
    border-radius: 20px;
    padding: 5px 20px;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 30px 20px;
  margin: 20px 0;

  font-size: 20px;

  background-color: #eaeaea;
  border: 1px solid gray;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  min-height: 300px;
  width: 100%;

  padding: 30px 20px;
  margin: 20px 0;
  font-size: 20px;

  background-color: #eaeaea;
  border: 1px solid gray;
  border-radius: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px 20px;

  & button {
    font-size: 18px;
    height: 40px;
    padding: 0 20px;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
  }
`;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import {
  Container,
  Footer,
  Header,
  TextArea,
  TitleInput,
} from "../components/WriteStyledComponents";
import { addPost, deletePost, fetchPosts } from "../redux/modules/postsReducer";

function Write() {
  const breadList = [
    { id: 0, name: "소금빵" },
    { id: 1, name: "크로와상" },
    { id: 2, name: "식빵" },
    { id: 3, name: "케이크" },
    { id: 4, name: "베이글" },
    { id: 5, name: "타르트" },
    { id: 6, name: "카스테라" },
  ];

  // const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedBread, setSelectedBread] = useState(breadList[0].name);
  const [editingPost, setEditingPost] = useState(null);

  const navigate = useNavigate();
  //   const param = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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

  const onSubmitHandler = async () => {
    if (title.length === 0) {
      alert("제목을 입력해주세요");
    } else if (content.length === 0) {
      alert("내용을 입력해주세요");
    } else {
      alert("제출하시겠습니까?");
    }
    const timestamp = new Date().toISOString();

    const newPost = {
      postTitle: title,
      postContent: content,
      //   userID,
      //   userName,
      breadType: selectedBread,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    dispatch(addPost(newPost));

    // navigate("/");
  };

  const onActivateEditHandler = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPost(post);
  };

  const onDeleteHandler = (id) => {
    const confirmation = window.confirm("게시물을 삭제하시겠습니까?");
    if (confirmation) {
      dispatch(deletePost(id));
    }
  };

  return (
    <Container>
      <Header>빵 리뷰 남기기</Header>
      <TitleInput
        name="title"
        value={title}
        onChange={onChangeHandler}
        placeholder="제목을 입력하세요"
      />
      <div>
        <label>소개하는 빵을 골라주세요: </label>
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
      </div>
      <TextArea
        name="content"
        value={content}
        onChange={onChangeHandler}
        placeholder="내용을 입력하세요"
      />

      <FileUpload />
      <Footer>
        <button onClick={() => navigate("/home")}>홈으로 돌아가기</button>
        <button onClick={onSubmitHandler}>
          {editingPost ? "수정 완료" : "완료"}
        </button>
      </Footer>
      <div>
        <label>----여기는 test----</label>
        {posts.map((item) => {
          return (
            <div key={item.id}>
              <label>{item.breadType}</label>
              <span>{item.postTitle}</span>
              <button onClick={() => onActivateEditHandler(item)}>
                수정하기
              </button>
              <button onClick={() => onDeleteHandler(item.id)}>삭제하기</button>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Write;

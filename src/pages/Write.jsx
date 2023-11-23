import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import thumbnail from "../assets/noun-thumbnail-3022241.png";
import {
  Container,
  Footer,
  Header,
  TextArea,
  ThumbnailContainer,
  ThumbnailImgWrapper,
  TitleInput,
} from "../components/WriteStyledComponents";
import { db } from "../firebase";

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

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedBread, setSelectedBread] = useState(breadList[0].name);

  const [editingPost, setEditingPost] = useState(null);

  //   const navigate = useNavigate();
  //   const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q);
      const initialPosts = [];

      querySnapshot.forEach((doc) => {
        initialPosts.push({ id: doc.id, ...doc.data() });
      });
      setPosts(initialPosts);
    };
    fetchData();
  }, []);

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
    const newPost = {
      postTitle: title,
      postContent: content,
      //   userID,
      //   userName,
      breadType: selectedBread,
      createdAt: new Date().toISOString(),
      //   updatedAt,
    };

    try {
      const collectionRef = collection(db, "posts");
      const docRef = await addDoc(collectionRef, newPost);
      const newPostWithID = { ...newPost, postID: docRef.id };
      setPosts([...posts, newPostWithID]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // navigate("/");
  };

  const onActivateEditHandler = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPost(post);
  };

  const onDeleteHandler = async (post) => {
    window.confirm("게시물을 삭제하시겠습니까?");
    const postRef = doc(db, "posts", post.postID);
    await deleteDoc(postRef);

    const updatedPostList = posts.filter((item) => {
      return item.postID !== post.postID;
    });
    setPosts(updatedPostList);
  };

  return (
    <Container>
      <Header>빵 리뷰 남기기</Header>
      <div>
        <TitleInput
          name="title"
          value={title}
          onChange={onChangeHandler}
          placeholder="제목을 입력하세요"
        />
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
      <ThumbnailContainer>
        <ThumbnailImgWrapper>
          <img src={thumbnail} alt="썸네일 이미지" />
          <button>썸네일 업로드</button>
        </ThumbnailImgWrapper>
        <p>썸네일을 업로드 하세요</p>
      </ThumbnailContainer>
      <Footer>
        <button>홈으로 돌아가기</button>
        <button onClick={onSubmitHandler}>
          {editingPost ? "수정 완료" : "완료"}
        </button>
      </Footer>
      <div>
        <label>----여기는 test----</label>
        {posts.map((item) => {
          return (
            <div key={item.postID}>
              <label>{item.breadType}</label>
              <button onClick={() => onActivateEditHandler(item)}>
                수정하기
              </button>
              {editingPost && (
                <button
                  onClick={() => {
                    setTitle("");
                    setContent("");
                    setEditingPost(null);
                  }}
                >
                  취소
                </button>
              )}
              <button onClick={() => onDeleteHandler(item)}>삭제하기</button>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Write;

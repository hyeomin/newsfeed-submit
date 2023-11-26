import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { auth } from "../firebase";

function MyPage({ users }) {
  const [image, setImage] = useState(
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMTgy%2FMDAxNjkyMzk0OTY2NTQx.kcqRj3Tf9RD5663NiKYV95dPN9YlyRfKPs0Re8S12Xcg.WbcFWteQCwRqC61R4PiAVZzD3XOfBtyDM5UvVwANwpgg.PNG.jjungaang%2Fpfp%25A3%25DFultraviolet%25A3%25DFuzubaong.png&type=sc960_832",
  );
  const [currentUser, setCurrentUser] = useState(users.isdone);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const imageChange = () => {
  //   if (currentUser) {
  //     currentUser
  //       .updateProfile({
  //         photoURL: image,
  //       })
  //       .then(() => {
  //         alert("프로필 사진이 업데이트되었습니다.");
  //         console.log("프로필 사진이 업데이트되었습니다.");
  //       })
  //       .catch((error) => {
  //         alert("프로필 사진 업데이트 오류");
  //         console.error("프로필 사진 업데이트 오류:", error);
  //       });
  //   } else {
  //     alert("사용자가 로그인되어 있지 않습니다.");
  //     console.error("사용자가 로그인되어 있지 않습니다.");
  //   }
  // };

  return (
    <>
      <Header users={users} />
      <AvartaNameWrapper>
        <Avarta>
          <img
            src={currentUser ? currentUser.photoURL : ""}
            alt="프로필 사진"
          />
        </Avarta>
        <AvartaName>{users.nickname}</AvartaName>
      </AvartaNameWrapper>
      <MypageBody>
        <InputWrapper>
          <input
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
            placeholder="새로운 프로필 사진 URL 입력"
          />
          {/* <button onClick={imageChange}>이미지 변경</button> */}
        </InputWrapper>
        <BodyWrapper>
          <p>{users.id}</p>
          <p>{users.nickname}</p>
          <p>{users.email}</p>
        </BodyWrapper>
      </MypageBody>
    </>
  );
}

export default MyPage;

const AvartaNameWrapper = styled.div`
  background-color: #fff1f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const Avarta = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MypageBody = styled.body`
  background-color: #fff1f0;
  height: 800px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px, 30px;
`;
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AvartaName = styled.p`
  font-size: 30px;
  margin-left: 10px;
`;

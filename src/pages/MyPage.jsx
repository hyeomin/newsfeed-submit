import styled from "styled-components";
import Header from "../components/Header";

function MyPage({ users }) {
  return (
    <>
      <Header users={users} />
      <AvartaNameWrapper>
        <Avarta>
          <img
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMTgy%2FMDAxNjkyMzk0OTY2NTQx.kcqRj3Tf9RD5663NiKYV95dPN9YlyRfKPs0Re8S12Xcg.WbcFWteQCwRqC61R4PiAVZzD3XOfBtyDM5UvVwANwpgg.PNG.jjungaang%2Fpfp%25A3%25DFultraviolet%25A3%25DFuzubaong.png&type=sc960_832"
            alt="이미지 없음"
          />
        </Avarta>
        <AvartaName>{users.nickname}</AvartaName>
      </AvartaNameWrapper>
      <MypageBody>
        <InputWrapper>
          <input type="file" accept="image/*" />
          <input placeholder="아무것도 쓰지마세요" />
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

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function Header({ users }) {
  const navigate = useNavigate();
  return (
    <>
      <HeadWrapper>
        <BtnWrapper>
          {users.isdone === false ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button onClick={() => navigate("/login")}>로그인</Button>{" "}
              <Button onClick={() => navigate("/register")}>회원가입</Button>{" "}
            </div>
          ) : (
            <>
              <h1>{users.nickname}님 환영합니다.</h1>
              <div>
                <Button onClick={() => navigate("/register")}>로그아웃</Button>{" "}
              </div>
            </>
          )}
        </BtnWrapper>
      </HeadWrapper>
    </>
  );
}

const HeadWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: large;
  border-radius: 5px;
  margin-right: 50px;
  width: 100px;
`;

const BtnWrapper = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
`;

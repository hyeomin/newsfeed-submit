import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header({ isLoggedIn, users }) {
  return (
    <>
      <HeadWrapper>
        <BtnWrapper>
          {users.isdone === false ? (
            <Link to={"/register"}>
              <Button>로그인</Button>{" "}
            </Link>
          ) : (
            <>
              <h1>{users.nickname}님 환영합니다.</h1>
              <Link to={"/register"}>
                <Button>로그아웃</Button>{" "}
              </Link>
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

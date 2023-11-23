import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: large;
  border-radius: 5px;
`;

export default function Header() {
  return (
    <HeadWrapper>
      <Link to={"/register"}>
        <Button>로그인</Button>{" "}
      </Link>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

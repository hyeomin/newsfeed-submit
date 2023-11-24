import React from "react";
import styled from "styled-components";

const WrappingBtns = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 200px;
  margin-top: 30px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
`;

const SortBtn = styled.button`
  background-color: #ffebc1;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
`;

function SortingBtns() {
  return (
    <WrappingBtns>
      <SortBtn>인기순</SortBtn>
      <SortBtn>시간순</SortBtn>
    </WrappingBtns>
  );
}

export default SortingBtns;

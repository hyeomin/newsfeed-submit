import React from "react";
import styled from "styled-components";
import selectedBread from "../assets/빵1.jpeg";

const GridingCards = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
`;

const Card = styled.div`
  border: 1px solid black;
  background-color: aqua;
  width: 200px;
`;

function HomePageCard({ userName, breadType, postTitle }) {
  return (
    <div>
      <GridingCards>
        <Card>
          <img>{selectedBread}</img>
          <div>작성자: {postTitle}</div>
          <div>작성자: {userName}</div>
          <div>작성자: {breadType}</div>
        </Card>
      </GridingCards>
    </div>
  );
}

export default HomePageCard;

import React from "react";
import styled from "styled-components";
import HomeCard from "./HomeCard";

const Container = styled.section`
  display: grid;
`;

const CardWrapper = styled.ul`
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px;
  border-radius: 12px;
`;

export default function HomePageCards() {
  return (
    <Container>
      <CardWrapper>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </CardWrapper>
    </Container>
  );
}

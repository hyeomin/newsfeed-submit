import React from "react";
import styled from "styled-components";
import Photos from "../components/Photos";
import defaultUser from "../assets/no-image.gif";


function Detail() {
    return <Container>
<ButtonHome>Home</ButtonHome>
<Header>
    <ProfileImg>
    <img src={null ?? defaultUser} alt="프로필이미지" />
    </ProfileImg>
    <Title>게시물 제목</Title>
    <Date>2023/11/22</Date>
</Header>

<Post>
    <Photos />
    <Review>작성자가 쓴 리뷰 넣을 거임 텍스트</Review>
</Post>
<Button>Top</Button>
</Container>
}

export default Detail;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1200px;
    height: 70px;
    background-color: lightgray;
    text-align: center;
    padding: 24px;
`

const Title = styled.h1`
    font-size: 30px;
    font-weight:600;
    color: brown;
    align-items: center;
    padding: 24px;
`;

const Date = styled.p`
    font-size: 15px;
    color: blue;
    margin-left: 100px;
`
const Post = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 20px;
    height: 500px;
    width: 1200px;
    margin: 20px
`;

const Review = styled.main`
    flex-direction: row;
    color: black;
    background-color: yellow; 
`;

const Button = styled.button`
    position: fixed;
    right: 40px;
    bottom: 40px;
`
const ButtonHome = styled.button`
    position: fixed;
    left: 40px;
    top: 40px;
`

const ProfileImg = styled.figure`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;
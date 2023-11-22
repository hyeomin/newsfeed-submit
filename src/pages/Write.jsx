import React from "react";
import styled from "styled-components";
import thumbnail from "../assets/noun-thumbnail-3022241.png";

function Write() {
    const breadList = [
        { id: 0, name: "소금빵" },
        { id: 1, name: "크로와상" },
        { id: 2, name: "식빵" },
        { id: 3, name: "케이크" },
        { id: 4, name: "베이글" },
        { id: 5, name: "타르트" },
        { id: 5, name: "카스테라" },
    ];

    return (
        <Container>
            <Title>빵 리뷰 남기기</Title>
            <div>
                <label>소개하는 빵을 골라주세요: </label>
                <select>
                    {breadList.map((bread) => {
                        return (
                            <option key={bread.id} value={bread.name}>
                                {bread.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <Input />
            <ThumnailContainer>
                <ThumbnailImgWrapper>
                    <img src={thumbnail} alt="썸네일 이미지" />
                    <button>썸네일 업로드</button>
                </ThumbnailImgWrapper>
                <p>썸네일을 업로드 하세요</p>
            </ThumnailContainer>
            <Footer>
                <button>홈으로 돌아가기</button>
                <button>완료</button>
            </Footer>
        </Container>
    );
}

const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;

    margin: 30px 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;

    margin: 20px auto;
`;

const Input = styled.input`
    min-height: 500px;

    margin: 20px 0;
`;

const ThumbnailImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #e9e8e8;
    border-radius: 10%;

    min-width: 30px;
    max-width: 200px;
    height: 150px;
    padding: 10px;
    margin: 20px 0;

    & img {
        width: 40%;
        padding: 30px;
    }
`;

const ThumnailContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 20px;

    & button {
        font-size: 18px;
        height: 40px;
        padding: 0 20px;
        border-radius: 10px;
        border: transparent;
        cursor: pointer;
    }
`;

export default Write;

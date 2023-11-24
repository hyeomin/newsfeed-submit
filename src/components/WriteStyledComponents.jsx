import styled from "styled-components";

const Header = styled.h2`
  font-size: 40px;
  font-weight: 700;

  margin-top: 30px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  margin: 20px 0;

  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;

  margin: 20px auto;
`;

const TextArea = styled.textarea`
  min-height: 500px;
  width: 100%;
  padding: 10px;

  margin: 20px 0;
  font-size: 18px;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #e9e8e8;
  border-radius: 10px;

  min-width: 30px;
  max-width: 500px;
  height: 150px;
  padding: 10px;
  margin: 20px 0;

  & img {
    width: 20%;
    padding: 30px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px 20px;

  & button {
    font-size: 18px;
    height: 40px;
    padding: 0 20px;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
  }
`;

export { Container, Footer, Header, TextArea, TitleInput, UploadWrapper };

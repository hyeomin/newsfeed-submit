import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import styled from "styled-components";
import { auth, storage } from "../firebase";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onImageSelectHandler = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const onUploadImageHandler = async () => {
    const imageRef = ref(
      storage,
      `${auth.currentUser.uid}/${selectedFile.name}`,
    );
    await uploadBytes(imageRef, selectedFile).then((snapshot) => {
      alert("Uploaded a blob or file!");
    });
  };

  return (
    <div>
      FileUpload
      <UploadContainer>
        {/* <img style={{ width: "100px" }} src={thumbnail} alt="썸네일 이미지" /> */}
        <input type="file" onChange={onImageSelectHandler} />
        <input type="file" onChange={onImageSelectHandler} />
        <input type="file" onChange={onImageSelectHandler} />
        <button onClick={onUploadImageHandler}>Upload</button>
      </UploadContainer>
    </div>
  );
}

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  width: 500px;
  height: 200px;

  border: 1px solid green;
  padding: 0 30px;

  & input {
    background-color: lightgray;
    width: 100%;
    column-gap: 10px;
  }

  & button {
    width: 100%;
  }
`;

export default FileUpload;

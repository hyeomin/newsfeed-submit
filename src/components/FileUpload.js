import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { auth, storage } from "../firebase";
import { UploadContainer } from "./WriteStyledComponents";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onUploadImageHandler = async () => {
    const imageRef = ref(
      storage,
      `${auth.currentUser.uid}/${selectedFile.name}`,
    );
    await uploadBytes(imageRef, selectedFile);
  };

  const onImageSelectHandler = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      FileUpload
      <UploadContainer>
        {/* <img style={{ width: "100px" }} src={thumbnail} alt="썸네일 이미지" /> */}
        <input type="file" onChange={onImageSelectHandler} />
        <button onClick={onUploadImageHandler}>Upload</button>
      </UploadContainer>
    </div>
  );
}

export default FileUpload;

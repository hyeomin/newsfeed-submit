import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };
  const signUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
       
      );
       console.log(userCredential)

       const id = userCredential.user.uid;
       console.log('User ID:', id);

    alert('회원가입 완료되었습니다.')

    } catch (error) {
      console.error(error);
      alert('이메일형식이어야합니다 .비밀번호는 6자 이상이어야합니다.')
     
    }
  };
  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
       
      );
      console.log(userCredential)
      alert('로그인 되었습니다.')


     
    } catch (error) {
      console.error(error);
      alert('error')
      
    }
  };
  const logOut = async (event) => {
    event.preventDefault();
    await signOut(auth);
    alert('로그아웃되었습니다.')
  };

  return (<BodyWrapper>
    <LoginWrapper>
      <h2>로그인페이지</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            required
          />
        </div>
        <button onClick={signUp}>회원가입</button>
        <button onClick={signIn}>로그인</button>
        <button onClick={logOut}>로그아웃</button>
      </form>
    </LoginWrapper></BodyWrapper>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff1f0;
  border: 1px solid black;
  border-radius: 5px;
  width: 400px;
  height: 300px;
  gap :20px;
  & h2 {
    font-size: 30px;

  }
  & button {
    background-color: black;
    color: white;
  }

`
const BodyWrapper = styled.div`
  
`
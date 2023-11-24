import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { auth } from "../firebase";

export default function Login({ setUsers, users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      alert("로그인 되었습니다.");
      const user = userCredential.user;
      const loginUser = {
        id: user.uid,
        email: user.email,
        isdone: true,
        nickname: user.displayName,
      };
      setEmail("");
      setPassword("");
      setUsers(loginUser);

      localStorage.setItem("user", JSON.stringify(loginUser));

      navigate("/mypage");
    } catch (error) {
      console.error(error);
      alert("이메일 비밀번호를 확인해주세요");
    }
  };

  return (
    <BodyWrapper>
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

          <button onClick={signIn}>로그인</button>
        </form>
      </LoginWrapper>
    </BodyWrapper>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;
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
  gap: 20px;
  & h2 {
    font-size: 30px;
  }
  & button {
    background-color: black;
    color: white;
  }
`;
const BodyWrapper = styled.div``;

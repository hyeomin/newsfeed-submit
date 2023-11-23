import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Register from "../pages/Register";
import Write from "../pages/Write";

function Router() {
  const [users, setUsers] = useState({
    email: "없엉",
    id: "이것도 없엉",
    isdone: false,
    nickname: "마찬가지",
  });
  console.log("유저스", users);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers} />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<MyPage users={users} />} />
        <Route path="/write" element={<Write />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route
          path="/register"
          element={<Register users={users} setUsers={setUsers} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

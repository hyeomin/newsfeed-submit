import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Register from "../pages/Register";
import Write from "../pages/Write";

function Router() {
  const [users, setUsers] = useState({
    email: "nodata",
    id: "nodata",
    isdone: false,
    nickname: "nodata",
  });
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   setUsers(storedUser);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage users={users} />} />
        <Route path="/write" element={<Write users={users} />} />
        <Route path="/write/:id" element={<Write users={users} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route
          path="/register"
          element={<Register users={users} setUsers={setUsers} />}
        />
        <Route
          path="/login"
          element={<Login users={users} setUsers={setUsers} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

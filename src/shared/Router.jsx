import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Detail from "../pages/Detail";
import MyPage from "../pages/MyPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/write" element={<Write />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

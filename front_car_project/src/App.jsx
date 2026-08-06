import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./containers/Login/Login.jsx";
import { Home } from "./containers/Home/Home.jsx";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}
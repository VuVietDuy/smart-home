import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import Setting from "./pages/Setting";
import SensorData from "./pages/SensorData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Dashboard />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="sensor" element={<SensorData />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

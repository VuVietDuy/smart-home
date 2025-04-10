import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import Setting from "./pages/Setting";
import SensorData from "./pages/SensorData";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Devices from "./pages/Devices";
import AlertModal from "./components/AlertModal";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertModal />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Dashboard />}></Route>
            <Route path="history" element={<History />}></Route>
            <Route path="sensor" element={<SensorData />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="device" element={<Devices />}></Route>
            <Route path="setting" element={<Setting />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

import { Layout as AntLayout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import { AccountBox, DataArray, Devices, History } from "@mui/icons-material";

const { Content, Sider } = AntLayout;

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <AntLayout style={{ minHeight: "100vh", backgroundColor: "#f5f7f9" }}>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="rounded-md h-10 bg-gray-200 m-2" />
          <Menu theme="light" defaultSelectedKeys={["dashboard"]} mode="inline">
            <Menu.Item key="dashboard" icon={<DashboardIcon />}>
              <Link to="/">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="history" icon={<History />}>
              <Link to="/history">Lịch sử</Link>
            </Menu.Item>
            <Menu.Item key="sensor" icon={<DataArray />}>
              <Link to="/sensor">Dữ liệu cảm biến</Link>
            </Menu.Item>
            <Menu.Item key="device" icon={<Devices />}>
              <Link to="/device">Thiết bị</Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<AccountBox />}>
              <Link to="/profile">Chủ nhà</Link>
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingsIcon />}>
              <Link to="/setting">Cài đặt</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout>
          <Content className="bg-[#f5f7f9]">
            <Outlet />
          </Content>
        </AntLayout>
      </AntLayout>
    </div>
  );
}

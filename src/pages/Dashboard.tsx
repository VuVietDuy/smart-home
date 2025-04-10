import { AccountCircle, Notifications, Search } from "@mui/icons-material";
import { Avatar, Dropdown, Spin } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LineChart from "../components/LineChart";
import RoomSwitches from "../components/RoomSwitches";
import fetcher from "../api/fetcher";

type RoomType = "Phòng khách" | "Phòng ngủ" | "Phòng tắm" | "Nhà xe";

export default function Dashboard() {
  const [room, setRoom] = useState<RoomType>("Phòng khách");
  const navigate = useNavigate();
  const { data: devices, isLoading: isLoadingDevices } = useQuery({
    queryKey: ["GET_DEVICES"],
    queryFn: () => fetcher.get("devices").then((res) => res.data),
    refetchInterval: 2000,
  });

  const { data: dashboard, isLoading: isLoadingDashboard } = useQuery({
    queryKey: ["GET_DASHBOARD"],
    queryFn: () => fetcher.get("sensor-data/dashboard").then((res) => res.data),
    refetchInterval: 2000,
  });

  const { data: currentSensorData, isLoading: isLoadingCurrentSensorData } =
    useQuery({
      queryKey: ["GET_CURRENT_SENSOR_DATA"],
      queryFn: () => fetcher.get("sensor-data/current").then((res) => res.data),
      refetchInterval: 2000,
    });

  const data = {
    labels:
      dashboard &&
      dashboard.map((item: any) => {
        const date = new Date(item.createdAt);
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      }),
    datasets: [
      {
        label: "Nhiệt độ (°C)",
        data: dashboard && dashboard.map((item: any) => item.temperature),
        backgroundColor: ["red"],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Độ ẩm (%)",
        data: dashboard && dashboard.map((item: any) => item.humidity),
        backgroundColor: ["blue"],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Ánh sáng (lux)",
        data: dashboard && dashboard.map((item: any) => item.light),
        backgroundColor: ["yellow"],
        borderColor: "yellow",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <header className="mx-4 mt-4 flex justify-between">
        <h1 className="text-5xl font-bold">Xin chào</h1>
        <div>
          <button className="bg-white rounded p-3 mr-3">
            <Search />
          </button>
          <button className="bg-white rounded p-3 mr-3">
            <Notifications />
          </button>
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Chủ nhà",
                  onClick: () => navigate("/profile"),
                },
                {
                  key: "2",
                  label: "Cài đặt",
                  onClick: () => navigate("/setting"),
                },
                {
                  key: "3",
                  label: "Đăng xuất",
                  onClick: () => navigate("/login"),
                },
              ],
            }}
          >
            <Avatar
              className="cursor-pointer"
              icon={<AccountCircle />}
              size={"large"}
            />
          </Dropdown>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="col-span-2">
          {isLoadingCurrentSensorData ? (
            <div className="flex justify-center mt-6">
              <Spin size="large"></Spin>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="col-span-1">
                <div className="rounded-lg bg-white px-8 py-6">
                  <p className="text-center font-medium mb-1">Nhiệt độ phòng</p>
                  <p className="text-3xl font-semibold text-blue-600 text-center">
                    {Math.round(currentSensorData.temperature)}°C
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-lg bg-white px-8 py-6">
                  <p className="text-center font-medium mb-1">
                    Nhiệt độ ngoài trời
                  </p>
                  <p className="text-3xl font-semibold text-blue-600 text-center">
                    {Math.round(currentSensorData.temperature)}°C
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-lg bg-white px-8 py-6">
                  <p className="text-center font-medium mb-1">Độ ẩm</p>
                  <p className="text-3xl font-semibold text-blue-600 text-center">
                    {currentSensorData.humidity}%
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-lg bg-white px-8 py-6">
                  <p className="text-center font-medium mb-1">Ánh sáng</p>
                  <p className="text-3xl font-semibold text-blue-600 text-center">
                    {Math.round(currentSensorData.light)} lux
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="bg-white rounded-lg p-4">
            {isLoadingDashboard ? (
              <div className="flex justify-center mt-6">
                <Spin size="large"></Spin>
              </div>
            ) : (
              <LineChart chartData={data} />
            )}
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-300 mb-4">
              <li className="me-2">
                <span
                  onClick={() => setRoom("Phòng khách")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "Phòng khách"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Phòng khách
                </span>
              </li>
              <li className="me-2">
                <span
                  onClick={() => setRoom("Phòng ngủ")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "Phòng ngủ"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Phòng ngủ
                </span>
              </li>
              <li className="me-2">
                <span
                  onClick={() => setRoom("Phòng tắm")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "Phòng tắm"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Phòng tắm
                </span>
              </li>
              <li className="me-2">
                <span
                  onClick={() => setRoom("Nhà xe")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "Nhà xe"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Nhà xe
                </span>
              </li>
            </ul>
          </div>
          {isLoadingDevices ? (
            <div className="flex justify-center mt-6">
              <Spin size="large"></Spin>
            </div>
          ) : (
            <RoomSwitches
              devices={devices.filter(
                (device: any) => device.position === room
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}

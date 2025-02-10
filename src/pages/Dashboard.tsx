import { AccountCircle, Notifications, Search } from "@mui/icons-material";
import { Avatar } from "antd";
import { useState } from "react";
import LineChart from "../components/LineChart";
import LivingRoom from "./Rooms/LivingRoom";
import BathRoom from "./Rooms/BathRoom";
import BedRoom from "./Rooms/BedRoom";
import Garage from "./Rooms/Garage";

const humidityData = [28, 41, 23, 30, 30, 27];
const temperatureData = [12, 15, 16, 19, 25, 23];
const lightData = [42, 55, 46, 59, 55, 63];

export default function Dashboard() {
  const [room, setRoom] = useState("LivingRoom");
  const [data, setData] = useState({
    labels: ["T2", "T3", "T4", "T5", "T6", "T7"],
    datasets: [
      {
        label: "Nhiệt độ (*C)",
        data: temperatureData,
        backgroundColor: ["red"],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Độ ẩm (%)",
        data: humidityData,
        backgroundColor: ["blue"],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Ánh sáng (%)",
        data: lightData,
        backgroundColor: ["yellow"],
        borderColor: "yellow",
        borderWidth: 2,
      },
    ],
  });
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
          <Avatar icon={<AccountCircle />} size={"large"} />
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1">
              <div className="rounded-lg bg-white px-8 py-6">
                <p className="text-center font-medium mb-1">Nhiệt độ phòng</p>
                <p className="text-3xl font-semibold text-blue-600 text-center">
                  23*C
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-lg bg-white px-8 py-6">
                <p className="text-center font-medium mb-1">Nhiệt độ phòng</p>
                <p className="text-3xl font-semibold text-blue-600 text-center">
                  30*C
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-lg bg-white px-8 py-6">
                <p className="text-center font-medium mb-1">Nhiệt ngoài trời</p>
                <p className="text-3xl font-semibold text-blue-600 text-center">
                  23*C
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-lg bg-white px-8 py-6">
                <p className="text-center font-medium mb-1">Độ ẩm</p>
                <p className="text-3xl font-semibold text-blue-600 text-center">
                  70%
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <LineChart chartData={data} />
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-300 mb-4">
              <li className="me-2">
                <span
                  onClick={() => setRoom("LivingRoom")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "LivingRoom"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Phòng khách
                </span>
              </li>
              <li className="me-2">
                <span
                  onClick={() => setRoom("BedRoom")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "BedRoom"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Phòng ngủ
                </span>
              </li>
              <li className="me-2">
                <span
                  onClick={() => setRoom("BathRoom")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "BathRoom"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Phòng tắm
                </span>
              </li>
              <li className="me-2">
                <span
                  onClick={() => setRoom("Garage")}
                  className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
                    room === "Garage"
                      ? "text-blue-600 bg-gray-200"
                      : "hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Nhà xe
                </span>
              </li>
            </ul>
          </div>

          {room === "LivingRoom" && <LivingRoom />}
          {room === "BathRoom" && <BathRoom />}
          {room === "BedRoom" && <BedRoom />}
          {room === "Garage" && <Garage />}
        </div>
      </div>
    </div>
  );
}

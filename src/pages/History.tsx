import {
  DirectionsWalk,
  LightbulbOutlined,
  LocalFireDepartmentOutlined,
  OpacityOutlined,
} from "@mui/icons-material";
import { Badge, Table, Tag } from "antd";

const initialData = [
  {
    id: 1,
    device: "Đèn phòng khách",
    location: "LivingRoom",
    status: "on",
    time: "2024-02-06 08:30:00",
  },
  {
    id: 2,
    device: "Quạt trần",
    location: "LivingRoom",
    status: "off",
    time: "2024-02-06 08:45:00",
  },
  {
    id: 3,
    device: "Máy lạnh",
    location: "BedRoom",
    status: "on",
    time: "2024-02-06 09:00:00",
  },
  {
    id: 5,
    device: "Máy lạnh",
    location: "BedRoom",
    status: "off",
    time: "2024-02-06 09:00:00",
  },
  {
    id: 4,
    device: "Cửa chính",
    location: "Garage",
    status: "off",
    time: "2024-02-06 09:15:00",
  },
];

export default function History() {
  const columns = [
    {
      title: "Thiết bị",
      dataIndex: "device",
      key: "device",
      render: (text: any, record: any) => (
        <span>
          {record.type === "temperature" ? (
            <LocalFireDepartmentOutlined />
          ) : null}
          {record.type === "light" ? <LightbulbOutlined /> : null}
          {record.type === "humidity" ? <OpacityOutlined /> : null}
          {record.type === "motion" ? <DirectionsWalk /> : null} {text}
        </span>
      ),
    },
    {
      title: "Vị trí",
      dataIndex: "location",
      key: "location",
      render: (text: any) => (
        <>
          {text === "LivingRoom" && "Phòng khách"}
          {text === "BedRoom" && "Phòng ngủ"}
          {text === "BathRoom" && "Phòng tắm"}
          {text === "Garage" && "Nhà xe"}
        </>
      ),
    },
    {
      title: "Giá trị",
      dataIndex: "status",
      key: "status",
      render: (value: any, record: any) => (
        <Tag color={record.status === "off" ? "red" : "blue"}>
          {value === "off" ? "Tắt" : "Bật"}
        </Tag>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
    },
  ];
  return (
    <div className="m-6 p-6 rounded-lg bg-white">
      <div className="flex gap-4 mb-2">
        <input
          type="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5"
          placeholder="Tìm kiếm"
        />
      </div>
      <Table columns={columns} dataSource={initialData}></Table>
    </div>
  );
}

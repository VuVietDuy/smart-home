import {
  DirectionsWalk,
  DoorFrontOutlined,
  LightbulbOutlined,
  LocalFireDepartmentOutlined,
  OpacityOutlined,
} from "@mui/icons-material";
import { Badge, Table, Tag } from "antd";

const initialData = [
  { id: 1, name: "Nhiệt độ", value: 28, unit: "°C", type: "temperature" },
  { id: 2, name: "Độ ẩm", value: 65, unit: "%", type: "humidity" },
  { id: 3, name: "Ánh sáng", value: 300, unit: "lux", type: "light" },
  { id: 4, name: "Chuyển động", value: "Không", unit: "", type: "motion" },
  { id: 5, name: "Cửa", value: "Đóng", unit: "", type: "door" },
];

export default function SensorData() {
  const columns = [
    {
      title: "Cảm biến",
      dataIndex: "name",
      key: "name",
      render: (text: any, record: any) => (
        <span>
          {record.type === "temperature" ? (
            <LocalFireDepartmentOutlined />
          ) : null}
          {record.type === "light" ? <LightbulbOutlined /> : null}
          {record.type === "door" ? <DoorFrontOutlined /> : null}
          {record.type === "humidity" ? <OpacityOutlined /> : null}
          {record.type === "motion" ? <DirectionsWalk /> : null} {text}
        </span>
      ),
    },
    {
      title: "Giá trị",
      dataIndex: "value",
      key: "value",
      render: (value: any, record: any) => (
        <Tag color={record.type === "temperature" ? "red" : "blue"}>
          {value} {record.unit}
        </Tag>
      ),
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (_: any, record: any) => (
        <Badge
          status={
            record.type === "motion" && record.value === "Có"
              ? "error"
              : record.type === "door" && record.value === "Mở"
              ? "warning"
              : "success"
          }
          text={record.value}
        />
      ),
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

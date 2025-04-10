import { useQuery } from "@tanstack/react-query";
import { Input, Select, Spin, Table } from "antd";
import fetcher from "../api/fetcher";
import { useState } from "react";

const { Search } = Input;

export default function SensorData() {
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");
  const [searchBy, setSearchBy] = useState("time");
  const [limit, setLimit] = useState(10);
  const { data: sensorData, isLoading } = useQuery({
    queryKey: ["GET_SENSOR_DATA", page, limit, key, searchBy],
    queryFn: () =>
      fetcher
        .get("sensor-data", {
          params: {
            page: page,
            limit: limit,
            searchBy: searchBy,
            key: key,
          },
        })
        .then((res) => res.data),
    refetchInterval: 2000,
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nhiệt độ",
      dataIndex: "temperature",
      key: "temperature",
      sorter: true,
    },
    {
      title: "Độ ẩm",
      dataIndex: "humidity",
      key: "humidity",
      sorter: true,
    },
    {
      title: "Ánh sáng",
      dataIndex: "light",
      key: "light",
      sorter: true,
    },
    {
      title: "Gas",
      dataIndex: "gas",
      key: "gas",
      sorter: true,
    },
    {
      title: "Thời gian",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: {
        compare: (a: any, b: any) => a - b,
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center mt-6">
        <Spin size="large"></Spin>
      </div>
    );
  }

  return (
    <div className="m-6 p-6 rounded-lg bg-white">
      <div className="flex gap-4 mb-2">
        <Search
          placeholder="Tìm kiếm"
          allowClear
          onSearch={(e) => setKey(e)}
          size="large"
          value={key}
          style={{ width: 300 }}
          onChange={(e) => setKey(e.target.value)}
        />
        <Select
          className="w-56"
          onChange={(e) => setSearchBy(e)}
          size="large"
          defaultValue={searchBy}
        >
          <Select.Option value="time">Thời gian</Select.Option>
        </Select>
      </div>
      <Table
        pagination={{
          current: sensorData.page,
          showSizeChanger: true,
          total: sensorData.total,
          pageSize: sensorData.limit,
          pageSizeOptions: ["5", "10", "20", "30"],
          onChange(page, pageSize) {
            setPage(page), setLimit(pageSize);
          },
        }}
        columns={columns}
        dataSource={sensorData.data}
        rowKey={"id"}
      ></Table>
    </div>
  );
}

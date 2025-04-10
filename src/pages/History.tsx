import { useQuery } from "@tanstack/react-query";
import { Input, Select, Spin, Table, Tag } from "antd";
import { useState } from "react";
import fetcher from "../api/fetcher";

const { Search } = Input;

export default function History() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [key, setKey] = useState("");
  const [searchBy, setSearchBy] = useState("time");
  const { data: deviceHistory, isLoading } = useQuery({
    queryKey: ["GET_DEVICE_HISTORY", page, limit],
    queryFn: () =>
      fetcher
        .get("devices/history", {
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
      title: "Thiết bị",
      dataIndex: "device",
      key: "device",
      render: (_: any, record: any) => <span>{record.Device.name}</span>,
    },
    {
      title: "Vị trí",
      dataIndex: "location",
      key: "location",
      render: (_: any, record: any) => <>{record.Device.position}</>,
    },
    {
      title: "Giá trị",
      dataIndex: "status",
      key: "status",
      render: (value: any, record: any) => (
        <Tag color={record.status === 0 ? "red" : "blue"}>
          {value === 0 ? "Tắt" : "Bật"}
        </Tag>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "createdAt",
      key: "createdAt",
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
          size="large"
          style={{ width: 300 }}
          onSearch={(e) => setKey(e)}
          onChange={(e) => setKey(e.target.value)}
        />
        <Select
          onChange={(e) => setSearchBy(e)}
          className="w-56 h-full"
          size="large"
          defaultValue={searchBy}
        >
          <Select.Option value="time">Tìm kiếm theo thời gian</Select.Option>
          {/* <Select.Option value="name">Tìm kiếm theo tên</Select.Option> */}
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={deviceHistory.data}
        pagination={{
          showSizeChanger: true,
          pageSize: deviceHistory.limit,
          current: deviceHistory.page,
          total: deviceHistory.total,
          pageSizeOptions: ["5", "10", "20", "30"],
          onChange(page, pageSize) {
            setPage(page);
            setLimit(pageSize);
          },
        }}
      ></Table>
    </div>
  );
}

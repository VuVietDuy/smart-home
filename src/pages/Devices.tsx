import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select, Table } from "antd";

import fetcher from "../api/fetcher";

function Devices() {
  const { data: devices, isLoading: isLoadingDevices } = useQuery({
    queryKey: ["GET_DEVICES"],
    queryFn: () => fetcher.get("devices").then((res) => res.data),
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Loại thiết bị",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Số lần bật tắt",
      dataIndex: "toggleCount",
      key: "toggleCount",
    },
    {
      title: "Thao tác",
      key: "action",
      render: () => <a href="#">Xem chi tiết</a>,
    },
  ];

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      <div className="col-span-3 md:col-span-1">
        <div className="rounded-lg bg-white px-8 py-6 h-full">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              label="Tên thiết bị"
              name="deviceName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Loại thiết bị" name="deviceType">
              <Select>
                <Select.Option value="fan">Quạt</Select.Option>
                <Select.Option value="light">Đèn</Select.Option>
                <Select.Option value="camera">Camera</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Thêm
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2">
        <div className="rounded-lg bg-white px-8 py-6">
          <h2 className="text-xl font-semibold mb-4">Danh sách thiết bị</h2>
          <Table
            dataSource={devices}
            columns={columns}
            loading={isLoadingDevices}
          />
        </div>
      </div>
    </div>
  );
}

export default Devices;

import { Modal } from "antd";
import { useEffect, useState } from "react";
import warning from "../assets/warning.svg";

export default function AlertModal() {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState<any>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:443/");

    socket.onmessage = (event) => {
      console.log("socket message", event);
      const data = JSON.parse(event.data);
      if (data.type === "warning") {
        setOpen(true);
        setAlert(data.message);
      }
    };

    return () => socket.close();
  }, []);

  return (
    <Modal
      open={open}
      footer={[]}
      onCancel={() => setOpen(false)}
      title="Cảnh báo"
    >
      <div className="flex justify-center items-center mb-4">
        <img
          src={warning}
          className="w-40 h-40 text-9xl text-red-500 animate-pulse"
        />
      </div>
      <p className="text-center text-xl font-bold">
        {alert || "Không có thông báo"}
      </p>
    </Modal>
  );
}

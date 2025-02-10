import { HotTub, Light, LightbulbRounded } from "@mui/icons-material";
import { Switch } from "antd";

export default function BathRoom() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <LightbulbRounded className="text-gray-600" />
            </div>
            <Switch />
          </div>
          <p className="text-xl">Đèn</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <HotTub className="text-gray-600" />
            </div>
            <Switch />
          </div>
          <p className="text-xl">Bình nóng lạnh</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <Light className="text-gray-600" />
            </div>
            <Switch />
          </div>
          <p className="text-xl">Đèn sưởi</p>
        </div>
      </div>
    </div>
  );
}

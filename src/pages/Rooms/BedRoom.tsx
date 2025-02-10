import {
  AcUnitRounded,
  Air,
  DesktopWindows,
  HeatPumpRounded,
  LightbulbRounded,
  WindPower,
} from "@mui/icons-material";
import { Switch } from "antd";

export default function BedRoom() {
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
              <WindPower className="text-blue-400" />
            </div>
            <Switch checked />
          </div>
          <p className="text-xl">Quạt trần</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <DesktopWindows className="text-blue-400" />
            </div>
            <Switch checked />
          </div>
          <p className="text-xl">Ti vi</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <AcUnitRounded className="text-gray-600" />
            </div>
            <Switch />
          </div>
          <p className="text-xl">Điều hòa</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <HeatPumpRounded className="text-gray-600" />
            </div>
            <Switch />
          </div>
          <p className="text-xl">Lò sưởi</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <Air className="text-blue-400" />
            </div>
            <Switch checked />
          </div>
          <p className="text-xl">Máy lọc không khí</p>
        </div>
      </div>
    </div>
  );
}

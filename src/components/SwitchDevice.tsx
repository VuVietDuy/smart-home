import {
  AcUnitRounded,
  Air,
  Camera,
  DesktopWindows,
  HeatPumpRounded,
  LightbulbRounded,
  LightSharp,
  WindPower,
} from "@mui/icons-material";
import { message, Spin, Switch } from "antd";
import { useState } from "react";
import fetcher from "../api/fetcher";

function renderDeviceIcon(deviceType: any) {
  switch (deviceType) {
    case "light":
      return <LightbulbRounded />;
    case "fan":
      return <WindPower />;
    case "tv":
      return <DesktopWindows />;
    case "air-conditioner":
      return <AcUnitRounded />;
    case "heater":
      return <HeatPumpRounded />;
    case "air-purifier":
      return <Air />;
    case "camera":
      return <Camera />;
    case "lamp":
      return <LightSharp />;
    default:
      return <LightbulbRounded />;
  }
}

export default function SwitchDevice(props: any) {
  let { deviceId, deviceName, deviceType, status, toggleCount } = props;
  const [state, setState] = useState(status);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(toggleCount);

  const handleOnClick = async () => {
    setState(!state);
    setIsLoading(true);
    await fetcher
      .post("devices/relay", {
        deviceId: deviceId,
        status: state ? 0 : 1,
      })
      .then((res) => {
        if (!state) {
          setToggle(toggle + 1);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        message.error("Đã có lỗi xảy ra, vui lòng thử lại sau");
        console.log(err);
      });
  };
  return (
    <div className="col-span-1" onClick={handleOnClick}>
      <div className="bg-white rounded-lg p-6 w-full">
        {isLoading ? (
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mb-4`}
          >
            <Spin size="large" className="mb-4" />
          </div>
        ) : (
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                state
                  ? "shadow-lg shadow-gray-300 bg-blue-400 text-white"
                  : "bg-gray-200"
              }`}
            >
              {renderDeviceIcon(deviceType)}
            </div>
            <Switch onChange={(e) => setState(e)} defaultValue={state} />
          </div>
        )}
        <p className="text-xl font-bold">
          {deviceName}
          <span className="text-base font-thin"> ({toggle})</span>
        </p>
      </div>
    </div>
  );
}

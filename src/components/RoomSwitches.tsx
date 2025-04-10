import SwitchDevice from "./SwitchDevice";

export default function RoomSwitches(props: any) {
  const { devices } = props;
  return (
    <div className="grid grid-cols-2 gap-4">
      {devices.map((device: any, index: any) => (
        <SwitchDevice
          key={index}
          deviceId={device.id}
          deviceName={device.name}
          deviceType={device.type}
          status={device.status}
          toggleCount={device.toggleCount}
        />
      ))}
    </div>
  );
}

import defaultAvatar from "../assets/defaultAvatar.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Email, Facebook, Phone } from "@mui/icons-material";

export default function Profile() {
  return (
    <div className="m-6">
      <div className="flex mb-6">
        <img src={defaultAvatar} className="w-40 h-40 rounded-full shadow-lg" />
        <div className="flex flex-col justify-center ml-4">
          <p className="text-4xl font-semibold">Vũ Viết Duy (Doe)</p>
          <p className="text-xl text-gray-500">B21DCPT089</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white rounded-lg">
            <div className="border-b border-gray-200 px-4 py-2">
              <h2 className="text-xl ">Tham khảo</h2>
            </div>
            <div className="p-4">
              <div className="flex gap-3 mb-4">
                <GitHubIcon className="text-5xl!" />
                <div>
                  <p className="text-xl text-gray-700">Github</p>
                  <a href="https://github.com/VuVietDuy">
                    https://github.com/VuVietDuy
                  </a>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <AssignmentIcon className="text-5xl! text-green-700" />
                <div>
                  <p className="text-xl text-gray-700">API Document</p>
                  <a href="https://github.com/VuVietDuy">
                    https://github.com/VuVietDuy
                  </a>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <PictureAsPdfIcon className="text-5xl! text-red-700" />
                <div>
                  <p className="text-xl text-gray-700">PDF file</p>
                  <a href="https://github.com/VuVietDuy">
                    https://github.com/VuVietDuy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded-lg">
            <div className="border-b border-gray-200 px-4 py-2">
              <h2 className="text-xl ">Liên hệ</h2>
            </div>
            <div className="p-4">
              <div className="flex gap-3 mb-4">
                <Facebook className="text-5xl! text-blue-700!" />
                <div>
                  <p className="text-xl text-gray-700">Facebook</p>
                  <a>https://facebook.com/VuVietDuy</a>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <Email className="text-5xl!" />
                <div>
                  <p className="text-xl text-gray-700">Email</p>
                  <a>vuvietduy1010@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <Phone className="text-5xl!" />
                <div>
                  <p className="text-xl text-gray-700">Số điện thoại</p>
                  <a>0978018844</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white rounded-lg">
            <div className="border-b border-gray-200 px-4 py-2">
              <h2 className="text-xl ">Bio</h2>
            </div>
            <p className="p-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { ITestemonial } from "@/types";
import logo from "../../../public/svgs/next.svg";

export default function Slider() {

  const data: ITestemonial[] = [
    {
      name: "Max Mustermann",
      role: "Fullstack Developer",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the",
    },
    {
      name: "Malina Musterfrau",
      role: "Fullstack Developer",
      image: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the",
    },
  ];

  return (
      <div className="flex overflow-x-auto">
        {data.map((el, i) => (
          <div key={el.name} className="flex-shrink-0 justify-center items-center w-5/6 rounded-md overflow-hidden mx-4 bg-[#ffffff60] dark:bg-[#0000008] lg:w-fit">
          <p className="text-base text-gray-600 leading-relaxed text-justify p-8">{el.description}</p>
          <div className="flex items-center justify-center p-2">
            <div className="rounded-full w-12 h-12 bg-black overflow-hidden p-2 max-w-md">
              <Image className="p-2" src={logo} alt="" width={100} height={100} />
            </div>
            <div className="flex flex-col tracking-wider">
              <label className="text-gray-600 font-bold text-base p-2">
              {el.name}
              </label>
              <label className="text-gray-400 font-normal text-sm px-2 pb-4">
              {el.role}
              </label>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
}

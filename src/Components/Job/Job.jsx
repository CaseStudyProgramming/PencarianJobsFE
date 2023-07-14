import React from "react";

// Import Icons
import { BiTimeFive } from "react-icons/bi";

// Import assets gambar
import Gambar1 from "../../Assets/1.png";
import Gambar2 from "../../Assets/2.png";
import Gambar3 from "../../Assets/3.png";
import Gambar4 from "../../Assets/4.png";
import Gambar5 from "../../Assets/5.png";

const Data = [
  {
    id: 1,
    image: Gambar1,
    title: "Web full stack",
    time: "Sekarang",
    location: "Indonesia",
    desc: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam rem? Laudantium, molestias?orem1",
    company: "Mobil Inc.",
  },

  {
    id: 2,
    image: Gambar2,
    title: "Web full stack",
    time: "Sekarang",
    location: "Rusia",
    desc: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam rem? Laudantium, molestias?orem1",
    company: "Donald Trump Inc.",
  },

  {
    id: 3,
    image: Gambar3,
    title: "Web Developer",
    time: "Sekarang",
    location: "Austria",
    desc: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam rem? Laudanti",
    company: "Musk Inc.",
  },
  {
    id: 4,
    image: Gambar4,
    title: "Web Developer",
    time: "Sekarang",
    location: "Austria",
    desc: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam rem? Laudanti",
    company: "Musk Inc.",
  },
  {
    id: 5,
    image: Gambar5,
    title: "Web Developer",
    time: "Sekarang",
    location: "Austria",
    desc: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam rem? Laudanti",
    company: "Musk Inc.",
  },
];

const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shad-Grey-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-TextColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]  group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="logo gambar" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-TextColor hover:bg-white group-hover/item:text-TextColor">
                Daftar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;

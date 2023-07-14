import React from "react";

// Import assets gambar
import valuegambar from "../../Assets/1.png";
import valuegambar2 from "../../Assets/2.png";
import valuegambar3 from "../../Assets/3.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-TextColor text-[25px] py[2rem] pb-[3rem] font-bold w-[400px] block">
        Percayakan kepada kami yang profesional
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeeedf] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgdiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={valuegambar} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-TextColor text-[18px]">
              Cepat
            </span>
          </div>

          <p className="text-[13px] text-TextColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            delectus quibusdam libero iste! Magnam.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#bdbd0a] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgdiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={valuegambar2} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-TextColor text-[18px]">
              Aman
            </span>
          </div>

          <p className="text-[13px] text-TextColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            delectus quibusdam libero iste! Magnam.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f0ebba] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgdiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={valuegambar3} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-TextColor text-[18px]">
              Terpercaya
            </span>
          </div>

          <p className="text-[13px] text-TextColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            delectus quibusdam libero iste! Magnam.
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">
            Lorem ipsum dolor sit.
          </h1>
          <h2 className="text-TextColor text-[25px] font-bold">
            Lorem, ipsum dolor.
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px]  text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Coba Sekarang
        </button>
      </div>
    </div>
  );
};

export default Value;

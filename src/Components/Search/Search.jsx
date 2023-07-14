import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchDiv grid gap-20 gp-10 bg-Grey rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-Grey-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Cari Pekerjaan Anda Disini..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-TextColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Cari Berdasarkan Perusahaan Disini..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-TextColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Cari Pekerjaan Anda Disini..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-TextColor icon" />
          </div>

          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Cari
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Urutkan Berdasarkan:
          </label>

          <select
            name=""
            id="revelance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">satu</option>
            <option value="">dua</option>
            <option value="">tiga</option>
            <option value="">empat</option>
            <option value="">lima</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Jenis Pekerjaan:
          </label>

          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">remote</option>
            <option value="">full-time</option>
            <option value="">part-time</option>
            <option value="">onsite</option>
            <option value="">lembur</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>

          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">ez</option>
            <option value="">medium</option>
            <option value="">pro</option>
            <option value="">expert</option>
            <option value="">insane</option>
          </select>
        </div>

        <span className="text-[#a1a1a1] cursor-pointer">Hapus Semua</span>
      </div>
    </div>
  );
};

export default Search;

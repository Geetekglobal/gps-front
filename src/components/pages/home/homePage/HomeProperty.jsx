import React, { useState } from "react";
import house from "../../../../assets/homepageimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorClosed,
  faExpand,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
const HomeProperty = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isNestedMenuOpen, setIsNestedMenuOpen] = useState(false);
  const [isNestedMenuOpen1, setIsNestedMenuOpen1] = useState(false);
  const [isNestedMenuOpen2, setIsNestedMenuOpen2] = useState(false);
  const [isNestedMenuOpen3, setIsNestedMenuOpen3] = useState(false);
  const [isNestedMenuOpen4, setIsNestedMenuOpen4] = useState(false);
  const [isNestedMenuOpen5, setIsNestedMenuOpen5] = useState(false);

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-40 flex flex-row items-center justify-between z-30 absolute">
        <div className="w-2/4 h-full flex flex-col items-start justify-evenly px-14">
          <h1 className="font-semibold text-5xl ">Popular Properties</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="w-2/4 h-full flex flex-row items-center justify-evenly px-14">
          <button className="p-4 rounded bg-black text-sm font-semibold text-[#FFCC00] hover:text-black hover:bg-[#FFCC00]">
            All
          </button>
          <button className="p-4 rounded bg-black text-sm font-semibold text-[#FFCC00] hover:text-black hover:bg-[#FFCC00]">
            Residential
          </button>
          <button className="p-4 rounded bg-black text-sm font-semibold text-[#FFCC00] hover:text-black hover:bg-[#FFCC00]">
            Commercial
          </button>
          <button className="p-4 rounded bg-black text-sm font-semibold text-[#FFCC00] hover:text-black hover:bg-[#FFCC00]">
            Lease
          </button>
          <div className="group inline-block">
            <button
              className="p-4 rounded bg-black text-sm font-semibold text-[#FFCC00] hover:text-black hover:bg-[#FFCC00]"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            >
              More <i className="ri-arrow-down-s-fill"></i>
            </button>
            <ul
              className={`bg-white border rounded-md transform scale-0 ${
                isSubMenuOpen && "scale-100"
              } absolute transition duration-150 ease-in-out origin-top w-48 left-[85%]`}
            >
              <li
                className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]"
                onMouseEnter={() => {
                  setIsNestedMenuOpen(!isNestedMenuOpen);
                }}
              >
                Apartment <i className="ri-arrow-down-s-fill"></i>
              </li>
              {isNestedMenuOpen && (
                <ul className="w-full group inline-block scale-100 transition duration-150 ease-in-out">
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Furnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Unfurnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Semi-Furnished
                  </li>
                </ul>
              )}
              <li
                className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]"
                onMouseEnter={() => {
                  setIsNestedMenuOpen1(!isNestedMenuOpen1);
                }}
              >
                House <i className="ri-arrow-down-s-fill"></i>
              </li>
              {isNestedMenuOpen1 && (
                <ul className="w-full group inline-block scale-100 transition duration-150 ease-in-out">
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Furnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Unfurnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Semi-Furnished
                  </li>
                </ul>
              )}
              <li
                className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]"
                onMouseEnter={() => {
                  setIsNestedMenuOpen2(!isNestedMenuOpen2);
                }}
              >
                Luxury Homes <i className="ri-arrow-down-s-fill"></i>
              </li>
              {isNestedMenuOpen2 && (
                <ul className="w-full group inline-block scale-100 transition duration-150 ease-in-out">
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Furnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Unfurnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Semi-Furnished
                  </li>
                </ul>
              )}
              <li
                className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]"
                onMouseEnter={() => {
                  setIsNestedMenuOpen3(!isNestedMenuOpen3);
                }}
              >
                Office <i className="ri-arrow-down-s-fill"></i>
              </li>
              {isNestedMenuOpen3 && (
                <ul className="w-full group inline-block scale-100 transition duration-150 ease-in-out">
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Furnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Unfurnished
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Semi-Furnished
                  </li>
                </ul>
              )}
              <li className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                Land
              </li>
              <li
                className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]"
                onMouseEnter={() => {
                  setIsNestedMenuOpen4(!isNestedMenuOpen4);
                }}
              >
                Hostel <i className="ri-arrow-down-s-fill"></i>
              </li>
              {isNestedMenuOpen4 && (
                <ul className="w-full group inline-block scale-100 transition duration-150 ease-in-out">
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Private Hostel
                  </li>
                  <li className=" px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    University Hostel
                  </li>
                </ul>
              )}
              <li
                className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]"
                onMouseEnter={() => {
                  setIsNestedMenuOpen5(!isNestedMenuOpen5);
                }}
              >
                Shared <i className="ri-arrow-down-s-fill"></i>
              </li>
              {isNestedMenuOpen5 && (
                <ul className="w-full group inline-block scale-100 transition duration-150 ease-in-out">
                  <li className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Shared House
                  </li>
                  <li className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
                    Shared Apartment
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-4/5 flex flex-col items-center justify-evenly absolute z-0 top-36">
        <div className="w-full h-5/6 grid grid-cols-4 gap-4 p-4 px-6">
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2 z-0">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
          <div className="h-52 rounded overflow-hidden object-cover object-center relative">
            <div className="w-44 h-6 absolute flex flex-row items-center justify-evenly top-2">
              <div className="h-6 bg-black text-white flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
              <div className="h-6 bg-[#FFCC00] text-black flex flex-row items-center justify-center p-2 rounded text-sm">
                Featured
              </div>
            </div>
            <div className="w-full h-24 absolute bottom-0 flex flex-col items-center justify-evenly">
              <div className="w-11/12 h-12 flex flex-col items-start justify-evenly">
                <h5 className="text-lg font-semibold text-white">£1,250,000</h5>
                <h5 className="text-lg font-semibold text-white">
                  Villa On Texas Ave
                </h5>
              </div>
              <div className="w-11/12 h-7 border-t flex flex-row items-start justify-start">
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faShower} /> 3BHK
                </h5>
                <h5 className="mr-5 text-white">
                  {" "}
                  <FontAwesomeIcon icon={faExpand} /> 3BHK
                </h5>
              </div>
            </div>
            <img className="w-full h-full" src={house} alt="" />
          </div>
        </div>
        <div className="w-56 h-16">
          <button className="w-full h-full bg-black rounded border border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:border-black hover:text-black transition-all ease-in-out">
            See All Properties <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProperty;

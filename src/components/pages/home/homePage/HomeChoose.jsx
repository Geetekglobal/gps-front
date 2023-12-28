import {
  faBuildingUser,
  faCoins,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeChoose = () => {
  return (
    <div className="w-full h-4/6 bg-slate-950 flex flex-col items-center justify-evenly">
      <div className="w-full h-20 flex flex-row items-center justify-center">
        <h1 className="text-4xl text-white font-semibold">Why Choose Us</h1>
      </div>
      <div className="w-4/5 h-3/4  flex flex-row items-center justify-between">
        <div className="w-1/4 h-full flex flex-col items-center justify-evenly ">
          <div className="w-full h-1/2  flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBuildingUser}
              className="text-white text-8xl"
            />
          </div>
          <div className="w-full h-1/2  flex flex-col items-center justify-evenly text-center">
            <h4 className="font-semibold text-lg text-white">
              Wider range of properties
            </h4>
            <p className="font-semibold text-base text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              cum doloribus assumenda, atque id,
            </p>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center justify-evenly ">
          <div className="w-full h-1/2  flex items-center justify-center">
            <FontAwesomeIcon icon={faCoins} className="text-white text-8xl" />
          </div>
          <div className="w-full h-1/2 flex flex-col items-center justify-evenly text-center">
            <h4 className="font-semibold text-lg text-white">
              Financing made easy
            </h4>
            <p className="font-semibold text-base text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              cum doloribus assumenda, atque id,
            </p>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center justify-evenly">
          <div className="w-full h-1/2 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faMoneyBills}
              className="text-white text-8xl"
            />
          </div>
          <div className="w-full h-1/2  flex flex-col items-center justify-evenly text-center">
            <h4 className="font-semibold text-lg text-white">Transparency</h4>
            <p className="font-semibold text-base text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              cum doloribus assumenda, atque id,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChoose;

import React from "react";
import TagFood from "../tagFood/tagFood";
import TagTime from "../tagTime/tagTime";
import Badge from "../badge/badge";
import { GoPlay } from "react-icons/go";

function Slide() {
  return (
    <div className="flex relative rounded-[40px]">
      <div className="bg-sky-color w-2/4 p-10 rounded-l-[40px]">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex gap-2 bg-white w-fit p-3 rounded-3xl">
              <span>
                <img src="/assets/image 14.png" alt="order" />
              </span>
              <span>Hot Recipes</span>
            </div>
            <div>
              <h1 className="flex flex-col gap-3 flex-wrap py-7 text-balance leading-normal sm:text-lg md:text-3xl lg:text-7xl font-bold pe-10">
                Spicy delicious chicken wing
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
              <div className="flex gap-4 pt-7">
                <TagTime />
                <TagFood />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <img src="/assets/Ellipse 2.png" alt="Avatar" />
              <div>
                <p className="font-bold text-nowrap">John Smith</p>
                <p className="text-gray-700 text-nowrap">15 March 2022</p>
              </div>
            </div>
            <button className="flex gap-3 items-center text-xl text-white bg-black p-4 rounded-xl">
              View Recipes
              <GoPlay />
            </button>
          </div>
        </div>
        <div className="absolute z-10 top-8 md:left-[47%] sm:left-2/4">
          <Badge />
        </div>
      </div>
      <div className="w-2/4 h-auto">
        <img
          className="m-0"
          alt="banner"
          src="/assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
        />
      </div>
    </div>
  );
}

export default Slide;

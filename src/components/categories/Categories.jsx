import React from "react";
import Category from "../category/Category";

function Categories() {
  return (
    <div className="mx-16 my-32">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold font-george">Categories</h1>
        <button className="bg-sky-color text-xl p-4 rounded-xl">
          View All Categories
        </button>
      </div>
      <div className="flex flex-row-reverse gap-40 mt-16 justify-center">
        <Category
          src={"/assets/image 24.png"}
          alt={"chocolate"}
          caption={"Chocolate"}
          color={"from-slate-100"}
        />
        <Category
          src={"/assets/image 23.png"}
          alt={"Lunch"}
          caption={"Lunch"}
          color={"from-slate-100"}
        />
        <Category
          src={"/assets/image 22.png"}
          alt={"Dessert"}
          caption={"Dessert"}
          color={"from-amber-100"}
        />

        <Category
          src={"/assets/image 21.png"}
          alt={"Meat"}
          caption={"Meat"}
          color={"from-red-100"}
        />
        <Category
          src={"/assets/image 20.png"}
          alt={"Vegan"}
          caption={"Vegan"}
          color={"from-emerald-100"}
        />
        <Category
          src={"/assets/image 25.png"}
          alt={"Breakfast"}
          caption={"Breakfast"}
          color={"from-slate-200"}
        />
      </div>
    </div>
  );
}

export default Categories;

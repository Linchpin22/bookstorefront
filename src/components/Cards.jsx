import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-full max-w-sm md:max-w-xs lg:w-72 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-48 w-full overflow-hidden">
          <img
            src={item.image}
            alt="Book"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4 flex flex-col justify-between">
          <h2 className="card-title text-lg font-semibold mb-2">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm line-clamp-3 mb-4">{item.title}</p>
          <div className="card-actions justify-between">
          <div
              className={`cursor-pointer px-2 py-1 text-sm rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ${
                item.category.toLowerCase() === "free" ? "line-through text-red-500" : ""
              }`}
            >
              ${item.price}
            </div>
            <div className="cursor-pointer px-2 py-1 text-sm rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

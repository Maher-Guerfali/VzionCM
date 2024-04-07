import React from "react";

const Card = ({ title,Valeur, image }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-slate-500 rounded-lg p-5 max-w-xs transition duration-300 hover:scale-105 hover:rotate-1">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
        <img src={image} class="h-8 w-8" alt="Card logo" />
        <span className="text-2xl text-white">{title}</span>
      </div>
      <span className="text-slate-800 text-center">
        {Valeur}
      </span>
    </div>
  );
};

export default Card;

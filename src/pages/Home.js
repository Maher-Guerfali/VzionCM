import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Graph from "../components/Graph";
import { CARDS_DETAILS, TEXT_DETAILS } from "../assets/constants";

const Home = () => {
  const [cardValues, setCardValues] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValues = CARDS_DETAILS.map(() => {
        return Math.floor(Math.random() * (77 - 23 + 1) + 23);
      });
      setCardValues(newValues);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-14 items-center justify-center">
      <div className="flex flex-col md:flex-row gap-9 items-center justify-center">
        {CARDS_DETAILS.map((item, index) => (
          <Card image={item.image} title={item.title} key={item.title} Valeur={cardValues[index]} />
        ))}
      </div>
      <Graph />
      <div className="flex items-center justify-center text-white bg-slate-500 rounded-lg p-5 my-5 w-[90%] text-xl">
        {TEXT_DETAILS.content}
      </div>
    </div>
  );
};

export default Home;
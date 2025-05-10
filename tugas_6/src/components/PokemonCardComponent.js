import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className="bg-[#3D4466] border rounded-xl p-4 hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex justify-center mb-2">
        <span className=" text-white text-xs font-bold px-2 py-1 rounded-full">
          {pokemon.id}
        </span>
        <span className=" text-white text-xs font-bold px-2 py-1 rounded-full">
          {pokemon.type}
        </span>
      </div>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 object-contain mx-auto mb-2"
      />
      <h2 className="text-lg font-bold text-center capitalize text-white">
        {pokemon.name}
      </h2>
    </Link>
  );
};

export default PokemonCard;

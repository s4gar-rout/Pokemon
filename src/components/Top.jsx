import React, { useState } from "react";
import pngegg from "../assets/pngegg.png";
import axios from "axios";
import PokemonGlassCard from "./PokemonCard";

const Top = () => {
  const [pokemon, setPokemon] = useState([]);
  async function getData() {
    const rawData = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    const secondData = await Promise.all(
      rawData.data.results.map(async (currPoke) => {
        const pokeData = await axios.get(currPoke.url);
        return pokeData.data;
      })
    );
    setPokemon(secondData);
  }
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <img className="w-50 object-cover" src={pngegg} alt="" />
        <button
          onClick={getData}
          className="px-[1.8vh] py-[1.3vh] rounded-md bg-[#F5C542] hover:bg-[#E0B12D] text-[#16222A]


 text-md font-bold"
        >
          {" "}
          Get Random Pokemon
        </button>
      </div>
      <div className="flex flex-wrap gap-6 mt-4 items-center justify-center">
        {pokemon.map((currPokemon) => {
          return (
            <PokemonGlassCard
              key={currPokemon.id}
              pokemonData={currPokemon}
            ></PokemonGlassCard>
          );
        })}
      </div>
    </>
  );
};

export default Top;

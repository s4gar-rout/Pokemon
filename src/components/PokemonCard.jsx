import React from "react";

const PokemonCard = ({ pokemonData }) => {
  if (!pokemonData) return null;

  const image =
    pokemonData.sprites.other.dream_world.front_default ||
    pokemonData.sprites.front_default;

  return (
    <div className="w-63 rounded-2xl p-3 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="h-50 flex items-center justify-center rounded-xl bg-white/10">
        <img
          src={image}
          alt={pokemonData.name}
          className="w-26 h-auto drop-shadow-2xl"
        />
      </div>

      {/* Info Section */}
      <div className="text-center mt-4 text-white">
        <h2 className="text-3xl font-semibold tracking-widest capitalize">
          {pokemonData.name}
        </h2>

        <p
          className="uppercase text-xs tracking-widest mt-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20
hover:bg-white/20 text-white

rounded-sm w-fit m-auto"
        >
          {pokemonData.types.map((currType) => currType.type.name).join(", ")}
        </p>

        {/* Stats */}
        <div className="mt-4 text-sm opacity-80 space-y-1 ">
          <p>No : {pokemonData.id}</p>
          <p>Type : {pokemonData.types.map((t) => t.type.name).join(", ")}</p>
          <p>Height : {pokemonData.height / 10} m</p>
          <p>Weight : {pokemonData.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};
 
export default PokemonCard;

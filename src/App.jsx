import React from "react";
import Top from "./components/Top";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  return (
    <>
      <div className="min-h-screen max-h-auto w-full  bg-linear-to-br from-[#16222A] to-[#3A6073] p-3">
        <Top />
        <PokemonCard></PokemonCard>
      </div>
    </>
  );
};

export default App;

import { useState } from "react";
import { usePokemonData } from "../hook/usePokemonData";

export function Project() {
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    normal: "#f5f5f5",
    flying: "#eaeaea",
    fighting: "#e6e0d4",
    psychic: "#eaeda1",
    ghost: "#705898",
    ice: "#96d9d6",
    dragon: "#97b3e6",
    dark: "#707070",
    steel: "#f4f4f4",
  };
  const [cantidad, setCantidad] = useState(0);
  const pokemonData = usePokemonData(cantidad);

  return (
    <div className="p-4">
      <input
        type="number"
        placeholder="Cantidad de pokémon"
        onChange={(e) => setCantidad(parseInt(e.target.value))}
        className="mb-4 p-2 border rounded"
      />

      <div className="flex flex-wrap">
        {pokemonData.map((pokemonData) => {
          const tipo = pokemonData?.types[0]?.type?.name;
          const fondo = colors[tipo] || "#fff";
          console.log(pokemonData);

          return (
            <div
              key={pokemonData.id}
              style={{ backgroundColor: fondo }}
              className=" group transform transition-transform duration-300 hover:scale-120 hover:-translate-y-1 hover:shadow-4xl flex flex-col text-black rounded-xl items-center m-4 p-2 shadow-md dark:shadow-white"
            >
              <h1 className="text-2xl font-bold text-gray-800">
                {pokemonData.name.toUpperCase()}
              </h1>

              <img
                src={
                  pokemonData.sprites.other["official-artwork"].front_default
                }
                alt={pokemonData.name}
                className="group w-50 h-50"
              />
              <div className="invisible group-hover:visible">
                <h2>
                  <strong>ID:</strong> #{pokemonData.id}
                </h2>
                <div className="flex">
                  <small
                    className="text-black p-1 rounded-2xl font-bold saturate-60"
                    style={{
                      backgroundColor:
                        colors[pokemonData?.types[0]?.type?.name],
                      filter: "brightness(0.9)", // 0.7 = 70% de brillo (más oscuro)
                    }}
                  >
                    {pokemonData?.types[0]?.type?.name.toUpperCase()}
                  </small>
                  <small
                    className="invisible text-black p-1 group-hover:visible group-hover:ml-2 rounded-2xl font-bold saturate-60"
                    style={{
                      backgroundColor:
                        colors[pokemonData?.types[1]?.type?.name],
                      filter: "brightness(0.9)", // 0.7 = 70% de brillo (más oscuro)
                    }}
                  >
                    {pokemonData?.types[1]?.type?.name.toUpperCase()}
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

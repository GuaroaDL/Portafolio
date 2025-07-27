import { useEffect, useState } from "react";

export function usePokemonData(cantidad) {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    if (cantidad <= 0) {
      setPokemonData([]);
      return;
    }

    setPokemonData([]); // limpiar cuando cambie la cantidad
    for (let i = 1; i <= cantidad; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemonData((prev) => [...prev, data]); // Agregar el nuevo Pokémon
        })
        .catch((error) => console.error(error));
    }
  }, [cantidad]);
  console.log(pokemonData);
  return pokemonData;
}

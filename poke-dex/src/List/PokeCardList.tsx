import styled from "@emotion/styled";
import PokeCard from "./PokeCard";
import { useEffect, useState } from "react";
import {
  PokemonListReponseType,
  fetchPokemons,
} from "../Service/PokemonService";

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListReponseType>({
    count: 0,
    next: "",
    results: [],
  });
  //axios 연결
  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    })();
  }, []);

  return (
    <List>
      {pokemons.results.map((pokemon, index) => {
        return (
          <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
        );
      })}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default PokeCardList;

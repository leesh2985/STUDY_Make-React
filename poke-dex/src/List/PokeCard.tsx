import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  PokemonDetailType,
  fetchPokemonDetail,
} from "../Service/PokemonService";

const TempimgUrl =
  "https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800";

interface PokeCardProps {
  name: string;
}

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
    })();
  }, [props.name]);

  if (!pokemon) {
    return null; // TODO: 화면이 로딩중일때 표시
  }

  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip name={pokemon.name} id={pokemon.id} />
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

// 네모칸
const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 8px;

  width: 250px;
  height: 300px;

  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px#c0c0c0;

  cursor: pointer;
`;

// 포켓몬
const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;

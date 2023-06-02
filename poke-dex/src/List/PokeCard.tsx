import styled from "@emotion/styled";

const PokeCard = () => {
  return <Item></Item>;
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
`;

const Header = styled.section``;

export default PokeCard;

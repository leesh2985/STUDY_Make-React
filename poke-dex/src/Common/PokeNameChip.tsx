import styled from "@emotion/styled";

interface PokeNumberChipProps {
  name: string;
  id: number;
}

const PokeNameChip = (props: PokeNumberChipProps) => {
  return (
    <Chip>
      <NumberChip>
        <Number>{props.id}</Number>
      </NumberChip>
      <Text>{props.name}</Text>
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #c0c0c0;
  border-radius: 16px;

  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

// 번호
const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: yellow;
  border-radius: 16px;
  opacity: 0.8;
`;

const Number = styled.label`
  opacity: 1;
`;

// 이름
const Text = styled.label`
  margin: 0 8px 0 5px;
`;

export default PokeNameChip;

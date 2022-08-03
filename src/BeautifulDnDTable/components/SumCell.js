import styled from "styled-components";
import StyledTrashCan from "../Styled/StyledTrashCan";

const Sum = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const SumCell = props => {
  return (
    <Sum>
      <StyledTrashCan {...props} />
      {props.row.values.sum}
    </Sum>
  );
};
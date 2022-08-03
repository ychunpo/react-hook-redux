import styled from "styled-components";
import StyledUpDownArrow from '../Styled/StyledUpDownArrow';
import { EditableTextCell } from './EditableTextCell';

const Description = styled.span`
  display: flex;
  align-items: center;
  position: relative;
`;

export const DescriptionCell = props => {
  return (
    <Description>
      <StyledUpDownArrow {...props} />
      <EditableTextCell {...props} />
    </Description>
  );
};
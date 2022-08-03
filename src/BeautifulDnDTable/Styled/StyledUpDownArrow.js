import styled from "styled-components";

const UpDownArrow = props => (
  <span
    {...props.dragHandleProps}
    className={props.className}
    aria-label="move"
    role="img"
  >
    ↕️
  </span>
);

const StyledUpDownArrow = styled(UpDownArrow)`
  cursor: pointer;
  position: absolute;
  top: -15px;
  left: -50px;
  padding: 15px;
  display: none;
  tr:hover & {
    display: ${({ isSomethingDragging }) =>
    isSomethingDragging ? "none" : "inline"};
  }
`;

export default StyledUpDownArrow;
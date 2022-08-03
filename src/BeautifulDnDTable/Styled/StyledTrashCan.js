import styled from "styled-components";

const TrashCan = ({ removeRow, row, className }) => (
  <span
    className={className}
    onClick={() => removeRow(row.index)}
    role="img"
    aria-label="delete"
  >
    🗑️
  </span>
);
const StyledTrashCan = styled(TrashCan)`
  position: absolute;
  top: -20px;
  right: -50px;
  cursor: pointer;
  padding: 15px;
  display: none;
  tr:hover & {
    display: ${({ isSomethingDragging }) =>
    isSomethingDragging ? "none" : "inline"};
  }
`;

export default StyledTrashCan
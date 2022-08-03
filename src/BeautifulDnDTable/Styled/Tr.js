import styled from "styled-components";

const Tr = styled.tr`
  background-color: white;
  display: ${({ isDragging }) => (isDragging ? "table" : "")};
`;

export default Tr;
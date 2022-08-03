import styled from "styled-components";

const ResetData = props => (
  <span
    className={props.className}
    onClick={() => props.resetData()}
    role="img"
    aria-label="reset"
  >
    Reset Items 🔁
  </span>
);
const StyledResetData = styled(ResetData)`
  cursor: pointer;
  color: white;
  margin: 0 10px;
`;

export default StyledResetData;
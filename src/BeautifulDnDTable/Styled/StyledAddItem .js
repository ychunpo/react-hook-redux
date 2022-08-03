import styled from "styled-components";

const AddItem = props => {
  console.log('addItem-props', props);
  return (
    <span
      className={props.className}
      onClick={() => props.addRow()}
      role="img"
      aria-label="add"
    >
      1️⃣ Add Item
    </span>
  )
};

const StyledAddItem = styled(AddItem)`
  cursor: pointer;
  color: white;
  margin: 0 10px;
`;

export default StyledAddItem;
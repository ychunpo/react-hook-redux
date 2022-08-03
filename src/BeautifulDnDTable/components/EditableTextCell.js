export const EditableTextCell = props => {
  const { column, row, cell, updateMyData } = props;
  const value = cell.value;
  const rowIndex = row.index;
  const columnId = column.id;
  const onChange = e => {
    updateMyData(rowIndex, columnId, e.target.value);
  };
  return <input value={value} onChange={onChange} />;
};
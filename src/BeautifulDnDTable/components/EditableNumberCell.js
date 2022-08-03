export const EditableNumberCell = props => {
  const { column, row, cell, updateMyData } = props;
  const value = cell.value;
  const rowIndex = row.index;
  const columnId = column.id;
  const onChange = e => {
    updateMyData(rowIndex, columnId, parseInt(e.target.value, 10));
  };
  return <input value={value} onChange={onChange} type="number" />;
};

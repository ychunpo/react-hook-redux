export const reorderData = (startIndex, endIndex) => {
  const newData = [...data];
  const [movedRow] = newData.splice(startIndex, 1);
  newData.splice(endIndex, 0, movedRow);
  setData(newData);
};
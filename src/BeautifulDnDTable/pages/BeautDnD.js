import React, { useMemo, useState } from 'react';
import { staticData } from "../data/staticData";
import Styles from '../Styled/Styles';
import ShowTable from './ShowTable';
import { EditableNumberCell } from '../components/EditableNumberCell'
import { DescriptionCell } from '../components/DescriptionCell';
import { SumCell } from '../components/SumCell';

const BeautDnD = () => {
  const columns = useMemo(() => [
    {
      Header: "Description",
      accessor: "description",
      Cell: DescriptionCell
    },
    {
      Header: "One",
      accessor: "one",
      Cell: EditableNumberCell
    },
    {
      Header: "Two",
      accessor: "two",
      Cell: EditableNumberCell
    },
    {
      Header: "Sum",
      accessor: row => row.one + row.two,
      id: "sum",
      Cell: SumCell
    }
  ], []);

  const [data, setData] = useState(staticData);
  console.log('data: ', data);
  const [idCount, setIdCount] = useState(staticData.length + 1);

  const resetData = () => setData(staticData);

  const removeRow = rowIndex => {
    console.log('removeRow-rowIndex', rowIndex);
    setData(old => old.filter((row, index) => index !== rowIndex));
  };

  const addRow = () => {
    const one = Math.floor(Math.random() * 10);
    const two = Math.floor(Math.random() * 10);
    const sum = one + two;
    setData(old => [
      ...old,
      {
        id: `item-${idCount}`,
        description: `Thing ${idCount}`,
        one,
        two,
        sum
      }
    ]);

    setIdCount(idCount + 1);
  };
  console.log('data-outside: ', data)

  const updateMyData = (rowIndex, columnID, newValue) => {
    console.log('update-rowIndex', rowIndex)
    console.log('update-columnID', columnID)
    console.log('update-newValue', newValue)
    setData(oldData =>
      oldData.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...oldData[rowIndex],
            [columnID]: newValue
          };
        }
        return row;
      })
    );
  };

  const reorderData = (startIndex, endIndex) => {
    const newData = [...data];
    const [movedRow] = newData.splice(startIndex, 1);
    newData.splice(endIndex, 0, movedRow);
    setData(newData);
  };

  return (
    <Styles>
      <ShowTable
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        removeRow={removeRow}
        addRow={addRow}
        resetData={resetData}
        reorderData={reorderData}
      />
    </Styles>
  )
}

export default BeautDnD;
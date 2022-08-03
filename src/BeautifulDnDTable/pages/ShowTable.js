import React from 'react';
import { useTable } from "react-table";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Tr from '../Styled/Tr';
import StyledAddItem from '../Styled/StyledAddItem ';
import StyledResetData from '../Styled/StyledResetData';

const ShowTable = ({
  columns,
  data,
  updateMyData,
  removeRow,
  addRow,
  resetData,
  reorderData
}) => {
  const tableInstance = useTable({
    columns,
    data,
    // non-API instance pass-throughs
    updateMyData,
    removeRow,
    addRow,
    reorderData
  });

  //console.log({ tableInstance });

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    rows
  } = tableInstance;

  //console.log('rows', rows);

  const handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;
    reorderData(source.index, destination.index);
  };

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="table-body">
            {(provided, snapshot) => (
              <tbody ref={provided.innerRef} {...provided.droppableProps}>
                {rows.map((row, i) => {
                  //console.log('row', row);
                  //console.log('i', i);
                  prepareRow(row);
                  return (
                    <Draggable
                      draggableId={row.original.id}
                      key={row.original.id}
                      index={row.index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <Tr
                            {...row.getRowProps()}
                            {...provided.draggableProps}
                            // {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                          >
                            {row.cells.map(cell => (
                              <td {...cell.getCellProps()}>
                                {cell.render("Cell", {
                                  dragHandleProps: provided.dragHandleProps,
                                  isSomethingDragging: snapshot.isDraggingOver
                                })}
                              </td>
                            ))}
                          </Tr>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
                <tr>
                  <td
                    style={{ backgroundColor: "darkblue" }}
                    colSpan={columns.length}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        textAlign: "center"
                      }}
                    >
                      <StyledAddItem addRow={addRow} />
                      <StyledResetData resetData={resetData} />
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      </table>
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </>
  );
}

export default ShowTable

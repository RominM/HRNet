import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const Table = () => {
   const data = useMemo(
      () => [
         { title: 'First Name', data: 'firstName' },
         { title: 'Last Name', data: 'lastName' },
         { title: 'Start Date', data: 'startDate' },
         { title: 'Department', data: 'department' },
         { title: 'Date of Birth', data: 'dateOfBirth' },
         { title: 'Street', data: 'street' },
         { title: 'City', data: 'city' },
         { title: 'State', data: 'state' },
         { title: 'Zip Code', data: 'zipCode' },
      ],
      []
   );

   const columns = React.useMemo(
      () => [
         {
            Header: 'Column 1',
            accessor: 'col1',
         },
         {
            Header: 'Column 2',
            accessor: 'col2',
         },
      ],
      []
   );

   const initTable = useTable({ columns, data });

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      initTable;

   return (
      <table
         id="employee-table"
         className="employee-table"
         {...getTableProps()}
         style={{ border: 'solid 1px blue' }}
      >
         <thead>
            {headerGroups.map((headerGroup) => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                     <th
                        {...column.getHeaderProps()}
                        style={{
                           borderBottom: 'solid 3px red',
                           background: 'aliceblue',
                           color: 'black',
                           fontWeight: 'bold',
                        }}
                     >
                        {column.render('Header')}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
               prepareRow(row);
               return (
                  <tr {...row.getRowProps()}>
                     {row.cells.map((cell) => {
                        return (
                           <td
                              {...cell.getCellProps()}
                              style={{
                                 padding: '10px',
                                 border: 'solid 1px gray',
                                 background: 'papayawhip',
                              }}
                           >
                              {cell.render('Cell')}
                           </td>
                        );
                     })}
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default Table;

import React from 'react'
import "./ProductList.css"
import { DataGrid } from '@mui/x-data-grid';
import {ProductRows} from "../../DummyData"
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function ProductList() {
    const [data,setData] = useState(ProductRows)

    const handleDelete = (id)=> {
        setData(data.filter((item)=> item.id !== id));
    };

    const columns = [
        {
          field: 'Recept',
          headerName: 'Recept',
          width: 150,
          editable: true,
          renderCell: (params) => {
              return(
                  <div className="ProductlistUser">
                      <img src={params.row.img} alt="" className="ProductListImg" />
                      {params.row.name}
                  </div>
              )
          }
        },
        {
            field: 'Halal',
            headerName: 'Halal',
            type: "text",
            width: 150,
            editable: true,
            render: rowData => (rowData.mode ? "True" : "False"),
          },

      ];
  return (
    <div className='productList'>
              <DataGrid
        rows={ProductRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
      <Sidebar />
    </div>
  )
}

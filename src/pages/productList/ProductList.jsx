import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [data, setData] = useState(productRows)
    const handleDelete = (id)=>{
        setData(data.filter((item)=>{
            return item.id!==id
        }))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
            return <div className="ProductListItem">
                <img src={params.row.img} className="ProductListImg"/>
                {params.row.name}
            </div>
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'actione',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={'/product/'+params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    
                    <DeleteOutlineIcon className="productListDelete" onClick={()=>{handleDelete(params.row.id)}} />
                    </>
                )
            }
        }
    ];

    const rows = data
    return (
        <div className="productList">
            <DataGrid
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
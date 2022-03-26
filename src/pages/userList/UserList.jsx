import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
const UserList = () => {
    const handleDelete = (id)=>{
        setData(data.filter((item)=>{
            return item.id!==id
        }))
    }
    const [data, setData] = useState(userRows)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'user', width: 200, renderCell: (params)=>{
            return <div className="userListUser">
                <img src={params.row.avatar} className="userListImg"/>
                {params.row.username}
            </div>
        } },
        { field: 'email', headerName: 'email', width: 200 },
        
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'actione',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={'/user/'+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    
                    <DeleteOutlineIcon className="userListDelete" onClick={()=>{handleDelete(params.row.id)}} />
                    </>
                )
            }
        }
    ];

    const rows = data;
    return (
        <div className="userList">
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

export default UserList
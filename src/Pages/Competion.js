import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import NavBar from '../Home/Component/Header';
import Footer from '../Footer/Footer';
const columns = [
    { field: 'id', headerName: 'Postition', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            return (
                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                    <p>Ganesh Singh</p>
                </div>
            );
        },
    },
    {
        field: 'Certificates',
        headerName: 'Certificates',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            return (
                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                    <DownloadForOfflineIcon />
                </div>
            );
        },
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Competition() {
    return (
        <>
            <NavBar />
            <div className='my-10'>
                <div class="-space-x-4 mx-auto w-full md:w-3/5 flex items-center">
                    <div>
                    <img class="relative z-20 inline object-cover w-40 h-40 border-2 border-white rounded-full" src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674909500/Premsudha/team2_p3ehup.jpg" alt="Profile image" />
                    <p className='text-center'>2nd Runner Up</p>
                    </div>
                    <div>
                    <img class="relative z-30 inline object-cover w-40 h-40 border-2 border-white rounded-full" src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674909500/Premsudha/team2_p3ehup.jpg" alt="Profile image" />
                    <p className='text-center'>1st Runner Up</p>
                    </div>
                    <div>
                    <img class="relative z-10 inline object-cover w-40 h-40 border-2 border-white rounded-full" src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674909500/Premsudha/team2_p3ehup.jpg" alt="Profile image" />
                    <p className='text-center'>3rd Runner Up</p>
                    </div>
                </div>
                <div className='h-[400px] w-full lg:w-3/5 mx-auto'>

                    <h1 className='text-3xl font-semibold'>परिणाम</h1>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                    />
                </div>

            </div>
            <Footer />
        </>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import NavBar from '../Home/Component/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const columns = [
    { field: 'position', headerName: 'Postition', width: 200 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 360,
        renderCell: (params) => {
            return (
                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                    <p>{params?.row?.writer}</p>
                </div>
            );
        },
    },
    {
        field: 'Certificates',
        headerName: 'Certificates',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 260,
        renderCell: (params) => {
            return (
                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                    <a target="_blank" href={params?.row?.certificate}>
                    <DownloadForOfflineIcon />
                    </a>
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
    const [data1, setData1] = React.useState([]);
    const [data,setData] = React.useState("");
    const { id } = useParams();

    const getData = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/result/${id}`,
            headers: {

            }
        };
        axios(config)
            .then(function (response) {
                setData1(response.data.message)
                console.log(response,response.data.message)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getCompetionById = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/competition/${id}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data.message)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    React.useEffect(() => {
        getData();
        getCompetionById();
    }, [])

    return (
        <>
            <NavBar />
            <div className='mb-20 mt-10'>

                <div className='h-[500px] w-[92%] max-w-screen-xl mx-auto'>

                    <h1 className='text-3xl font-semibold'>{data.title} (परिणाम)</h1>
                    <DataGrid
                        rows={data1}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[20]}
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

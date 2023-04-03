import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import NavBar from '../Home/Component/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
const columns = [
    { field: 'position', headerName: 'पद', width: 200 },
    {
        field: 'fullName',
        headerName: 'पूरा नाम',
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
        headerName: 'प्रमाण पत्र',
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



export default function Competition() {
    const [data1, setData1] = React.useState([]);
    const [data, setData] = React.useState("");
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
                        components={{
                            NoRowsOverlay: () => (
                                <Stack height="100%" alignItems="center" justifyContent="center">
                                    अभी कोई परिणाम घोषित नहीं हुआ है 
                                </Stack>
                            ),
                            NoResultsOverlay: () => (
                                <Stack height="100%" alignItems="center" justifyContent="center">
                                    अभी कोई परिणाम घोषित नहीं हुआ है
                                </Stack>
                            )
                        }}
                    />
                </div>

            </div>
            <Footer />
        </>
    );
}

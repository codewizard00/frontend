import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useParams } from "react-router-dom";
import axios from "axios";
import Faq from 'react-faq-component';


const UserProfile = () => {
    const [value, setValue] = React.useState('1');
    const { id } = useParams();
    const [poemData, setPoemData] = React.useState([]);
    const [bookData, setBookData] = React.useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = React.useState([]);

   

    React.useEffect(() => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllWriter`,
            headers: {}
        };
        axios(config)
            .then(function (response) {
                setData(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/writercontent/${id}/poems`,
            headers: {}
        };
        axios(config)
            .then(function (response) {
                setPoemData(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/writercontent/${id}/books`,
            headers: {}
        };
        axios(config)
            .then(function (response) {
                setBookData(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    const data1 = {
      
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: "Lorem ipsum dolor sit amet, consectetur "
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
            },
            {
                title: "What is the package version",
                content: "v1.0.5"
            }]
    }

    return (
        <>
            <NavBar />

            <section class="pt-16 bg-blueGray-50">
                <div class="w-full px-4 mx-auto">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full px-4 flex justify-center">
                                    <div class="relative">
                                        <img alt="..." src={data.image} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                    </div>
                                </div>
                                <div class="text-center mt-28">
                                    <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        {data.name}
                                    </h3>
                                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                        {data.place}
                                    </div>
                                    <div class="mb-2 text-blueGray-600 mt-2">
                                        <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>

                                    </div>

                                </div>
                                <div class="w-full px-4 text-center">
                                    <Box sx={{ width: '100%', typography: 'body1', mt: "40px" }}>
                                        <TabContext value={value}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                                    <Tab label="कविता" value="1" />
                                                    <Tab label="पुस्तकें" value="2" />
                                                    <Tab label="प्रतियोगिता" value="3" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1"><Faq data={data1}/></TabPanel>
                                            <TabPanel value="2"><Faq data={data1}/></TabPanel>
                                            <TabPanel value="3">Item Three</TabPanel>
                                        </TabContext>
                                    </Box>
                                </div>
                            </div>
                            {/* 
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            An artist of considerable range, Jenna the name taken
                                            by Melbourne-raised, Brooklyn-based Nick Murphy
                                            writes, performs and records all of his own music,
                                            giving it a warm, intimate feel with a solid groove
                                            structure. An artist of considerable range.
                                        </p>
                                        <a href="javascript:void(0);" class="font-normal text-pink-500">
                                            Show more
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


export default UserProfile;
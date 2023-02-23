import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const UserProfile = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                        <img alt="..." src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674909476/Premsudha/team1_pl9pqr.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                    </div>
                                </div>
                                <div class="text-center mt-28">
                                    <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        सुमत कुमार जैन
                                    </h3>
                                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                        नई दिल्ली, भारत
                                    </div>
                                    <div class="mb-2 text-blueGray-600 mt-2">
                                        <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                        संरक्षक
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
                                            <TabPanel value="1">Item One</TabPanel>
                                            <TabPanel value="2">Item Two</TabPanel>
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
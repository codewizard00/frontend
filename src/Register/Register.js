import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth"
import { auth } from '../Firebase';
import axios from 'axios';
import EmailVerify from '../EmailVerify';
import { Modal } from '@mui/material';
import Toaster from '../toaster';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [userName, setUserName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [emalLogin, setEmailLogin] = React.useState("")
    const [passwordLogin, setPasswordLogin] = React.useState("")

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        const data = await signInWithPopup(auth, provider)
        console.log(data);
    }
    const logout = async () => {
        const data = await signOut(auth);
        console.log(data)
    }
    const facebookSignIn = async () => {
        const provider = new FacebookAuthProvider()
        const data = await signInWithPopup(auth, provider)
        console.log(data);
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const signUp = (e) => {
        e.preventDefault();
        var data = JSON.stringify({
            "email": emalLogin,
            "password": passwordLogin
        });

        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_PROD_URL}user/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("userInfo", JSON.stringify(response.data.message))
                    Toaster("success", "Succesfully Sign Up.")
                    navigate("/")
                }
            })
            .catch(function (error) {
                console.log(error);
                Toaster("error", "Invalid Credentials.")
            });
    }


    const signIn = (e) => {
        e.preventDefault();
        var data = JSON.stringify({
            "username": userName,
            "email": email,
            "password": password,
            "phone": phone
        });

        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_PROD_URL}user/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setOpen(true)
                Toaster('success', "Verify Email Sent To Your Email ID.")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    React.useEffect(() => {
        if (window.location.pathname === "/signup") {
            setValue("2");
        }
    }, [])


    return (
        <>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EmailVerify email={email} />
            </Modal>
            <section class="bg-[#F4F7FF] py-4 lg:py-[120px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div
                                class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                            >
                                <TabContext style={{ backgroundColor: "rgba(244,245,211,255)" }} value={value}>
                                    <Box className="-mt-10 mb-4">
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Sign Up" value="1" />
                                            <Tab label="Sign In" value="2" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1" className='bg-cream'>
                                        <div className=''>
                                            <div class="mb-10 text-center md:mb-16">
                                                <a
                                                    href="javascript:void(0)"
                                                    class="mx-auto inline-block max-w-[160px]"
                                                >
                                                    <img
                                                        src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674493289/Premsudha/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE_%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE_9_szq4sd.jpg"
                                                        alt="logo"
                                                    />
                                                </a>
                                            </div>
                                            <form>
                                                <div class="mb-6">
                                                    <input
                                                        value={emalLogin}
                                                        onChange={(e) => { setEmailLogin(e.target.value) }}
                                                        type="text"
                                                        placeholder="Email"
                                                        class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                                    />
                                                </div>
                                                <div class="mb-6">
                                                    <input
                                                        value={passwordLogin}
                                                        onChange={(e) => { setPasswordLogin(e.target.value) }}
                                                        type="password"
                                                        placeholder="Password"
                                                        class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                                    />
                                                </div>
                                                <div class="mb-10">
                                                    <button
                                                        type="submit"
                                                        onClick={(e) => { signUp(e) }}
                                                        class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                                                    >
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </form>
                                            <p class="mb-6 text-base text-[#adadad]">Connect With</p>
                                            <ul class="-mx-2 mb-12 flex justify-between">
                                                <li class="w-full px-2">
                                                    <a
                                                        onClick={() => { googleSignIn() }}
                                                        class="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                                                    >
                                                        <svg
                                                            width="10"
                                                            height="20"
                                                            viewBox="0 0 10 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="w-full px-2">
                                                    <a
                                                        onClick={() => facebookSignIn()}
                                                        class="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
                                                    >
                                                        <svg
                                                            width="22"
                                                            height="16"
                                                            viewBox="0 0 22 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="w-full px-2">
                                                    <a
                                                        onClick={() => { logout() }}
                                                        class="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                                                    >
                                                        <svg
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                href="javascript:void(0)"
                                                class="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                                            >
                                                Forget Password?
                                            </a>
                                            <p class="text-base text-[#adadad]">
                                                Not a member yet?
                                                <a href="javascript:void(0)" class="text-primary hover:underline">
                                                    Sign In
                                                </a>
                                            </p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel className='bg-cream' value="2">
                                        <>
                                            <div class="mb-10 text-center md:mb-16">
                                                <a
                                                    href="javascript:void(0)"
                                                    class="mx-auto inline-block max-w-[160px]"
                                                >
                                                    <img
                                                        src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674493289/Premsudha/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE_%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE_9_szq4sd.jpg"
                                                        alt="logo"
                                                    />
                                                </a>
                                            </div>
                                            <form>
                                                <div class="mb-6">
                                                    <input
                                                        value={userName}
                                                        onChange={(e) => { setUserName(e.target.value) }}
                                                        type="text"
                                                        placeholder="Username"
                                                        class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                                    />
                                                </div>
                                                <div class="mb-6">
                                                    <input
                                                        value={email}
                                                        onChange={(e) => { setEmail(e.target.value) }}
                                                        type="text"
                                                        placeholder="Email"
                                                        class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                                    />
                                                </div>
                                                <div class="mb-6">
                                                    <input
                                                        value={phone}
                                                        onChange={(e) => { setPhone(e.target.value) }}
                                                        type="text"
                                                        placeholder="Phone"
                                                        class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                                    />
                                                </div>
                                                <div class="mb-6">
                                                    <input
                                                        value={password}
                                                        onChange={(e) => { setPassword(e.target.value) }}
                                                        type="password"
                                                        placeholder="Password"
                                                        class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                                    />
                                                </div>
                                                <div class="mb-10">
                                                    <button
                                                        type="submit"
                                                        onClick={(e) => { signIn(e) }}
                                                        class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                                                    >
                                                        Sign In
                                                    </button>
                                                </div>
                                            </form>
                                            <p class="mb-6 text-base text-[#adadad]">Connect With</p>
                                            <ul class="-mx-2 mb-12 flex justify-between">
                                                <li class="w-full px-2">
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                                                    >
                                                        <svg
                                                            width="10"
                                                            height="20"
                                                            viewBox="0 0 10 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="w-full px-2">
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
                                                    >
                                                        <svg
                                                            width="22"
                                                            height="16"
                                                            viewBox="0 0 22 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="w-full px-2">
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                                                    >
                                                        <svg
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                href="javascript:void(0)"
                                                class="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                                            >
                                                Forget Password?
                                            </a>
                                            <p class="text-base text-[#adadad]">
                                                Not a member yet?
                                                <a href="javascript:void(0)" class="text-primary hover:underline">
                                                    Sign Up
                                                </a>
                                            </p>
                                        </>
                                    </TabPanel>
                                </TabContext>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register;
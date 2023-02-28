import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";
import Toaster from "./toaster";


const EmailVerify = ({ email }) => {
    const navigate = useNavigate()
    const [token, setToken] = useState("");
    const verify = () => {
        var data = JSON.stringify({
            "email": email,
            "token": token
        });
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_PROD_URL}emailVerify`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("userInfo", JSON.stringify(response.data.message))
                    Toaster("success","Succesfully Sign Up.")
                    navigate("/")
                }
            })
            .catch(function (error) {
                Toaster("error","Invalid OTP.")
                console.log(error);
            });
    }
    const resendOTP = () => {
        var data = JSON.stringify({
            "email": email
        });

        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_PROD_URL}resendOtp`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <>

            <div class=" bg-gray-200 py-20 px-3">
                <div class="container mx-auto">
                    <div class="max-w-sm mx-auto md:max-w-lg">
                        <div class="w-full">
                            <div class="bg-white h-64 py-3 rounded text-center">
                                <h1 class="text-2xl font-bold">OTP Verification</h1>
                                <OTPInput value={token} style={{ display: "flex", justifyContent: "center", margin: "30px" }} inputStyles={{ border: "1px solid black" }} onChange={setToken} autoFocus OTPLength={6} otpType="number" disabled={false} secure={false} />
                                <button onClick={() => { verify(); console.log("clikced") }} className="w-40 h-10 bg-blue-700 text-gray-100 font-bold rounded-lg">Verify</button>
                                <ResendOTP style={{ margin: "20px" }} onResendClick={() => resendOTP()} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailVerify;
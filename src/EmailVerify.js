import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import OtpInput from 'react-otp-input';

const EmailVerify = ({ email }) => {

    const [token, setToken] = useState("");
    const verify = () => {
        var data = JSON.stringify({
            "email": email,
            "token": token
        });

        var config = {
            method: 'post',
            url: 'http://localhost:8080/emailVerify',
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
            <div class="h-screen bg-blue-500 py-20 px-3">
                <div class="container mx-auto">
                    <div class="max-w-sm mx-auto md:max-w-lg">
                        <div class="w-full">
                            <div class="bg-white h-64 py-3 rounded text-center">
                                <h1 class="text-2xl font-bold">OTP Verification</h1>
                                <div class="flex flex-col mt-4">
                                    <span>Enter the OTP you received at</span>
                                    <span class="font-bold"></span>
                                </div>
                                <OtpInput
                                    inputStyle="m-2 border h-10 w-10!importantz text-center form-control rounded"
                                    value={token}
                                    onChange={setToken}
                                    numInputs={6}
                                    separator={<span>-</span>}
                                />
                                <div class="flex justify-center text-center mt-5">
                                    <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailVerify;
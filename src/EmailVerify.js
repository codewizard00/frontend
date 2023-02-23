import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';

const EmailVerify = () => {
    const params = useParams();
    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:8080/emailVerify/${params.token}`,
            headers: {
                'Content-Type': 'application/json'
            },
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            <section class="thank-you padding-y-2xl">
                <div class="container max-width-adaptive-sm text-center">
                    <svg class="thank-you__icon margin-bottom-sm margin-x-auto" viewBox="0 0 80 80" aria-hidden="true"><g class="thank-you__icon-group"><circle fill="var(--color-success)" cx="40" cy="40" r="40" /><polyline points="21 41 33 53 59 27" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" /></g></svg>

                    <div class="text-component">
                        <h1 class="text-3xl">Order Confirmed</h1>
                        <p class="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid qui et saepe omnis ipsum amet quasi accusamus.</p>

                        <p class="flex flex-wrap flex-column flex-row@xs gap-2xs justify-center">
                            <Link to="/" class="btn btn--subtle" href="#0">Back To Home</Link>
                            <Link to="/signup" class="btn btn--primary" href="#0">Login</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmailVerify;
import '../Home/Home.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookShow = () => {
    const [data, setData] = useState([])
    const GetAllBook = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllBook`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        GetAllBook();
    }, [])

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center underline-offset-2'>ई पत्रिका</h1>
            <div className="w-4/5 mx-auto flex">
                <div className="w-[0%] lg:w-1/4 ">
                    <img src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907736/Premsudha/aksh_n31d5f.jpg" />
                </div>

                <div class="book-cards w-full lg:w-3/4">
                    {data.map((value, index) => (
                        <>
                            <Link to={`/pdfReader/${value.id}`}>
                                <div class="book-card">
                                    <div class="content-wrapper">
                                        <img src={`${value.image}`} alt="" class="book-card-img" />
                                        <div class="card-content">
                                            <div class="book-name">{value.title}</div>
                                            <div class="book-by">{value.createdAt}</div>
                                            <div class="rate">
                                                <fieldset class="rating book-rate">
                                                    <input type="checkbox" id="star-c1" name="rating" value="5" />
                                                    <label class="full" for="star-c1"></label>
                                                    <input type="checkbox" id="star-c2" name="rating" value="4" />
                                                    <label class="full" for="star-c2"></label>
                                                    <input type="checkbox" id="star-c3" name="rating" value="3" />
                                                    <label class="full" for="star-c3"></label>
                                                    <input type="checkbox" id="star-c4" name="rating" value="2" />
                                                    <label class="full" for="star-c4"></label>
                                                    <input type="checkbox" id="star-c5" name="rating" value="1" />
                                                    <label class="full" for="star-c5"></label>
                                                </fieldset>
                                            </div>
                                            <div class="book-sum card-sum">{value.about}</div>
                                        </div>
                                    </div>
                                    <div class="likes">
                                        <div class="like-name"><span>Aadarsh Kumar</span> and<span> 2 other friends</span> like this</div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BookShow;
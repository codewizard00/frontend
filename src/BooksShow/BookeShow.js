import '../Home/Home.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Book.scss"

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
        <div>
        <div className='my-10  bg-gray-100'>
            <div className='flex space-around'>
            <h1 className='py-10 text-3xl'>ई पत्रिका</h1>
            </div>
            <div class="containe flex flex-wrap justify-center gap-20">
                <div class="mobile-layout">
                    <div class="book-cover">
                        <img class="book-top" src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907736/Premsudha/aksh_n31d5f.jpg" alt="book-top" />
                        <img class="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
                    </div>
                    <div class="preface">
                        <div class="content">
                            <div class="header">
                                <div class="title">The Diary of a Young Girl</div>
                                <div class="icon">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div class="author">by Anne Frank</div>
                            <div class="body">
                                <p>
                                    also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands
                                </p>
                                <p>
                                    Anne calls her diary "Kitty", so almost all of the letters are written to Kitty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-layout">
                    <div class="book-cover">
                        <img class="book-top" src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907736/Premsudha/aksh_n31d5f.jpg" alt="book-top" />
                        <img class="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
                    </div>
                    <div class="preface">
                        <div class="content">
                            <div class="header">
                                <div class="title">The Diary of a Young Girl</div>
                                <div class="icon">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div class="author">by Anne Frank</div>
                            <div class="body">
                                <p>
                                    also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands
                                </p>
                                <p>
                                    Anne calls her diary "Kitty", so almost all of the letters are written to Kitty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-layout">
                    <div class="book-cover">
                        <img class="book-top" src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907736/Premsudha/aksh_n31d5f.jpg" alt="book-top" />
                        <img class="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
                    </div>
                    <div class="preface">
                        <div class="content">
                            <div class="header">
                                <div class="title">The Diary of a Young Girl</div>
                                <div class="icon">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div class="author">by Anne Frank</div>
                            <div class="body">
                                <p>
                                    also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands
                                </p>
                                <p>
                                    Anne calls her diary "Kitty", so almost all of the letters are written to Kitty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BookShow;
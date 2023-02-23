import '../Home/Home.scss'
const BookShow = () => {
    return (
        <div className='my-10'>
        <h1 className='text-4xl font-bold text-center underline-offset-2'>ई पत्रिका</h1>
            <div className="w-4/5 mx-auto flex">
                <div className="w-[0%] lg:w-1/4 ">
                    <img src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907736/Premsudha/aksh_n31d5f.jpg"/>
                    {/* <div className="bg-[url('https://res.cloudinary.com/valarmorghullis/image/upload/v1674907736/Premsudha/aksh_n31d5f.jpg')] bg-contain bg-no-repeats">

                    </div> */}
                </div>
                <div class="book-cards w-full lg:w-3/4">
                    <div class="book-card">
                        <div class="content-wrapper">
                            <img src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907736/Premsudha/aksh_n31d5f.jpg" alt="" class="book-card-img" />
                            <div class="card-content">
                                <div class="book-name">Changes Are</div>
                                <div class="book-by">by Richard Russo</div>
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
                                    <span class="book-voters card-vote float-left">1.987 voters</span>
                                </div>
                                <div class="book-sum card-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. </div>
                            </div>
                        </div>
                        <div class="likes">
                            <div class="like-profile">
                                <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" class="like-img" />
                            </div>
                            <div class="like-profile">
                                <img src="https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png" alt="" class="like-img" />
                            </div>
                            <div class="like-profile">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="" class="like-img" />
                            </div>
                            <div class="like-name"><span>Samantha William</span> and<span> 2 other friends</span> like this</div>
                        </div>
                    </div>
                    <div class="book-card">
                        <div class="content-wrapper">
                            <img src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674493126/Premsudha/_%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%A6_5th_Edition_-_Prem_Sudha_1_yvx3lb.png" alt="" class="book-card-img" />
                            <div class="card-content">
                                <div class="book-name">Dominicana</div>
                                <div class="book-by">by Angie Cruz</div>
                                <div class="rate">
                                    <fieldset class="rating book-rate">
                                        <input type="checkbox" id="star-c6" name="rating" value="5" />
                                        <label class="full" for="star-c6"></label>
                                        <input type="checkbox" id="star-c7" name="rating" value="4" />
                                        <label class="full" for="star-c7"></label>
                                        <input type="checkbox" id="star-c8" name="rating" value="3" />
                                        <label class="full" for="star-c8"></label>
                                        <input type="checkbox" id="star-c9" name="rating" value="2" />
                                        <label class="full" for="star-c9"></label>
                                        <input type="checkbox" id="star-c10" name="rating" value="1" />
                                        <label class="full" for="star-c10"></label>
                                    </fieldset>
                                    <span class="book-voters card-vote float-left">1.987 voters</span>
                                </div>
                                <div class="book-sum card-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. </div>
                            </div>
                        </div>
                        <div class="likes">
                            <div class="like-profile">
                                <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" class="like-img" />
                            </div>
                            <div class="like-name"><span>Kimberly Jones</span> like this</div>
                        </div>
                    </div>
                    <div class="book-card">
                        <div class="content-wrapper">
                            <img src="https://premsudha.com/wp-content/uploads/2022/02/5324aed2266a47d7b3aaaff2fffc76a1-0001-768x1086.jpg" alt="" class="book-card-img" />
                            <div class="card-content">
                                <div class="book-name">The Travellers</div>
                                <div class="book-by">by Regina Porter</div>
                                <div class="rate">
                                    <fieldset class="rating book-rate">
                                        <input type="checkbox" id="star-c11" name="rating" value="5" />
                                        <label class="full" for="star-c11"></label>
                                        <input type="checkbox" id="star-c12" name="rating" value="4" />
                                        <label class="full" for="star-c12"></label>
                                        <input type="checkbox" id="star-c13" name="rating" value="3" />
                                        <label class="full" for="star-c13"></label>
                                        <input type="checkbox" id="star-c14" name="rating" value="2" />
                                        <label class="full" for="star-c14"></label>
                                        <input type="checkbox" id="star-c15" name="rating" value="1" />
                                        <label class="full" for="star-c15"></label>
                                    </fieldset>
                                    <span class="book-voters card-vote float-left">1.987 voters</span>
                                </div>
                                <div class="book-sum card-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. </div>
                            </div>
                        </div>
                        <div class="likes">
                            <div class="like-profile">
                                <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" class="like-img" />
                            </div>
                            <div class="like-profile">
                                <img src="https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png" alt="" class="like-img" />
                            </div>
                            <div class="like-name"><span>Adam</span> and<span> Kimberly</span> like this</div>
                        </div>
                    </div>
                    <div class="book-card">
                        <div class="content-wrapper">
                            <img src="https://premsudha.com/wp-content/uploads/2022/02/5324aed2266a47d7b3aaaff2fffc76a1-0001-768x1086.jpg" alt="" class="book-card-img" />
                            <div class="card-content">
                                <div class="book-name">Afternoon Of A Faun</div>
                                <div class="book-by">by James Lasdun</div>
                                <div class="rate">
                                    <fieldset class="rating book-rate">
                                        <input type="checkbox" id="star-c16" name="rating" value="5" />
                                        <label class="full" for="star-c16"></label>
                                        <input type="checkbox" id="star-c17" name="rating" value="4" />
                                        <label class="full" for="star-c17"></label>
                                        <input type="checkbox" id="star-18" name="rating" value="3" />
                                        <label class="full" for="star-c18"></label>
                                        <input type="checkbox" id="star-c19" name="rating" value="2" />
                                        <label class="full" for="star-c19"></label>
                                        <input type="checkbox" id="star-c20" name="rating" value="1" />
                                        <label class="full" for="star-c20"></label>
                                    </fieldset>
                                    <span class="book-voters card-vote float-left">1.987 voters</span>
                                </div>
                                <div class="book-sum card-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. </div>
                            </div>
                        </div>
                        <div class="likes">
                            <div class="like-profile">
                                <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" class="like-img" />
                            </div>
                            <div class="like-profile">
                                <img src="https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png" alt="" class="like-img" />
                            </div>
                            <div class="like-profile">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="" class="like-img" />
                            </div>
                            <div class="like-name"><span>Samantha William</span> and<span> 2 other friends</span> like this</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookShow;
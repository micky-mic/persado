"use client";

import { submitJourney } from '@/app/actions/journey/action';
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "@/app/actions/journey/data";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import JourneySuccessModal from '../successModal/JourneySuccessModal';
import Image from 'next/image';

function Submit() {

    const { pending } = useFormStatus();

    return (
        <>

            <button type="submit" className={pending ? "btn global-white-btn managedDisabled" : "btn global-white-btn"}> {
                pending ?
                    <> Please wait<i className="fa fa-circle-notch rotating-spinner"></i></>
                    :
                    <>
                        Boost <i className='fa fa-arrow-right'></i>
                    </>
            }
            </button>
        </>
    )
}

const SubmitJourney = () => {

    const { push } = useRouter();

    const [ratings, setRatings] = useState(5);

    const handleClick = (index) => {
        setRatings(index + 1);
    };

    const rating = [
        1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10,
        2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10,
        3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 4.9, 5
    ];

    const [info, setInfo] = useState({
        sales: "",
        popularity: "",
        date: "",
        rating: ""
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [myState, setMyState] = useState({});
    const [loading, setLoading] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isNextData, setIsNextData] = useState(false);
    // const [isNextData, setIsNextData] = useState(false);

    const handleForm = async () => {
        try {
            const response = await submitJourney();

            if (response.status === 201) {
                if (response?.isNextJourney) {
                    setIsNextData(true);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000)
                } else {
                    setIsSuccess(true);
                    setIsPressed(true);
                    toast.success(response.message);
                    setTimeout(() => {
                        push("/dashboard/journey");
                    }, 2000)
                }
            } else {
                toast.error(response.message);
                setIsPressed(true);
                push("/dashboard/recharge");
            }

        } catch (error) {
            setIsPressed(false);
            console.log(error)
        }
    }

    const handleProduct = async () => {
        setLoading(true);
        try {
            const response = await fetchProduct();
            setMyState(response.data);
            setLoading(false);


            const infoFromLocal = JSON.parse(localStorage.getItem("journeyInfo"));
            if (infoFromLocal === null) {
                let getRandomSales;
                let getRandomPopularity;
                let randomRating;

                if (response?.data?.product?.isJourneyProduct) {
                    const filteredRating = rating.filter((r) => r < 3);
                    randomRating = filteredRating[Math.floor(Math.random() * filteredRating.length)];

                    getRandomSales = () => Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
                    getRandomPopularity = () => Math.floor(Math.random() * (30 - 10 + 1)) + 10;
                } else {
                    const filteredRating = rating.filter((r) => r > 3);
                    randomRating = filteredRating[Math.floor(Math.random() * filteredRating.length)];

                    getRandomSales = () => Math.floor(Math.random() * (20000 - 10001 + 1)) + 10001;
                    getRandomPopularity = () => Math.floor(Math.random() * (100 - 31 + 1)) + 31;
                }

                const getRandomDate = () => {
                    const currentDate = new Date();
                    const day = String(currentDate.getDate()).padStart(2, '0');
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                    const year = currentDate.getFullYear();
                    return `${day}-${month}-${year}`;
                };

                const newInfo = {
                    _id: response?.data?.product?._id,
                    sales: getRandomSales(),
                    popularity: getRandomPopularity(),
                    rating: randomRating,
                    date: getRandomDate()
                };

                setInfo(newInfo);
                localStorage.setItem("journeyInfo", JSON.stringify(newInfo));
            } else if (infoFromLocal?._id === response?.data?.product?._id) {
                const newInfo = {
                    _id: infoFromLocal?._id,
                    sales: infoFromLocal?.sales,
                    popularity: infoFromLocal?.popularity,
                    date: infoFromLocal?.date,
                    rating: infoFromLocal?.rating,
                };
                setInfo(newInfo);
            } else {

                let getRandomSales;
                let getRandomPopularity;
                let randomRating;

                if (response?.data?.product?.isJourneyProduct) {
                    const filteredRating = rating.filter((r) => r > 3);
                    randomRating = filteredRating[Math.floor(Math.random() * filteredRating.length)];

                    getRandomSales = () => Math.floor(Math.random() * (20000 - 10001 + 1)) + 10001;
                    getRandomPopularity = () => Math.floor(Math.random() * (100 - 31 + 1)) + 31;
                } else {
                    const filteredRating = rating.filter((r) => r < 3);
                    randomRating = filteredRating[Math.floor(Math.random() * filteredRating.length)];

                    getRandomSales = () => Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
                    getRandomPopularity = () => Math.floor(Math.random() * (30 - 10 + 1)) + 10;
                }

                const getRandomDate = () => {
                    const currentDate = new Date();
                    const day = String(currentDate.getDate()).padStart(2, '0');
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                    const year = currentDate.getFullYear();
                    return `${day}-${month}-${year}`;
                };

                const newInfo = {
                    _id: response?.data?.product?._id,
                    sales: getRandomSales(),
                    popularity: getRandomPopularity(),
                    rating: randomRating,
                    date: getRandomDate()
                };

                setInfo(newInfo);
                localStorage.setItem("journeyInfo", JSON.stringify(newInfo));
            }

        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        handleProduct();
    }, []);

    return (
        <>        
            <div className='background-color page_animation'>
                {
                    isSuccess
                        ?
                        <JourneySuccessModal setIsModal={setIsSuccess} />
                        :
                        <></>
                }
                {
                    loading
                        ?
                        <Loader />
                        :
                        <></>
                }
                {
                    isNextData
                        ?
                        <div className="fetchNextData">
                            <h3>Please wait....Matching next data <i className="fa fa-spinner"></i></h3>
                        </div>
                        :
                        <></>
                }
                <section className="journey-section">
                    <Breadcrumb
                        link="/dashboard/journey"
                        title="Submit"
                        isColor="#fff"
                    />
                    <div className='submit-journey-page-wrapper'>

                        <div className='products-details-wrapper'>
                            <div className='product-submit-img'>
                                <Image
                                    src={myState?.product?.url ?? ""}
                                    alt='product'
                                    height={100}
                                    width={100}
                                    sizes="(max-width: 768px) 50vw, 100px"
                                    quality={90}
                                    unoptimized
                                />
                            </div>
                            <div className='plam-rating-parent'>
                                <div className='plam-rating-child'>
                                    <ul>
                                        {Array.from({ length: 5 }, (v, i) => (
                                            <li key={i} onClick={() => handleClick(i)}>
                                                <i className={`fa fa-star ${i < ratings ? 'rated' : ''}`}></i>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="plam-rating-child">
                                    <p>({ratings ?? 0}/5)</p>
                                </div>
                            </div>
                            <div className='product-name'>
                                <h2 className='playfair-font'>{myState?.product?.productName}</h2>
                            </div>
                            <div className='products-details-parent'>
                                <div className='products-details-child'>
                                    <div className='products-details-sub-child'>
                                        <div className='products-details-grand-child'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 12 13"
                                            >
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M8.292 3.292c1.772 0 3.208-.513 3.208-1.146S10.064 1 8.292 1s-3.209.513-3.209 1.146S6.52 3.292 8.292 3.292"
                                                ></path>
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M5.083 2.375V3.75c0 .633 1.436 1.146 3.209 1.146 1.772 0 3.208-.513 3.208-1.146V2.375"
                                                ></path>
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M6.814 6.371c.442.082.945.129 1.478.129 1.772 0 3.208-.513 3.208-1.146V3.98M5.083 3.98v.978"
                                                ></path>
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M6.922 7.995c.416.07.88.11 1.37.11 1.772 0 3.208-.514 3.208-1.147V5.583"
                                                ></path>
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M6.905 9.596c.42.072.89.112 1.387.112 1.772 0 3.208-.513 3.208-1.146V7.188M3.708 7.188c1.772 0 3.209-.513 3.209-1.146S5.48 4.896 3.708 4.896.5 5.409.5 6.042s1.436 1.146 3.208 1.146"
                                                ></path>
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M.5 6.27v1.376c0 .633 1.436 1.146 3.208 1.146s3.209-.513 3.209-1.146V6.27"
                                                ></path>
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M.5 7.875V9.25c0 .633 1.436 1.146 3.208 1.146s3.209-.513 3.209-1.146V7.875"
                                                ></path>
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="M.5 9.48v1.374C.5 11.487 1.936 12 3.708 12s3.209-.513 3.209-1.146V9.48"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className='products-details-grand-child'>
                                            <h3>{info?.sales}</h3>
                                            <p>Sales</p>
                                        </div>
                                    </div>
                                    <div className='products-details-sub-child'>
                                        <div className='products-details-grand-child'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 12 12"
                                            >
                                                <path
                                                    stroke="#AE9570"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="0.75"
                                                    d="m6.324 1.21 1.265 2.687a.36.36 0 0 0 .272.207l2.83.43c.296.046.414.427.2.646L8.843 7.27a.39.39 0 0 0-.104.335l.483 2.952c.05.309-.258.545-.523.399L6.168 9.562a.35.35 0 0 0-.336 0l-2.53 1.394c-.265.145-.575-.09-.524-.399l.483-2.952a.39.39 0 0 0-.104-.335L1.11 5.18c-.214-.22-.096-.6.2-.645l2.83-.431a.36.36 0 0 0 .272-.207L5.676 1.21a.354.354 0 0 1 .648 0"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className='products-details-grand-child'>
                                            <h3>{info?.popularity} %</h3>
                                            <p>Popularity</p>
                                        </div>
                                    </div>
                                    <div className='products-details-sub-child'>
                                        <div className='products-details-grand-child'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 10"
                                            >
                                                <path
                                                    fill="#AE9570"
                                                    d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0m0 9.167A4.167 4.167 0 1 1 5 .833a4.167 4.167 0 0 1 0 8.334"
                                                ></path>
                                                <path
                                                    fill="#AE9570"
                                                    d="M5.417 4.827V2.5a.417.417 0 0 0-.834 0V5c0 .11.044.216.122.295l1.25 1.25a.417.417 0 0 0 .59-.59z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className='products-details-grand-child'>
                                            <h3>{info?.date?.toLocaleString()}</h3>
                                            <p>Date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-name-and-value'>
                            <div className="product-info-wrapper">
                                <div className="product-info-parent">
                                    <div className="product-info-childs">
                                        <p>Lot Price</p>
                                    </div>
                                    <div className="product-info-childs">
                                        <h3>$ {myState?.product?.productPrice?.toFixed(2) ?? ""}</h3>
                                    </div>
                                </div>
                                <div className="product-info-parent">
                                    <div className="product-info-childs">
                                        <p>Dividends</p>
                                    </div>
                                    <div className="product-info-childs">
                                        <h3>$ {myState?.commission?.toFixed(2) ?? ""}</h3>
                                    </div>
                                </div>
                                <div className="product-info-parent">
                                    <div className="product-info-childs">
                                        <p>Packages Details</p>
                                    </div>
                                    <div className="product-info-childs">
                                        <h3 style={{ textTransform: "uppercase" }}>RLD{myState?.product?._id?.slice(-4)}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='boder-line-div'></div>
                        </div>
                        <div className="product-review">
                            <label>Review</label>
                            <input
                                placeholder="Write your comment"
                            />
                        </div>
                        <div className="submit-btn">
                            <form action={handleForm} translate="no">
                                {
                                    isPressed
                                        ?
                                        <div className="isPressedValidation">
                                            <p>Processing Please Wait <i className="fa fa-circle-notch rotating-spinner"></i></p>
                                        </div>
                                        :
                                        myState?.product?.url
                                            ?
                                            <Submit />
                                            :
                                            ""
                                }
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SubmitJourney;
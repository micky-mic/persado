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
import OptimizeCard from '../OptimizeCard';

function Submit() {

    const { pending } = useFormStatus();

    return (
        <>

            <button type="submit" className={pending ? "primary-btn managedDisabled" : "primary-btn"}> {
                pending ?
                    <> Please wait<i className="fa fa-circle-notch rotating-spinner"></i></>
                    :
                    <>
                        Submit
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

    const [optimizedComplete, setOptimizedComplete] = useState(false);

    return (
        <>
            <div className=' page_animation'>
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
                        title="Optimize Now"
                        isColor="#fff"
                        bg="#000"
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
                              <div className='product-name'>
                                <h2 className='playfair-font'>{myState?.product?.productName}</h2>
                            </div>

                            <div className='product-information'>
                                <div className='protext'>
                                    <h1>Applicant Tracking System</h1>
                                    <p>Accurate placements at the speed of light</p>
                                </div>
                                <div className='bal-info'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 327 111"
                                    >
                                        <rect width="102.333" height="111" fill="#F8FAFC" rx="8"></rect>
                                        <g clipPath="url(#clip0_29_10251)">
                                            <path
                                                fill="url(#paint0_radial_29_10251)"
                                                fillRule="evenodd"
                                                d="M45.471 17.945q3.258-.012 6.516.024 2.729.478 3.211 3.21.035.54.023 1.079 1.993.058 2.368 2.015.022 1.83.047 3.657.387.293.562.75.035.984.023 1.968 1.698.465 1.266 2.204 2.115-.203 2.836 1.78.398 2.007-1.383 2.977a2.68 2.68 0 0 1-2.297-.117q-1.946.745-3.773-.234a3.55 3.55 0 0 1-1.899.726 4.23 4.23 0 0 1-2.765-.562 1.12 1.12 0 0 1-.516-.914q-3.843.012-7.687-.024-1.652-.198-2.086-1.804a605 605 0 0 1 0-10.64q.502-1.747 2.32-1.782-.222-2.828 2.297-4.055.467-.17.937-.258m.047.797q3.212-.012 6.422.024 1.883.381 2.414 2.226.093.63.07 1.266h-1.078a3.9 3.9 0 0 0-.164-1.36q-.443-.933-1.476-1.054a189 189 0 0 0-5.953 0q-1.11.148-1.524 1.195-.096.605-.07 1.219h-1.125q-.186-2.797 2.484-3.516m.282 1.875q2.93-.012 5.859.024.745.159.867.914.035.35.024.703h-7.594q-.012-.446.023-.89.202-.613.82-.75m-5.157 6.188h.938q-.032 1.435.07 2.86a.36.36 0 0 0 .258.163q.843.046 1.687 0a.52.52 0 0 0 .258-.258q.036-1.382.024-2.765h12.937v.75a6.14 6.14 0 0 0-2.719.023q-1.835.564-1.359 2.461a3.9 3.9 0 0 0-2.672.68 1.4 1.4 0 0 0-.398.773 190 190 0 0 0-.024 4.219q-3.82.012-7.64-.023-1.234-.226-1.336-1.477-.036-3.703-.024-7.406m1.735 0h.703v2.25h-.703zm11.203 3.328q-.108-.001-.07-.094a.2.2 0 0 1 .07.094m2.719.328q.556-.111 1.078-.375l.047.094a.5.5 0 0 1-.188.258 9 9 0 0 1-.937.023m-2.063-.094a6.6 6.6 0 0 0 2.063.094 3.7 3.7 0 0 0-1.313.469 2.7 2.7 0 0 0-.75-.563m-3.797 2.344q1.96.84 3.914 0a.46.46 0 0 1-.258.445q-1.571.742-3.187.094a.74.74 0 0 1-.469-.54m4.735.328q.004-.038.046-.047 1.725.749 3.446 0 .05.132-.07.211a2.6 2.6 0 0 1-1.641.445 2.56 2.56 0 0 1-1.594-.398 1.2 1.2 0 0 1-.187-.21m4.359.61q.255-.004.023.14a1.3 1.3 0 0 1-.07.328.6.6 0 0 0-.352.375 3.4 3.4 0 0 0 0 .797q.255.489.82.469a5 5 0 0 1-.655.07q-.213.108-.188.352-.013.384.375.422.049.184.14.351-1.306-.265-1.406-1.617.108-1.278 1.313-1.688m.656.046q.975.117 1.336 1.078.36 1.587-1.148 2.18a.2.2 0 0 1-.188 0q.141-.2.188-.445.44-.24.375-.75.02-.86-.844-.867l.516-.047q.468-.175.257-.633a.4.4 0 0 0-.351-.14.47.47 0 0 0-.14-.376m-9.75.235q1.96.84 3.914 0a.31.31 0 0 1-.07.304 3.05 3.05 0 0 1-1.852.54 4 4 0 0 1-1.43-.258.82.82 0 0 1-.562-.586m7.125.515a.45.45 0 0 1-.14.305 3.2 3.2 0 0 1-2.063-.375.34.34 0 0 1-.164-.305q.513.29 1.102.352.632.035 1.265.023m-7.125.703q1.96.842 3.914 0a.32.32 0 0 1-.117.352q-1.203.704-2.578.422a1.97 1.97 0 0 1-1.148-.54.4.4 0 0 1-.07-.234m4.735.047a4.8 4.8 0 0 0 2.25.399q.064.12.046.258a3.1 3.1 0 0 1-2.156-.399.42.42 0 0 1-.14-.258m0 1.125q1.256.554 2.601.282.069.126.164.234a3.19 3.19 0 0 1-2.484-.164.62.62 0 0 1-.281-.352m-4.735.047q1.96.84 3.914 0a.32.32 0 0 1-.117.352 3.03 3.03 0 0 1-1.805.492 3.65 3.65 0 0 1-1.43-.258.82.82 0 0 1-.562-.586"
                                                clipRule="evenodd"
                                            ></path>
                                        </g>
                                        <text
                                            xmlSpace="preserve"
                                            fill="#65717B"
                                            fontFamily="Poppins"
                                            fontSize="10"
                                            fontWeight="300"
                                            letterSpacing="0em"
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            <tspan x="37.08" y="59">
                                                Value
                                            </tspan>
                                        </text>
                                        <text
                                            xmlSpace="preserve"
                                            fill="#262B30"
                                            fontFamily="Poppins"
                                            fontSize="14"
                                            fontWeight="bold"
                                            letterSpacing="0em"
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            <tspan x="17.418" y="89.4">
                                                $ {myState?.product?.productPrice?.toFixed(2) ?? ""}
                                            </tspan>
                                        </text>
                                        <rect width="102.333" height="111" x="112.333" fill="#F8FAFC" rx="8"></rect>
                                        <path
                                            fill="url(#paint1_radial_29_10251)"
                                            fillRule="evenodd"
                                            d="M154.195 17.476q5.371-.035 10.735.07a.55.55 0 0 1 .164.212l.047 2.625q1.482 1.441 1.64 3.515l.047 1.828a5.3 5.3 0 0 1 1.945.914q.446.387.586.961l.047 2.485q3.43-.664 5.016 2.437 1.116 3.308-1.711 5.32-2.295 1.274-4.547-.07a7.8 7.8 0 0 1-4.734.54q-3.914-.756-2.813-4.665-3.258.012-6.515-.023-1.444-.295-1.852-1.711a379 379 0 0 1 0-8.39 5.25 5.25 0 0 1 1.594-3.141l.047-2.625a.54.54 0 0 1 .304-.282m.188 3.47q5.109-.012 10.219.022a4.55 4.55 0 0 1 1.382 2.977q.036.82.024 1.64a8.15 8.15 0 0 0-3.75.446 3.64 3.64 0 0 0-1.383 1.008 2.2 2.2 0 0 0-.234.562q-.036 1.407-.024 2.813h-7.64q-.031-3.4.07-6.797a4.96 4.96 0 0 1 1.336-2.672m7.031 8.343a6.4 6.4 0 0 0 3.586.937 6.14 6.14 0 0 0 3.539-.937q.082.396.024.797-.241.498-.727.773-2.53 1.124-5.156.234a2.12 2.12 0 0 1-1.242-1.007q-.036-.398-.024-.797m0 2.062a6.6 6.6 0 0 0 3.563.938q.9-.026 1.781-.164-.327.63-.516 1.312a7.1 7.1 0 0 1-3.562-.281 2.8 2.8 0 0 1-1.102-.727l-.14-.28q-.036-.399-.024-.798m9 0a.41.41 0 0 1 .399.282q.035.303.023.609.282-.012.562.023.47.33 0 .657-.632.022-1.265.047l-.07.07a2.6 2.6 0 0 0 0 .703q1.989-.072 1.5 1.875a.96.96 0 0 1-.727.516q.012.329-.023.656-.328.468-.657 0-.035-.327-.023-.656a1.8 1.8 0 0 1-.656-.07q-.324-.401.14-.61l1.266-.047q.08-.381.023-.773l-.07-.07q-1.79.155-1.477-1.618a.98.98 0 0 1 .727-.703q.058-.326.07-.656a.6.6 0 0 1 .258-.235m-9 2.063a6.6 6.6 0 0 0 3.563.937q.635-.02 1.265-.093a3 3 0 0 0 .188 1.195 7.16 7.16 0 0 1-3.61-.188 3 3 0 0 1-1.242-.773l-.14-.281q-.036-.398-.024-.797m0 2.062a6.9 6.9 0 0 0 3.563.938q.851-.026 1.687-.188.354.509.797.961a6.83 6.83 0 0 1-4.313.235 3.45 3.45 0 0 1-1.523-.82 1.7 1.7 0 0 1-.187-.329q-.036-.397-.024-.797"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="url(#paint2_radial_29_10251)"
                                            fillRule="evenodd"
                                            d="M158.789 22.352a.58.58 0 0 1 .492.14q.1.438.071.89.375-.01.75.024.375.353 0 .704l-.188.046-1.406.047a.4.4 0 0 0-.07.117q-.048.375 0 .75a.21.21 0 0 0 .117.118q2.12-.205 1.711 1.898-.175.679-.868.797a6 6 0 0 0-.07.75q-.257.462-.68.14l-.07-.14q-.035-.375-.023-.75-.33.012-.657-.023-.532-.343-.046-.75l1.5-.047.117-.118a3.4 3.4 0 0 0 0-.797l-.117-.117q-2.093.228-1.711-1.851.185-.712.914-.797-.012-.4.023-.797a.52.52 0 0 1 .211-.234"
                                            clipRule="evenodd"
                                        ></path>
                                        <text
                                            xmlSpace="preserve"
                                            fill="#65717B"
                                            fontFamily="Poppins"
                                            fontSize="10"
                                            fontWeight="300"
                                            letterSpacing="0em"
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            <tspan x="132.455" y="59">
                                                Commission
                                            </tspan>
                                        </text>
                                        <text
                                            xmlSpace="preserve"
                                            fill="#262B30"
                                            fontFamily="Poppins"
                                            fontSize="14"
                                            fontWeight="bold"
                                            letterSpacing="0em"
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            <tspan x="129.751" y="89.4">
                                                $ {myState?.commission?.toFixed(2) ?? ""}
                                            </tspan>
                                        </text>
                                        <rect width="102.333" height="111" x="224.667" fill="#F8FAFC" rx="8"></rect>
                                        <path
                                            fill="url(#paint3_radial_29_10251)"
                                            fillRule="evenodd"
                                            d="M273.466 16.726q1.323-.186 1.711 1.078.242.322.633.211.894-.609 1.781 0 .622.627.352 1.477l-1.43 3.82q1.429.396 1.078 1.828a8.08 8.08 0 0 1 3.563 3.446q1.994.039 3.984.117.775.258.961 1.055.046 3.585 0 7.171-.194.827-1.008 1.055l-5.765.047a6.6 6.6 0 0 1-3.094 1.172q-2.391.047-4.781 0-3.324-.465-5.086-3.305-1.374-2.57-.61-5.39 1.026-3.615 4.336-5.368-.33-1.425 1.078-1.828a305 305 0 0 1-1.476-4.008q-.106-1.675 1.57-1.57.332.084.609.281.392.111.633-.21.203-.8.961-1.079m-2.203 7.36q2.602-.012 5.203.023.625.3.305.914a.8.8 0 0 1-.258.211q-2.649.046-5.297 0-.67-.333-.258-.96a1 1 0 0 1 .305-.188m-.75 1.734.516.211q2.813.046 5.625 0 .243-.086.468-.211a7.73 7.73 0 0 1 3.141 2.79 64 64 0 0 1-3.469 0q-1.845-1.407-4.125-.892-3.338 1.062-3.562 4.57.114 2.902 2.648 4.266.045 1.077 1.055 1.43l4.828.047a6.3 6.3 0 0 1-2.156.422 57 57 0 0 1-3.281 0q-3.46-.165-5.227-3.117-1.232-2.594-.234-5.297 1.086-2.832 3.773-4.219m3.281 2.531q.699.025 1.36.258-1.174.007-2.344.094a1.3 1.3 0 0 0-.961.914 203 203 0 0 0-.094 6q-2.223-1.541-1.734-4.219.854-2.812 3.773-3.047m.891 1.078h8.531q.34 1.757 2.086 2.157a44 44 0 0 1-.023 3.515q-1.699.41-2.063 2.11h-8.531q-.365-1.702-2.063-2.11a44 44 0 0 1-.023-3.515q1.75-.402 2.086-2.157m8.203 3.61q.587.013.328.539-.384.171-.515-.235a.65.65 0 0 1 .187-.304"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="url(#paint4_radial_29_10251)"
                                            fillRule="evenodd"
                                            d="M278.763 30.32q2.646.087 3.211 2.672.274-.699 1.031-.75 1.252.15 1.078 1.406-.343.882-1.289.774a1.09 1.09 0 0 1-.82-.727q-.5 2.47-3 2.625-2.004-.04-2.812-1.875a3 3 0 0 1-.188-.797q-.345.882-1.289.774-1.095-.35-.82-1.477.516-.984 1.57-.586.4.237.539.68.407-2.376 2.789-2.719m.141.985a.38.38 0 0 0-.258.234q-.035.21-.023.422a.4.4 0 0 0-.235.07.84.84 0 0 0-.328.774q.045 1.028 1.078.89.006.19.047.375a9 9 0 0 0-.891.024.33.33 0 0 0-.164.117q-.13.585.493.562-.127.654.515.54a.95.95 0 0 0 .235-.586.93.93 0 0 0 .445-.47q.047-.375 0-.75-.318-.656-1.055-.515v-.375q.423.012.844-.023a.33.33 0 0 0 .164-.117q.191-.595-.445-.563.082-.517-.422-.61m3.984 1.734a.65.65 0 0 0-.187.305q.132.406.515.234.259-.525-.328-.539"
                                            clipRule="evenodd"
                                        ></path>
                                        <text
                                            xmlSpace="preserve"
                                            fill="#65717B"
                                            fontFamily="Poppins"
                                            fontSize="10"
                                            fontWeight="300"
                                            letterSpacing="0em"
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            <tspan x="248.27" y="59">
                                                Total Value
                                            </tspan>
                                        </text>
                                        <text
                                            xmlSpace="preserve"
                                            fill="#262B30"
                                            fontFamily="Poppins"
                                            fontSize="14"
                                            fontWeight="bold"
                                            letterSpacing="0em"
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            <tspan x="242.084" y="89.4">
                                                $ {(
                                                    (myState?.product?.productPrice ?? 0) +
                                                    (myState?.commission ?? 0)
                                                ).toFixed(2)}
                                            </tspan>
                                        </text>
                                        <defs>
                                            <radialGradient
                                                id="paint0_radial_29_10251"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(11.2511 0 0 10.0406 51.144 27.983)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#8556FF"></stop>
                                                <stop offset="1" stopColor="#6B3EFF"></stop>
                                            </radialGradient>
                                            <radialGradient
                                                id="paint1_radial_29_10251"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(11.2556 0 0 10.4977 163.482 27.965)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#8556FF"></stop>
                                                <stop offset="1" stopColor="#6B3EFF"></stop>
                                            </radialGradient>
                                            <radialGradient
                                                id="paint2_radial_29_10251"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(1.37506 0 0 3.28072 158.957 25.625)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#8556FF"></stop>
                                                <stop offset="1" stopColor="#6B3EFF"></stop>
                                            </radialGradient>
                                            <radialGradient
                                                id="paint3_radial_29_10251"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(10.32 0 0 11.2621 275.802 27.964)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#8556FF"></stop>
                                                <stop offset="1" stopColor="#6B3EFF"></stop>
                                            </radialGradient>
                                            <radialGradient
                                                id="paint4_radial_29_10251"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(5.14742 0 0 3 278.957 33.32)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#8556FF"></stop>
                                                <stop offset="1" stopColor="#6B3EFF"></stop>
                                            </radialGradient>
                                            <clipPath id="clip0_29_10251">
                                                <path fill="#fff" d="M39.167 16h24v24h-24z"></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <OptimizeCard onComplete={setOptimizedComplete} />

                                <div
                                    className={`subjourbtn ${!optimizedComplete ? "disabled" : ""
                                        }`}
                                >

                                    <form action={handleForm} translate="no">

                                        {
                                            isPressed
                                                ? (
                                                    <div className="isPressedValidation">
                                                        <p>
                                                            Processing Please Wait
                                                            <i className="fa fa-circle-notch rotating-spinner"></i>
                                                        </p>
                                                    </div>
                                                )
                                                : myState?.product?.url
                                                    ? <Submit />
                                                    : null
                                        }

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SubmitJourney;
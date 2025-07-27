"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import draw from "@/public/related_assets/draw/draw.png";
import draw_backup from "@/public/related_assets/draw/draw_backup.png";
import start from "@/public/related_assets/draw/start.svg";
import coin from "@/public/related_assets/draw/coin.svg";
import loading from "@/public/related_assets/draw/loading.gif";
import { updateLuckyDraw } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LuckyDraw = ({ user }) => {
    const [isDraw, setIsDraw] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [winAmount, setWinAmount] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false); // Track if the game is over

    const [isAnimation, setIsAnimation] = useState(false);

    const router = useRouter();

    // Default dataset for the draw
    const dataSet = [
        { id: 1, winningPrice: 80, animationTriggered: false, isWinner: false },
        { id: 2, winningPrice: 100, animationTriggered: false, isWinner: false },
        { id: 3, winningPrice: 10, animationTriggered: false, isWinner: false },
        { id: 4, winningPrice: 200, animationTriggered: false, isWinner: false },
        { id: 5, winningPrice: "", animationTriggered: false, isStartBtn: true, isWinner: false },
        { id: 6, winningPrice: 0, animationTriggered: false, isWinner: false },
        { id: 7, winningPrice: 5000, animationTriggered: false, isWinner: false },
        { id: 8, winningPrice: 1000, animationTriggered: false, isWinner: false },
        { id: 9, winningPrice: 500, animationTriggered: false, isWinner: false },
    ];

    const [allList, setAllList] = useState(dataSet);

    const loopCountRef = useRef(0); // Track loop count without triggering re-renders
    const currentIndexRef = useRef(0); // Keep track of the current index
    const timeoutRef = useRef(null); // Track timeout to cancel/clear it if needed

    const updateBackend = async () => {

        try {
            const res = await updateLuckyDraw(winAmount);

            if (res.status === 201) {

            } else {
                toast.error(res.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const startGame = () => {

        if (!user?.number_of_draws || user?.number_of_draws <= 0) {
            return toast.error("You have 0 chance for rewards");
        }

        setIsButtonDisabled(true);
        loopCountRef.current = 0; // Reset loop count
        currentIndexRef.current = 0; // Start from the first item
        setIsGameOver(false); // Reset the game over state
        animateDraw(); // Start animation
    };

    const animateDraw = () => {
        // Stop the loop if we have completed 5 loops
        if (loopCountRef.current >= 5) {
            clearTimeout(timeoutRef.current); // Clear any pending timeouts
            // Trigger final animation for the winning prize
            setIsGameOver(true); // Set the game as over
            // Reset all animationTriggered to false once the game is over
            setAllList((prevState) =>
                prevState.map((obj) => ({
                    ...obj,
                    animationTriggered: false, // Reset animationTriggered for all items
                }))
            );
            updateBackend(); // update backend
            return;
        }

        const currentIndex = currentIndexRef.current;

        // Trigger animation for the current item and reset others
        setAllList((prevState) =>
            prevState.map((obj) =>
                obj.id === allList[currentIndex].id
                    ? { ...obj, animationTriggered: true }
                    : { ...obj, animationTriggered: false } // Reset all other items
            )
        );

        // Move to the next item, or reset when we reach the end of the list
        if (currentIndex < allList.length - 1) {
            currentIndexRef.current++; // Increment to next index
        } else {
            currentIndexRef.current = 0; // Restart from the beginning
            loopCountRef.current++; // Increment the loop count after one full pass
        }

        // Delay to simulate animation and loop through the next item
        timeoutRef.current = setTimeout(animateDraw, 100); // Delay of 100ms between items
    };

    const replayGame = () => {
        setIsAnimation(true);
        // Reset all states to start a new game
        setIsDraw(false); // Hide the lucky draw UI
        setIsButtonDisabled(false); // Enable the "LUCKY DRAW" button
        setIsGameOver(false); // Reset game over state
        setAllList(dataSet); // Reset the dataset to its initial state

        router.refresh();

        setTimeout(() => {
            setIsAnimation(false);
            setIsDraw(true);
        }, [3000])
    };

    const closeGame = () => {
        setIsDraw(false);
        window.location.reload();
    }

    useEffect(() => {
        if (Array.isArray(user?.winning_amount) && user?.winning_amount.length !== 0) {
            const userWinAmount = user.winning_amount[0];
            setWinAmount(userWinAmount);

            // Predefined values list
            const predefinedValues = [5, 10, 20, 50, 80, 100, 300, 500, 800, 900, 1000, 1100, 1200, 2000, 3000, 3300, 4000, 5000];

            // Filter values to avoid reusing the winning amount
            const filteredValues = predefinedValues.filter(val => val !== userWinAmount);

            // Get eligible indexes to assign userWinAmount (excluding isStartBtn)
            const eligibleIndexes = dataSet
                .map((item, index) => ({ item, index }))
                .filter(({ item }) => !item.isStartBtn);

            const randomIndexObj = eligibleIndexes[Math.floor(Math.random() * eligibleIndexes.length)];
            const winningIndex = randomIndexObj.index;

            // Shuffle function for randomness
            const getRandomValue = () => {
                return filteredValues[Math.floor(Math.random() * filteredValues.length)];
            };

            // Build updated data
            const updatedDataSet = dataSet.map((item, idx) => {
                if (item.isStartBtn) {
                    return item; // leave start button as is
                } else if (idx === winningIndex) {
                    return { ...item, winningPrice: userWinAmount };
                } else {
                    return { ...item, winningPrice: getRandomValue() };
                }
            });

            setAllList(updatedDataSet);
        } else {
            setWinAmount(0);
        }
    }, [user]);

    return (
        <>
            {
                isAnimation
                    ?
                    <div className="game-loading">
                        <Image
                            src={loading}
                            unoptimized
                            height={100}
                            width={100}
                            alt="gif"
                        />
                        <h2>Please wait....Loading...</h2>
                    </div>
                    :
                    <></>
            }
            <div className="lucky-draw-wrapper">
                <button className="draw-btn" onClick={() => setIsDraw(true)}>
                    LUCKY DRAW
                </button>
                {isDraw && (
                    <>
                        <div className="close-game" onClick={() => closeGame()}><i className="fa fa-times"></i></div>
                        <div className="draw-wrapper-containers page_animation">
                            <div className="draw-complete-container">
                                <h1>REMAINING CHANCE: {user?.number_of_draws ?? "0"}</h1>
                                {
                                    isGameOver
                                        ?
                                        <div className="draw-complete-wrapper">
                                            {
                                                winAmount === 0
                                                    ?
                                                    <>
                                                        <h3>Better luck next time</h3>
                                                    </>
                                                    :
                                                    <>
                                                        <h3>Congratulation you have won ${winAmount}</h3>
                                                        <p>${winAmount} has been deposited to your account.</p>
                                                    </>
                                            }
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                            <div className="draw-wrapper-containers-inner">
                                <Image
                                    src={draw}
                                    alt="lucky"
                                    height={100}
                                    width={100}
                                    unoptimized
                                    className="luckey-image"
                                />
                                <div className="draw-wrapper-containers-inner-board">
                                    <Image
                                        src={draw_backup}
                                        alt="lucky"
                                        height={100}
                                        width={100}
                                        unoptimized
                                        className="luckey-image"
                                    />
                                    <div className="draw-wrapper-containers-inner-board-dice">
                                        {allList.map((data, index) => (
                                            <div
                                                key={index}
                                                className={`draw-childs ${data.animationTriggered ? "animateDrawBox" : ""} ${isGameOver && data.winningPrice === winAmount ? "animateDrawBoxWinner" : ""}`}
                                            >
                                                {
                                                    data.winningPrice === "" ? null : (
                                                        <>
                                                            <Image
                                                                src={coin}
                                                                alt="lucky"
                                                                height={100}
                                                                width={100}
                                                                unoptimized
                                                                className="coinImage"
                                                            />
                                                            {
                                                                isGameOver
                                                                    ?
                                                                    <h3>${data.winningPrice}</h3>
                                                                    :
                                                                    ""

                                                            }
                                                        </>
                                                    )
                                                }

                                                {index === 4 && !data.winningPrice && (
                                                    !isButtonDisabled ? (
                                                        <Image
                                                            src={start}
                                                            alt="start"
                                                            height={100}
                                                            width={100}
                                                            unoptimized
                                                            className="start"
                                                            onClick={startGame}
                                                        />
                                                    ) : (
                                                        isGameOver
                                                            ?
                                                            <div className="replayBtn" onClick={() => replayGame()}>REPLAY</div>
                                                            :
                                                            <Image
                                                                src={loading}
                                                                alt="loading"
                                                                height={100}
                                                                width={100}
                                                                unoptimized
                                                            />
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default LuckyDraw;

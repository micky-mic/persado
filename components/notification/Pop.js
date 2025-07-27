"use client";

import Image from 'next/image'
import React, { useState } from 'react'

const Pop = ({ pop }) => {

    const [isShow, setIsShow] = useState(false);

    return (
        <>
            {
                pop?.visibility === "visible"
                    ?
                    <div className="notification-pop" onClick={() => setIsShow(true)}>
                        <i className="fa fa-bell"></i>
                    </div>
                    :
                    <></>
            }
            {
                isShow
                    ?
                    <div
                        className="pop-image"
                        onClick={() => setIsShow(false)}
                    >
                        <Image
                            src={pop?.image}
                            alt="pop"
                            height={100}
                            width={100}
                            unoptimized
                            style={{
                                animationDuration: `${pop?.animationDuration ?? "0.2"}s`,
                                animationTimingFunction: `${pop?.animationTimingFunction}`
                            }}
                            className={
                                pop?.animationType === "back_fade"
                                    ?
                                    "back_fade"
                                    :
                                    pop?.animationType === "back_fade_up"
                                        ?
                                        "back_fade_up"
                                        :
                                        pop?.animationType === "back_fade_down"
                                            ?
                                            "back_fade_down"
                                            :
                                            pop?.animationType === "back_fade_right"
                                                ?
                                                "back_fade_right"
                                                :
                                                pop?.animationType === "back_fade_left"
                                                    ?
                                                    "back_fade_left"
                                                    :
                                                    pop?.animationType === "back_fade_scale"
                                                        ?
                                                        "back_fade_scale"
                                                        :
                                                        "back_scale"


                            }
                        />
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default Pop
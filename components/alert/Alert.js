"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import notice from "@/public/notice.jpg";

const Alert = ({ user }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const targetDate = new Date('2026-05-09');

        const checkRegistrationDate = () => {
            if (!user?.createdAt) return;

            const registrationDate = new Date(user.createdAt);

            if (registrationDate < targetDate) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        checkRegistrationDate();

    }, [user?.createdAt]);

    return (
        <>
            {
                isVisible
                    ?
                    <>
                        <div className="alert-container" onClick={() => setIsVisible(false)}>
                            <Image
                                src={notice}
                                alt="notice"
                                height={100}
                                width={100}
                                unoptimized
                                className="page_animation"
                            />
                        </div>
                    </>
                    :
                    <>
                    </>
            }

        </>
    )
}

export default Alert
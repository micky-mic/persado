"use client";
import React, { useEffect, useState } from 'react'

const Alert = ({ user }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const targetDate = new Date('2025-08-07');

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
                        <div className="alert-container">
                            <div className="alert-wrapper page_animation">
                                <div className="alert-heading">
                                    <h3>Alert! Notification</h3>
                                </div>
                                <div className="aleart-body">
                                    <p>
                                        For any deposits or withdrawals, please contact our official customer service through our platform.
                                        Do not trust any unsolicited or external contacts claiming to represent us.
                                    </p>
                                    <button onClick={()=> setIsVisible(false)}>CLOSE</button>
                                </div>
                            </div>
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
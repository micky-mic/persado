"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation';
import { validateStartJourney } from "@/app/actions/journey/action";
import { toast } from 'react-hot-toast';
import { useEffect, useState } from "react";
import JourneyFailModal from "../successModal/JourneyFailModal";

function Submit() {

    const { pending } = useFormStatus();

    return (
        <button type="submit" className={pending ? "btn global-white-btn managedDisabled" : "btn global-white-btn"}> {
            pending ?
                <> Please wait<i className="fa fa-circle-notch rotating-spinner"></i></>
                :
                <>
                    Boost <i className="fa fa-arrow-right"></i>
                </>
        }
        </button>
    )
}

const ValidateJourney = ({ user }) => {

    const { push, refresh } = useRouter();

    const [isError, setIsError] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleForm = async () => {
        try {
            const response = await validateStartJourney();
            console.log(response)

            if (response.status === 201) {
                push('/dashboard/journey/submitJourney');
                setIsPressed(true);
                return;
            } else if (response.status === 101) {
                toast.error("Please complete your pending product!")
                push('/dashboard/history');
                setIsPressed(true);
                return;
            } else if (response.status === 403) {
                toast.error(response.message);
                return;
            } else {
                setIsError(true);
                setIsPressed(false);
                return toast.error(response.message);
            }

        } catch (error) {
            setIsError(true);
            setIsPressed(false);
            console.log(error)
        }
    }

    useEffect(() => {
        refresh();
    }, []);
    return (
        <>
            {
                isError
                    ?
                    <JourneyFailModal setIsModal={setIsError} />
                    :
                    <></>
            }
            <form action={handleForm} translate="no">
                {
                    isPressed
                        ?
                        <div className="isPressedValidation">
                            <p>Processing Please Wait <i className="fa fa-circle-notch rotating-spinner"></i></p>
                        </div>
                        :
                        <>
                            {
                                user?.allow_rob_order
                                    ?
                                    <Submit />
                                    :
                                    <>
                                        <div className="fake-btn">
                                            Boost <i className="fa fa-arrow-right"></i>
                                        </div>
                                    </>
                            }
                        </>
                }
            </form>
        </>
    )
}

export default ValidateJourney
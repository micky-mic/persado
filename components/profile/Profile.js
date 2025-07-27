"use client";

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Image from 'next/image';
import { useState } from 'react';
import ConfirmModal from '../successModal/ConfirmModal';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { uploadProfile } from '@/app/actions/profile/action';
import Loader from '../loader/Loader';
import user_profile from "@/public/related_assets/user_profile.jpg"
import membershipImg from "@/public/related_assets/Images/membershipImg.jpg"

const Profile = ({ user }) => {

    const router = useRouter();

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    const [isConfirm, setIsConfirm] = useState(false);
    const [file, setFile] = useState(null);
    const [pending, setPending] = useState(false);

    const handleForm = async (selectedFile) => {
        if (!selectedFile) {
            return toast.error("Please choose an image!");
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_IMAGE_UPLOAD_PRESET);

        // upload image to cloudinary::begin
        try {
            setPending(true);
            const cloud_res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, {
                method: "POST",
                body: formData
            });

            const cloud_data = await cloud_res.json();

            if (cloud_res.ok) {
                // Save in database::begin
                try {
                    const formData = new FormData();
                    formData.append("public_id", cloud_data.public_id);
                    formData.append("url", cloud_data.url);

                    const response = await uploadProfile(formData);

                    if (response.status === 201) {
                        router.refresh();
                        setFile(null);  // Reset file after successful upload
                        setPending(false);
                        return toast.success(response.message);
                    } else {
                        setPending(false);
                        throw new Error("Failed to upload profile image!");
                    }
                } catch (error) {
                    setPending(false);
                    console.error(error);
                }
                // Save in database::end
            } else {
                setPending(false);
                throw new Error("Failed to upload profile image!");
            }

        } catch (error) {
            setPending(false);
            console.error(error);
        }
        // upload image to cloudinary::end
    };

    return (
        <>
            <div className='background-color pageAnimatioin'>
                <Breadcrumb
                    title="Profile"
                    link="/dashboard"
                    isColor="#fff"
                />
                {
                    isConfirm
                        ?
                        <ConfirmModal
                            setIsModal={setIsConfirm}
                        />
                        :
                        <></>
                }
                {
                    pending ? <Loader /> : <></>
                }

                <section className="profile-section">
                    <div className='profile-inner-wrapper'>
                        <div className='user-profile-pic-wrapper'>
                            <form>
                                <div className="profile-image-wrapper">
                                    {
                                        file === null
                                            ?
                                            <Image
                                                src={user?.url === null ? user_profile : user?.url}
                                                width={100}
                                                height={100}
                                                alt="choosen file"
                                                className={user?.url === null ? "image-pre" : ""}
                                                unoptimized
                                                onClick={() => document.getElementById('file-upload').click()}
                                            />
                                            :
                                            <Image
                                                src={URL.createObjectURL(file)}
                                                width={100}
                                                height={100}
                                                alt="file"
                                                unoptimized
                                                onClick={() => document.getElementById('file-upload').click()}
                                            />

                                    }
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept=".png, .jpg, .jpeg, .gif"
                                        onChange={(e) => {
                                            setFile(e.target.files[0]);
                                            handleForm(e.target.files[0]);
                                        }}
                                        hidden
                                    />
                                </div>
                                <div className="profile-membership-wrapper">
                                    <h3>{user?.membership_level}</h3>
                                </div>
                                <div className="profile-membership-wrapper-name">
                                    <h3>{user?.username}</h3>
                                </div>
                                <div className="ref-code-wrapper" onClick={() => copyToClipboard(user?.invitation_code ?? "")}>
                                    <p>{user?.invitation_code ?? ""}</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 9 9"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M8.179 0H2.547a.823.823 0 0 0-.822.822v.903H.821A.82.82 0 0 0 0 2.546v5.633C0 8.632.368 9 .821 9h5.633a.82.82 0 0 0 .821-.821v-.904h.903A.823.823 0 0 0 9 6.453V.822A.82.82 0 0 0 8.179 0m-1.28 8.179c0 .246-.199.446-.445.446H.821a.446.446 0 0 1-.446-.446V2.546c0-.246.2-.446.446-.446h5.633c.246 0 .446.2.446.446zm1.726-1.726c0 .247-.2.447-.446.447h-.904V2.546a.82.82 0 0 0-.82-.821H2.1V.822c0-.247.2-.447.447-.447h5.632c.246 0 .446.2.446.447z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="profile-info-wrapper">
                                    <div className="profile-info-parent">
                                        <div className="profile-info-childs">
                                            <p>Balance</p>
                                            <h1>$ {user?.balance?.toFixed(2) ?? ""}</h1>
                                        </div>
                                        <div className="profile-info-childs"></div>
                                        <div className="profile-info-childs">
                                            <p>Dividends</p>
                                            <h1>$ {user?.today_commission?.toFixed(2) ?? ""}</h1>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='membership-img'>
                        <Image
                            src={membershipImg}
                            alt='membership'
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="submit-btn">
                        <button onClick={() => setIsConfirm(true)} className="btn global-white-btn">LOG OUT</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profile;
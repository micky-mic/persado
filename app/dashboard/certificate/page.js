import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import React from 'react'
import Image from 'next/image'
import certificate from "@/public/related_assets/Images/certificate.jpg"

const page = () => {
    return (
        <>
            <div className='background-color pageAnimatioin'>
                <div className='certificate-wrapper'>
                    <Breadcrumb
                        title="Certificate"
                        link="/dashboard"
                        isColor="#fff"
                    />
                    <div className='certtificate-img'>
                        <Image
                            src={certificate}
                            alt='certificate'
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

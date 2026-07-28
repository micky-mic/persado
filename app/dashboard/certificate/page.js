import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import certificate from "@/public/new2/certificate.jpg"
import React from 'react'
import Image from 'next/image'


const page = () => {
    return (
        <>
            <div className='background-color pageAnimatioin'>
                <div className='certificate-wrapper'>
                    <Breadcrumb
                        title="Certificate"
                        link="/dashboard"
                        isColor="#000000"
                        // bg="#000"
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

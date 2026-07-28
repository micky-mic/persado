import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import membership from "@/public/new2/membership.jpg"
import React from 'react'
import Image from 'next/image'


const page = () => {
    return (
        <>
            <div className='background-color pageAnimatioin'>
                <div className='certificate-wrapper'>
                    <Breadcrumb
                        title="Membership"
                        link="/dashboard"
                        isColor="#000000"
                        // bg="#000"
                    />
                    <div className='certtificate-img'>
                        <Image
                            src={membership}
                            alt='membership'
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
import React from 'react'
import Image from 'next/image'
import Logo from "@/public/new/logo.png"
import footerbg from "@/public/new/footerbg.png"
import Link from 'next/link'


const Footer = () => {
    return (
        <>
            <div className='footer-wrapper' style={{
                backgroundImage: `url(${footerbg.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className='related-logo'>
                    <Image
                        src={Logo}
                        alt="white"
                        height={100}
                        width={100}
                        unoptimized
                    />
                </div>
                <div className='footer-parent'>
                    <div className='footer-child'>
                        <h1>The Company</h1>
                        <Link href="/dashboard/content/about">
                            <p>About Us</p>
                        </Link>
                        <Link href="/dashboard/content/faq">
                            <p>Frequently Asked Question(s)</p>
                        </Link>
                        <Link href="/dashboard/content/tc">
                            <p>Terms & Conditions</p>
                        </Link>

                    </div>
                    <div className='footer-child'>
                        <p>© 2026. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

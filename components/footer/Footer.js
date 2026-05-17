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
                        <p>About Us</p>
                        <p>Frequently Asked Question(s)</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className='footer-child'>
                        {/* <div className='footer-subchild'>
                            <Link href="/dashboard/content/about">
                                <h3>About Us</h3>
                            </Link>
                        </div>
                        <div className='footer-subchild'>
                            <Link href="/dashboard/content/tc">
                                <h3>Terms & Conditions</h3>
                            </Link>
                        </div>
                        <div className='footer-subchild'>
                            <Link href="/dashboard/content/faq">
                                <h3>FAQ</h3>
                            </Link>
                        </div> */}
                        <p>© 2026. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

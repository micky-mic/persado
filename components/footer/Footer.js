import React from 'react'
import Image from 'next/image'
import Logo from "@/public/related_assets/logo/white_logo.svg"
import Link from 'next/link'


const Footer = () => {
    return (
        <>
            <div className='footer-wrapper'>
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
                        <p>Ⓒ 2025 Related</p>
                    </div>
                    <div className='footer-child'>
                        <div className='footer-subchild'>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

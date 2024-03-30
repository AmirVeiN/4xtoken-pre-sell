import footersvg from "../assets/footer.svg"
import footerpng from "../assets/footer.png"
import logo from "../assets/logo2.png"

import React, { useState, useEffect } from 'react'

import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })


    return (
        <div className="flex flex-col space-y-10 justify-center items-center relative w-full mt-56">
            {!isMobile ? <div className="w-full flex flex-row  justify-around items-end  z-20">
                <div className="">
                    <img src={footerpng} alt="" width={200} loading="lazy" />
                </div>
                <div className="flex flex-col space-y-10 ">
                    <div className="flex flex-row justify-center text-white space-x-2 items-center">
                        <img src={logo} alt="" width={100} loading="lazy" />
                        <p className="text-5xl font-bold">4xToken</p>
                    </div>
                    <div className='flex flex-row justify-center space-x-3'>
                        <a href="https://t.me/x_finanse" className='p-3 bg-yellow text-black  rounded-full'>
                            <FaTelegramPlane size={32} />
                        </a>
                        <a href="https://x.com/4x_coin/" className='p-3 bg-yellow text-black  rounded-full'>
                            <FaTwitter size={32} />
                        </a>
                        <a href="https://www.instagram.com/4x_coin/" className='p-3 bg-yellow text-black rounded-full'>
                            <AiFillInstagram size={32} />
                        </a>
                    </div>
                </div>
                <div></div>
            </div> : null}
            <div className="text-center text-white z-20">
                <p>© Copyright 4x 2024 All Rights Reserved.</p>
                <p>By accessing our services, you accept our Terms of Service and Privacy Policy.</p>
            </div>
            <div className="absolute bottom-0 z-10">
                <img src={footersvg} alt="" width={10000} loading="lazy" />
            </div>
        </div>
    )
}
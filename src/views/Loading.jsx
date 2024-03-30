import React, { useState, useEffect } from 'react'
import loading from "../assets/loading.gif"

export default function Loading() {

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
        <div className="flex h-screen w-screen justify-center items-center">
            {!isMobile ? <img src={loading} alt="" width={400} loading='lazy' /> : <img src={loading} alt="" width={300} loading='lazy' />}
        </div>
    )
}
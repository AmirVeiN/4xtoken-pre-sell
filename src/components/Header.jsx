import logo from "../assets/logo2.png"
import { FaAngleDown } from "react-icons/fa";
import head from "../assets/head.svg"
import { MdMenu } from "react-icons/md";
import React, { useState } from 'react'

export default function Header() {

    const [menu, menuChanger] = useState(false)

    const Changer = () => menuChanger(!menu)

    return (
        <div className="flex flex-row justify-between items-center 3xl:px-10 2xl:px-10 xl:px-10 lg:px-8 md:px-2 sm:px-2 ph:px-2 relative">
            <div className="absolute left-0 top-0 z-20">
                <img src={head} alt="" width="90%" />
            </div>
            <div className="flex flex-row justify-center text-white space-x-2 items-center z-20 ">
                <img src={logo} alt="" width={70} />
                <p className="text-3xl font-bold">4xToken</p>
            </div>
            <div className="flex-row 3xl:space-x-8 2xl:space-x-8 xl:space-x-8 lg:space-x-5 md:space-x-3 z-40 3xl:flex 2xl:flex xl:flex lg:flex md:flex sm:hidden ph:hidden">
                <div>
                    <button className="peer flex flex-row justify-center items-center space-x-1 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-base font-medium">
                        <p className="font-bold text-white">COMMUNITY</p>
                        <FaAngleDown color="red" />
                    </button>
                    <div className="hidden peer-focus:flex focus:flex absolute items-start flex-col bg-white space-y-3 p-5 rounded-xl justify-between shadow-lg shadow-black ">
                        <a href="https://t.me/x_finanse" className="text-xl font-medium z-40">Telegram</a>
                        <a href="https://www.instagram.com/4x_coin/" className="text-xl font-medium z-40">Instagram</a>
                        <a href="https://x.com/4x_coin/" className="text-xl font-medium z-40">Twitter</a>
                    </div>
                </div>
                <div>
                    <button className="peer flex flex-row justify-center items-center space-x-1 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-base font-medium">
                        <p className="font-bold text-white">PRICE CHART</p>
                        <FaAngleDown color="red" />
                    </button>
                    <div className="hidden peer-focus:flex focus:flex absolute items-start flex-col bg-white space-y-3 p-5 rounded-xl justify-between shadow-lg shadow-black ">
                        <button className="text-xl font-medium z-40">DexTools</button>
                        <button className="text-xl font-medium z-40">CoinMarketCap</button>
                        <button className="text-xl font-medium z-40">CoinGecko</button>
                    </div>
                </div>
                <div>
                    <button className="peer flex flex-row justify-center items-center space-x-1 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-base font-medium">
                        <p className="font-bold text-white">TOKEN DETAILS</p>
                        <FaAngleDown color="red" />
                    </button>
                    <div className="hidden peer-focus:flex focus:flex absolute items-start flex-col bg-white space-y-3 p-5 rounded-xl justify-between shadow-lg shadow-black ">
                        <a href="https://presale.4xtoken.com/" className="text-xl font-medium z-40">Buy Token</a>
                        <button className="text-xl font-medium z-40">Smart Contract</button>
                        <button className="text-xl font-medium z-40">WhitePaper</button>
                    </div>
                </div>
            </div>
            <a href="https://presale.4xtoken.com/" className="bg-softRed px-5 py-2 rounded-3xl text-white z-30 3xl:text-xl 2xl:text-xl xl:text-xl md:text-md 3xl:flex 2xl:flex xl:flex lg:flex md:flex sm:hidden ph:hidden">
                Buy Now
            </a>
            <button onClick={Changer} className="z-50 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden text-3xl bg-red text-white rounded-xl p-1">
                <MdMenu />
            </button>
            {menu === true ?
                <div className="absolute w-screen h-[550px] rounded-3xl top-0 bg-balckPhone/80 delay-100 duration-100 z-40 flex flex-col justify-start space-y-5 items-center">
                    <div className="flex  items-start flex-col bg-white w-44 mt-7 space-y-3 p-5 rounded-xl justify-between shadow-lg shadow-black ">
                        <a href="https://t.me/x_finanse" className="text-xl font-medium z-40">Telegram</a>
                        <a href="https://www.instagram.com/4x_coin/" className="text-xl font-medium z-40">Instagram</a>
                        <a href="https://x.com/4x_coin/" className="text-xl font-medium z-40">Twitter</a>
                    </div>
                    <div className="flex  items-start flex-col bg-white space-y-3 p-5 rounded-xl justify-between shadow-lg shadow-black ">
                        <button className="text-xl font-medium z-40">DexTools</button>
                        <button className="text-xl font-medium z-40">CoinMarketCap</button>
                        <button className="text-xl font-medium z-40">CoinGecko</button>
                    </div>
                    <div className="flex  items-start flex-col bg-white space-y-3 p-5 rounded-xl justify-between shadow-lg shadow-black ">
                        <a href="https://presale.4xtoken.com/" className="text-xl font-medium z-40">Buy Token</a>
                        <button className="text-xl font-medium z-40">Smart Contract</button>
                        <button className="text-xl font-medium z-40">WhitePaper</button>
                    </div>
                </div>
                : null
            }
        </div>
    )
}
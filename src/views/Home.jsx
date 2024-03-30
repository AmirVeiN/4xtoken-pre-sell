import React, { useState, useEffect } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import video from "../assets/landing5.gif"
import main from "../assets/main7.svg"
import Header from '../components/Header';
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import tape from "../assets/coin.png"
import tape2 from "../assets/tape2.png"
import back from "../assets/blob-3.svg"
import bitmart from "../assets/bitmart.webp"
import tokenimg from "../assets/tokenomics.png"
import question from "../assets/question.png"
import watch from "../assets/watch.png"

import vertical from "../assets/mainvertical.svg"

import background from "../assets/back.png"

import roadmap from "../assets/road3.gif"

import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"

import { useParallax } from "react-scroll-parallax";
import Footer from '../components/Footer';

export default function Home() {

    const [isMobile, setIsMobile] = useState(false)
    const [step, stepChanger] = useState(1);


    const parallax = useParallax({
        easing: "easeInQuad",
        translateX: [0, 120],

    });
    const parallax2 = useParallax({
        easing: "easeInQuad",
        translateX: [0, -120],
    });


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
        <div className="h-full w-full flex flex-col " style={{ background: `url(${background})`, backgroundSize: "auto", backgroundColor: "#59daff" }}>
            <Header />
            <div className='flex flex-col w-full h-full justify-center items-center'>
                <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full relative mb-52 " >
                    <div className='absolute z-10 -top-24 left-0 '>
                        {!isMobile ? <img src={main} alt="" width={1650} loading='lazy' /> : <img src={vertical} alt="" width={1650} loading='lazy' />}
                    </div>
                    <div className='3xl:w-1/2 2xl:w-1/2 xl:w-1/2 md:w-1/2 lg:w-1/2 sm:w-[90%] 3xl:text-left 3xl:justify-start 3xl:items-start 2xl:text-left 2xl:justify-start 2xl:items-start xl:text-left xl:justify-start xl:items-start lg:text-left lg:justify-start lg:items-start md:text-left md:justify-start md:items-start sm:text-center sm:justify-center ph:w-[90%] ph:text-center ph:justify-center ph:items-center sm:items-center flex flex-col h-full space-y-5 3xl:pl-36 2xl:pl-20 xl:pl-12 lg:pl-8 md:pl-8 sm:pl-4 pt-20 z-30'>
                        <p className='font-bold text-white 3xl:text-8xl 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-4xl ph:text-4xl'>
                            Combination of
                            Forex and Crypto
                        </p>
                        <p className='font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-lg ph:text-lg text-black/70 '>
                            for the first time in the world the revolution of crypto and forex has happened which is
                            called
                            4xFinance, to be part of this tribe you should click on the Buy button and then purchase
                            some of
                            our 4X tokens (or you will miss the movment)
                        </p>
                        <div className='flex flex-row justify-start space-x-5'>
                            <a href='https://presale.4xtoken.com/' className='px-5 py-2 bg-red text-white font-bold rounded-3xl 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xl ph:text-xl'>BUY NOW</a>
                            <a href='https://4xtoken.com/whitepaper.pdf' className='px-5 py-2 bg-blue1 text-white font-bold rounded-3xl 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xl ph:text-xl'>WHITEPAPER</a>
                        </div>
                        <div className='flex flex-row justify-start space-x-3'>
                            <a href='https://t.me/x_finanse' className='p-3 bg-black text-white  rounded-full 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-2xl ph:text-2xl'>
                                <FaTelegramPlane />
                            </a>
                            <a href='https://x.com/4x_coin/' className='p-3 bg-black text-white  rounded-full 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-2xl ph:text-2xl'>
                                <FaTwitter />
                            </a>
                            <a href='https://www.instagram.com/4x_coin/' className='p-3 bg-black text-white rounded-full 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-2xl ph:text-2xl'>
                                <AiFillInstagram />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-row z-30 3xl:w-1/2 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full ph:w-full'>
                        <div>
                            <img src={video} alt="" loading='lazy' />
                        </div>
                    </div>
                </div>
                <div className="flex 3xl:p-0 2xl:p-0 xl:p-5 lg:p-5 md:p-5 sm:p-0 ph:p-0 3xl:flex-row 2xl:flex-row xl:flex-row md:flex-row lg:flex-row sm:flex-col ph:flex-col w-full justify-center items-center relative mb-24 z-10">
                    <div>
                        {!isMobile ? <img src={img1} alt="" width={500} loading='lazy' /> : <img src={img1} alt="" width={300} loading='lazy' />}
                    </div>
                    <div className='flex flex-col space-y-10 3xl:w-[800px] 2xl:w-[800px] xl:w-[800px] lg:w-[800px] md:w-[800px] sm:w-[90%]  ph:w-[90%]'>
                        <p className='font-bold 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-5xl ph:text-4xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>investment portfolio</p>
                        <p className='font-bold 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-2xl ph:text-xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>fill your bag with 4x token before it flies to the moon and be part of the evolution of crypto and forex</p>
                    </div>
                    <div className='absolute -z-10 '>
                        <img src={back} alt="" loading='lazy' width={1000} />
                    </div>
                </div>
                <div className="flex 3xl:p-0 2xl:p-0 xl:p-5 lg:p-5 md:p-5 sm:p-0 ph:p-0 3xl:flex-row 2xl:flex-row xl:flex-row md:flex-row lg:flex-row sm:flex-col ph:flex-col w-full justify-center items-center relative my-24 z-10">
                    <div>
                        {!isMobile ? <img src={img2} alt="" width={500} loading='lazy' /> : <img src={img2} alt="" width={300} loading='lazy' />}
                    </div>
                    <div className='flex flex-col space-y-10 3xl:w-[800px] 2xl:w-[800px] xl:w-[800px] lg:w-[800px] md:w-[800px] sm:w-[90%]  ph:w-[90%]'>
                        <p className='font-bold 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-5xl ph:text-4xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>TLV of 4xFinance</p>
                        <p className='font-bold 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-2xl ph:text-xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>over 173K TVL locked in to provide liquidity for buyers and sellers and pay them immediately</p>
                    </div>
                    <div className='absolute -z-10 '>
                        <img src={back} alt="" loading='lazy' width={1000} />
                    </div>
                </div>
                <div className="flex 3xl:p-0 2xl:p-0 xl:p-5 lg:p-5 md:p-5 sm:p-0 ph:p-0 3xl:flex-row 2xl:flex-row xl:flex-row md:flex-row lg:flex-row sm:flex-col ph:flex-col w-full justify-center items-center relative my-24 z-10">
                    <div>
                        {!isMobile ? <img src={img3} alt="" width={500} loading='lazy' /> : <img src={img3} alt="" width={300} loading='lazy' />}
                    </div>
                    <div className='flex flex-col space-y-10 3xl:w-[800px] 2xl:w-[800px] xl:w-[800px] lg:w-[800px] md:w-[800px] sm:w-[90%]  ph:w-[90%]'>
                        <p className='font-bold 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-5xl ph:text-4xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>smart contract development</p>
                        <p className='font-bold 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-2xl ph:text-xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>we believe that in order to be successful at everything in life ( as well as crypto) we all need to make it simple as possible like this dog - so we made our token contract as simple as possible for everyone whom takes seconds to read </p>
                    </div>
                    <div className='absolute -z-10 '>
                        <img src={back} alt="" loading='lazy' width={1000} />
                    </div>
                </div>
                <div className="flex 3xl:p-0 2xl:p-0 xl:p-5 lg:p-5 md:p-5 sm:p-0 ph:p-0 3xl:flex-row 2xl:flex-row xl:flex-row md:flex-row lg:flex-row sm:flex-col ph:flex-col w-full justify-center items-center relative 3xl:mb-36 3xl:mt-72 2xl:mb-24 2xl:mt-72 xl:mb-24 xl:mt-72 lg:mb-24 lg:mt-72 md:mb-24 md:mt-72 sm:my-24 ph:my-24 z-10">
                    <div>
                        {!isMobile ? <img src={img4} alt="" width={400} loading='lazy' /> : <img src={img4} alt="" width={300} loading='lazy' />}
                    </div>
                    <div className='flex flex-col space-y-10 3xl:w-[800px] 2xl:w-[800px] xl:w-[800px] lg:w-[800px] md:w-[800px] sm:w-[90%]  ph:w-[90%]'>
                        <p className='font-bold 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-5xl ph:text-4xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>walk and earn! easy as that</p>
                        <p className='font-bold 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-2xl ph:text-xl 3xl:text-left 2xl:text-left lg:text-left xl:text-left md:text-left sm:text-center ph:text-center'>in our life we all walking toward something every single day - wouldn't it be wonderful to earn money while walking ?? by just installing our dApp on your phone you will be able to earn money while walking</p>
                    </div>
                    <div>
                        {!isMobile ? <img src={watch} alt="" width={400} loading='lazy' /> : <img src={watch} alt="" width={230} loading='lazy' />}
                    </div>
                    <div className='absolute -z-10 '>
                        <img src={back} alt="" loading='lazy' width={1800} />
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <div className=' bg-orange rounded-lg text-white p-2 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-5xl ph:text-4xl my-10 z-10'>
                        How To Buy 4xToken
                    </div>
                </div>
                <div className='flex flex-row  3xl:w-[70%] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-full ph:w-full z-10 justify-between items-center'>
                    <div className='flex justify-end items-end z-10' ref={parallax.ref}>
                        {!isMobile ? <img src={tape} alt="" width={300} loading='lazy' /> : <img src={tape} alt="" width={150} loading='lazy' />}
                    </div>
                    <div className='flex justify-end items-end' ref={parallax2.ref}>
                        {!isMobile ? <img src={tape2} alt="" width={300} loading='lazy' /> : <img src={tape2} alt="" width={150} loading='lazy' />}
                    </div>
                </div>
                <div className='flex flex-row space-x-6 justify-center items-center text-3xl mt-10 z-10'>
                    <button onClick={() => stepChanger(1)} className={step === 1 ? "underline-offset-8 underline" : ""}>Step 1</button>
                    <button onClick={() => stepChanger(2)} className={step === 2 ? "underline-offset-8 underline" : ""}>Step 2</button>
                    <button onClick={() => stepChanger(3)} className={step === 3 ? "underline-offset-8 underline" : ""}>Step 3</button>
                    <button onClick={() => stepChanger(4)} className={step === 4 ? "underline-offset-8 underline" : ""}>Step 4</button>
                </div>
                <div className='flex 3xl:flex-row 3xl:text-left 2xl:flex-row 2xl:text-left xl:flex-row xl:text-left md:flex-row md:text-left lg:flex-row lg:text-left sm:flex-col sm:text-center ph:flex-col ph:text-center my-16 space-x-3 justify-center items-center p-5 z-10'>
                    <div>
                        {step === 1 ? <img src={step1} alt="" width={300} /> : <div></div>}
                        {step === 2 ? <img src={step2} alt="" width={150} /> : <div></div>}
                        {step === 3 ? <img src={step3} alt="" width={150} /> : <div></div>}
                        {step === 4 ? <img src={step4} alt="" width={200} /> : <div></div>}
                    </div>
                    <div className='flex flex-col space-y-3 z-10 3xl:w-[800px] 2xl:w-[800px] xl:w-[800px] lg:w-[800px] md:w-[800px] sm:w-[90%]  ph:w-[90%]'>
                        {step === 1 ? <p className='text-4xl'>Create a MetaMask Wallet</p> : <div></div>}
                        {step === 1 ? <p className='text-2xl '>$4x token is available on the BNB blockchain. MetaMask is a third party BEP20 (BNB) browser wallet, and the very best at that! On Google Chrome, visit metamask.io to download the extension and set up a wallet. On mobile? Get MetaMask's app for iPhone or Android.</p> : <div></div>}
                        {step === 2 ? <p className='text-4xl'>Send $BNB to MetaMask</p> : <div></div>}
                        {step === 2 ? <p className='text-2xl '>Acquire BNB through MetaMask itself or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance).</p> : <div></div>}
                        {step === 3 ? <p className='text-4xl'>Visit 4X Presale Page</p> : <div></div>}
                        {step === 3 ? <p className='text-2xl '>Connect your wallet to the website ( make sure you are on binance smart chain ) and enter the amount you want to buy and then click on buy</p> : <div></div>}
                        {step === 4 ? <p className='text-4xl'>wait until presale ends!</p> : <div></div>}
                        {step === 4 ? <p className='text-2xl '>after you buy the tokens simply you need to add the tokens in your wallet to see in your portfolio and then you just need to wait until presale ends</p> : <div></div>}
                    </div>
                </div>
                <div className='mb-28 bg-orange w-[90%] flex flex-col space-y-10 justify-center items-center p-5 rounded-3xl'>
                    <div className=' w-full flex flex-col justify-center space-y-5 items-center z-10'>
                        <div className='px-5 py-2 bg-softRed rounded-2xl'>
                            <p className='text-white 3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl ph:text-4xl text-center'>Partners</p>
                        </div>
                        <div className='flex flex-col space-y-4 w-[80%]'>
                            <p className='text-white 3xl:text-4xl 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl ph:text-xl'>The $4x token is currently available on 20+ different exchanges. We continuously look for new partners to join us in offering you new ways to acquire $4x.</p>
                        </div>
                    </div>
                    <div className='flex w-[90%]'>
                        <div class="flex overflow-hidden space-x-16 ">
                            <div class="flex space-x-16 animate-loop-scroll">
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                            </div>
                            <div class="flex space-x-16 animate-loop-scroll" aria-hidden="true">
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                                <img loading="lazy" src={bitmart} class="max-w-none" alt="" width={200} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-10 justify-center items-center z-10'>
                    <div className='px-5 py-2 bg-softRed rounded-2xl'>
                        <p className='3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl ph:text-4xl text-white text-center'>Tokenomics</p>
                    </div>
                    <div className='p-5 flex md:space-y-0 lg:space-y-0 xl:space-y-0 2xl:space-y-0 3xl:space-y-0 sm:space-y-10 ph:space-y-10 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row md:flex-row sm:flex-col ph:flex-col justify-evenly w-full items-center'>
                        <div>
                            {!isMobile ? <img src={tokenimg} alt="" width={600} loading='lazy' /> : <img src={tokenimg} alt="" width={400} loading='lazy' />}
                        </div>
                        <div className='flex flex-col space-y-8 justify-center-center'>
                            <div className='flex flex-col justify-center items-center space-y-3'>
                                <p className='3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl ph:text-4xl text-blue font-bold'>10,000,000,000</p>
                                <p className='3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl ph:text-3xl text-black'>Total Supply</p>
                            </div>
                            <div className='flex flex-row justify-evenly'>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <p className='3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl ph:text-4xl text-blue font-bold'>% 50</p>
                                    <p className='3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl ph:text-3xl text-black'>Presale</p>
                                </div>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <p className='3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl ph:text-4xl text-blue font-bold'>% 23</p>
                                    <p className='3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl ph:text-3xl text-black'>Liquidity</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-evenly'>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <p className='3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl ph:text-4xl text-blue font-bold'>% 10</p>
                                    <p className='3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl ph:text-3xl text-black'>Rewards</p>
                                </div>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <p className='3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl ph:text-4xl text-blue font-bold'>% 17</p>
                                    <p className='3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl ph:text-3xl text-black'>Burnt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center z-10 flex-col space-y-10 my-24'>
                    <div className='px-5 py-2 bg-softRed rounded-2xl'>
                        <p className='3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl ph:text-4xl text-white text-center'>RoadMap</p>
                    </div>
                    <img src={roadmap} alt="" loading='lazy' />
                </div>
                <div className='flex flex-col justify-center space-y-10 items-center p-5'>
                    <div className='px-5 py-2 bg-softRed rounded-2xl'>
                        <p className='3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl ph:text-4xl text-white text-center'>F&Q</p>
                    </div>
                    <div className='flex 3xl:flex-row 2xl:flex-row  xl:flex-row  md:flex-row sm:flex-col ph:flex-col justify-center items-center w-full z-10'>
                        <div className='w-fit'>
                            {!isMobile ? <img src={question} alt="" width={400} loading='lazy' /> : <img src={question} alt="" width={300} loading='lazy' />}
                        </div>
                        <div className=" flex flex-col justify-center space-y-6 3xl:w-1/2 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full ph:w-full">
                            <h2 className="text-3xl font-semibold 3xl:text-left 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center ph:text-center">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4 ">
                                <details className="w-full rounded-lg ring-2 ring-white">
                                    <summary className="px-4 py-6 text-softRed text-2xl ">
                                        what is 4xFinance?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-ultragray text-2xl">
                                        its a crypto token based on BSC blockchain with simple contract and it has 2 big projects behind it (the 4x exchange , walk and earn)
                                    </p>
                                </details>
                                <details className="w-full rounded-lg ring-2 ring-white">
                                    <summary className="px-4 py-6 text-softRed text-2xl">
                                        is there any limits to buy in presale?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-ultragray text-2xl">
                                        yes-minimum 0.01 BNB and Max 1.5 BNB per transaction
                                    </p>
                                </details>
                                <details className="w-full rounded-lg ring-2 ring-white">
                                    <summary className="px-4 py-6 text-softRed text-2xl">
                                        i bought the token but i can't see it in my wallet, what should i do?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-ultragray text-2xl">
                                        don’t worry, you will receive your purchased tokens immediately after presale ends
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}
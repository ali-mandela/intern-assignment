"use client";
/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import {FaArrowCircleLeft} from "react-icons/fa";
import {FaArrowCircleRight} from "react-icons/fa";
//
export const Carousel = () => {
    const [index,
        setIndex] = useState(0)
    const images = [
        {
            id: "1",
            src: 'https://picsum.photos/id/11/300/300'
        }, {
            id: "2",
            src: 'https://picsum.photos/id/22/300/300'
        }, {
            id: "3",
            src: 'https://picsum.photos/id/33/300/300'
        }, {
            id: "4",
            src: 'https://picsum.photos/id/44/300/300'
        }
    ]

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleView=(i)=>{
        setIndex(i-1)
    }

    return (
        <div className='p-4 md:px-36 py-14'>
            <div className='flex justify-around  md:justify-end '>
                <div className='flex gap-8'>
                    <button
                        className='px-4 border-2 py-2 rounded-lg text-sm text-white font-bold bg-[#08254B]'>EXTERIORS</button>
                    <button
                        className='px-4 border-2 py-2 rounded-lg text-sm text-[#08254B] border-[#08254B] font-bold bg-[]'>INTERIORS</button>
                </div>
            </div>
            {/* IMAGES */}
            <div>
                <div className='relative w-full h-42 mt-6 '>
                    <img
                        className='w-full z-10 object-cover h-80 rounded-lg'
                        alt='ok'
                        src={images[index]
                        ?.src}/>
                    <FaArrowCircleLeft
                        onClick={handlePrev}
                        className='absolute text-white z-20 top-2/4 left-2	 text-3xl'/>
                    <FaArrowCircleRight
                        onClick={handleNext}
                        className='absolute text-white  z-20 top-2/4 right-2 bottom-2/4 left-100 text-3xl'/>

                </div>
                <div className='flex my-6 justify-between '>
                    {images.map((i) => <img onClick={()=>handleView(i.id)} className='w-1/5 rounded-lg' key={i.id} alt='sf' src={i.src}/>)
}
                </div>

            </div>
        </div>
    )
}

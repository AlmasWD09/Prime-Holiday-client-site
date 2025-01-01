"use client"
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTopButton = () => {
    const [backTopBtn, setBackTopBtn] = useState(false);

    useEffect(() => {
        const btnControl = () => {
            if (window.scrollY > 200) {
                setBackTopBtn(true)
            } else {
                setBackTopBtn(false)

            }
        }
        window.addEventListener('scroll', btnControl)

        return () => {
            window.removeEventListener('scroll', btnControl)
        }

    }, [])

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (<>
        {
            backTopBtn && <div onClick={top} className="animate-pulse w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full  bg-primary hover:animate-none flex justify-center items-center text-center text-white fixed right-[24px] md:right-[40px] bottom-[40px] cursor-pointer z-40">
                <IoIosArrowUp className="text-3xl flex justify-center items-center text-center" /></div>

        }
    </>

    );
};

export default ScrollTopButton;
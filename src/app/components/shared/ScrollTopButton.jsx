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
            backTopBtn && <div onClick={top} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-xl border-2 border-primary  hover:bg-primary  flex justify-center items-center text-center text-primary hover:text-white fixed right-[16px] lg:right-[120px] bottom-[188px] md:bottom-[120px] cursor-pointer z-40">
                <IoIosArrowUp className="text-3xl flex justify-center items-center text-center" /></div>

        }
    </>

    );
};

export default ScrollTopButton;
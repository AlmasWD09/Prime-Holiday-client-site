"use client";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTopButton = () => {

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div
                onClick={top}
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-xl border-2 border-primary  flex justify-center items-center text-center text-primary cursor-pointer z-40"
            >
                <IoIosArrowUp className="text-3xl flex justify-center items-center text-center" />
            </div>
        </>
    );
};

export default ScrollTopButton;

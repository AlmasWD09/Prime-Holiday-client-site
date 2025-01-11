"use client";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const footer = document.querySelector("footer"); 
        if (footer) {
            const footerTop = footer.offsetTop; 
            const footerHeight = footer.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            // Show button when scrolling in the footer area
            if (scrollPosition >= footerTop && scrollPosition <= footerTop + footerHeight) {
                setShowButton(true); 
            } else {
                setShowButton(false); // Hide button when not in the footer area
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <div
                    onClick={top}
                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-xl border-2 border-primary hover:bg-primary flex justify-center items-center text-center text-primary hover:text-white fixed right-[16px] lg:right-[120px] bottom-[188px] md:bottom-[120px] cursor-pointer z-40"
                >
                    <IoIosArrowUp className="text-3xl flex justify-center items-center text-center" />
                </div>
            )}
        </>
    );
};

export default ScrollTopButton;

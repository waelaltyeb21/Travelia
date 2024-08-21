import { useEffect } from "react";
import { useRef } from "react"

const GoUpButton = () => {
    const btn = useRef();

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         console.log(window.innerHeight);
    //     });
    // }, []);

    const GoTop = () => {
        window.scrollTo({
            "top": 0,
            "behavior": "smooth"
        })
    }
  return (
    <button 
    className="fixed hidden z-50 bottom-8 right-6 bg-majorelle-blue text-white cursor-pointer p-3 rounded-full"
    onClick={GoTop}
    ref={btn}
    >Up</button>
  )
}

export default GoUpButton
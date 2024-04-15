import { useState, useEffect, useRef } from "react";
export let isScrollUp=false
export let setIsScrollUp
const useScrollUp = () => {
   [isScrollUp, setIsScrollUp] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollUp(currentScrollY < prevScrollY.current);
    prevScrollY.current = currentScrollY;
    console.log("+++++"+isScrollUp)

  };
    //   useEffect(
    //     ()=>{
    //         let timeOutId=setTimeout(() => {
    //             setIsScrollUp(false)
                
    //         }, 3000);
    //         return ()=>{
    //             clearTimeout(timeOutId)
    //         }
    //     },[isScrollUp]
    // )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrollUp;
};

export default useScrollUp;
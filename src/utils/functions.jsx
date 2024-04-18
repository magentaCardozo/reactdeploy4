// // import { useState, useEffect, useRef, useCallback } from "react";
// // export let isScrollUp=false
// // let setIsScrollUp
// // const useScrollUp = () => {
// //     [isScrollUp, setIsScrollUp] = useState(true);
// //    const prevScrollY= useRef(0);
// //   const  currentScrollY=useRef(0)
// //   const defineBool=useCallback(()=>{

// //       setIsScrollUp(currentScrollY.current<prevScrollY.current);
// //     console.log("C= "+(currentScrollY.current-prevScrollY.current)+"****"+" P= "+prevScrollY.current)
// //     console.log("########"+isScrollUp)
// //      prevScrollY.current=currentScrollY.current;
// //   },[currentScrollY.current])

// //   function handleScroll(){
// //     currentScrollY.current = window.scrollY;

// //     console.log("C= "+(currentScrollY.current)+"****"+" P= "+prevScrollY.current)


// //   };
// //     //   useEffect(
// //     //     ()=>{
// //     //         let timeOutId=setTimeout(() => {
// //     //             setIsScrollUp(false)
                
// //     //         }, 3000);
// //     //         return ()=>{
// //     //             clearTimeout(timeOutId)
// //     //         }
// //     //     },[isScrollUp]
// //     // )

// //   useEffect(() => {
// //     window.addEventListener("scroll",handleScroll());
// //     return () => {
// //       window.removeEventListener("scroll",handleScroll());
// //     };
// //   }, []);

// //   return isScrollUp;
// // };



// // export default useScrollUp;





// // import React, { useState, useEffect } from 'react';
// // export let scrollDirection;
// // let setScrollDirection;

// // function useScrollDirection() {
// //   const [scrollPosition, setScrollPosition] = useState(window.scrollY);
// //    [scrollDirection, setScrollDirection] = useState(true);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollPosition = window.scrollY;
// //       setScrollDirection(currentScrollPosition < scrollPosition);
// //       console.log(scrollPosition+' :: Prev+++::curr :: '+currentScrollPosition)

// //       setScrollPosition(currentScrollPosition);
// //     };

// //     window.addEventListener('scroll', ()=>handleScroll());
 

// //     return () => {
// //       window.removeEventListener('scroll', ()=>handleScroll());
// //     };

// //   }, [scrollDirection]); 


// //   return scrollDirection;
// // }

// // export default useScrollDirection;






// import { useState, useEffect } from 'react';
// import { useScrollPosition } from 'react-use-scroll-position';
// export let scrollDirection;
// let setScrollDirection
// function useScrollDirection() {
//   [scrollDirection, setScrollDirection] = useState(true); // Assuming true for scrolling down, false for scrolling up
//   const scrollPosition = useScrollPosition();

//   useEffect(() => {
//     setScrollDirection(scrollPosition.prevPos.y < scrollPosition.currPos.y);
//   }, [scrollPosition]);

//   return scrollDirection;
// }

// export default useScrollDirection;

import React from 'react'
import Image from 'next/image'
import CoffeeIcon from '@/Components/Icons/CoffeeIcon/CoffeeIcon'
import Appetizers from '@/Components/Icons/Appetizers/Appetizers'
import Brewedcoffees from '@/Components/Icons/Brewedcoffees/Brewedcoffees'
import Brunch from '@/Components/Icons/Brunch/Brunch'
import Cakes from '@/Components/Icons/Cakes/Cakes'
import Chocolatesandsmallsweets from '@/Components/Icons/Chocolatesandsmallsweets/Chocolatesandsmallsweets'
import ColdCoffee from '@/Components/Icons/ColdCoffee/ColdCoffee'
import Colddesserts from '@/Components/Icons/Colddesserts/Colddesserts'
import Colddrinks from '@/Components/Icons/Colddrinks/Colddrinks'
import Freshjuices from '@/Components/Icons/Freshjuices/Freshjuices'
import HotCoffee from '@/Components/Icons/HotCoffee/HotCoffee'
import Hotdesserts from '@/Components/Icons/Hotdesserts/Hotdesserts'
import PersianFoodIcon from '@/Components/Icons/PersianFoodIcon/PersianFoodIcon'
import FastFoodIcon from '@/Components/Icons/FastFoodIcon/FastFoodIcon'
import { useState,useEffect } from 'react'
import DessertIcon from '@/Components/Icons/DessertIcon/DessertIcon'
import BreakFastIcon from '@/Components/Icons/BreakFastIcon/BreakFastIcon'
import Mocktails from '@/Components/Icons/Mocktails/Mocktails'
import Noncoffeedrinks from '@/Components/Icons/Noncoffeedrinks/Noncoffeedrinks'
import Nutsandseeds from '@/Components/Icons/Nutsandseeds/Nutsandseeds'
import Salads from '@/Components/Icons/Salads/Salads'
import Saltysnacks from '@/Components/Icons/Saltysnacks/Saltysnacks'
import ShakesandFrappes from '@/Components/Icons/ShakesandFrappes/ShakesandFrappes'
import Smoothies from '@/Components/Icons/Smoothies/Smoothies'
import Snacksandrefreshments from '@/Components/Icons/Snacksandrefreshments/Snacksandrefreshments'
import Snackswithdrinks from '@/Components/Icons/Snackswithdrinks/Snackswithdrinks'
import Sweets from '@/Components/Icons/Sweets/Sweets'
import ItemsCard from '@/Components/Template3/ItemsCard/ItemsCard'
import gsap from 'gsap'
import Rating from "react-rating";
import ReactModal from 'react-modal'
import Carousel from '@/Components/Template3/Carousel/Carousel'
import CommentCard from '@/Components/Template3/CommentCard/CommentCard'
import { useRef } from 'react'
import { BiCommentAdd } from "react-icons/bi";
ReactModal.setAppElement('#__next');
function Index() {
    
        const [width, setwidth] = useState(null);
          useEffect(() => {
            // This code runs only in the browser
            setwidth(window.innerWidth >= 1024 ? 32: 28 );
          }, []);





          const [rating, setRating] = useState(3);
          const [isOpen, setIsOpen] = useState(false);
        
          const openModal = () => setIsOpen(true);
          const closeModal = () => setIsOpen(false);
          const [activeSection, setActiveSection] = useState("section1");
          const [showSection, setShowSection] = useState(false);
        
        
        
        
          const sectionRef = useRef(null);
        
        
        
          const pageRef = useRef(null);
          const modalRef = useRef(null);
          const modalContainerRef = useRef(null);
        
          useEffect(() => {
            gsap.from(pageRef.current, {
              opacity: 0,
              y: 50,
              duration: 2,
              ease: "power3.out",
            });
          }, []);
        
          useEffect(() => {
            if (openModal) {
              gsap.fromTo(
                modalRef.current,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 10.5, ease: "back.out(1.7)" }
              );
            } else {
              gsap.to(modalRef.current, {
                opacity: 0,
                scale: 0.5,
                duration: 5.4,
                ease: "power3.in",
                onComplete: () => setShowModal(false),
              });
            }
          }, [openModal]);
         
         
         
        
          const section1Ref = useRef(null);
          const section2Ref = useRef(null);
          const section3Ref = useRef(null);
        
          // Function to navigate between sections
          const navigateToSection = (section) => {
            let currentSectionRef;
            let nextSectionRef;
        console.log('sec',section)
            // Determine the current and next section refs
            switch (activeSection) {
              case "section1":
                currentSectionRef = section1Ref;
                break;
              case "section2":
                currentSectionRef = section2Ref;
                break;
              case "section3":
                currentSectionRef = section3Ref;
                break;
              default:
                break;
            }
            
            switch (section) {
              case "section1":
                nextSectionRef = section1Ref;
                break;
              case "section2":
                nextSectionRef = section2Ref;
                break;
              case "section3":
                nextSectionRef = section3Ref;
                break;
              default:
                break;
            }
            console.log('next',nextSectionRef)
            console.log('cur',currentSectionRef.current)
        
            // Animate out the current section
            gsap.to(nextSectionRef.current, {
              opacity: 0,
              y: -50, // Move up
              duration: 0.2,
              ease: "power2.out",
              onComplete: () => {
                // Change the active section
                setActiveSection(section);
                // Animate in the new section
                gsap.fromTo(
                  currentSectionRef.current,
                  { opacity: 0, y: 50 }, // Start from below
                  { opacity: 1, y: 0, duration: 0.2, ease: "power3.out" } // Animate to center
                );
              },
            });
          };
        
        
        console.log(activeSection)
        
        
        
        
          useEffect(() => {
            if (isOpen) {
              document.body.classList.add('modal-open');
            } else {
              document.body.classList.remove('modal-open');
            }
        
            // Cleanup function to remove the class when the component unmounts
            return () => {
              document.body.classList.remove('modal-open');
            };
          }, [isOpen]);
        
        
        
        
        
          const [scrolled, setScrolled] = useState(false);
        
          useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > 120) {
                setScrolled(true);
              } else {
                setScrolled(false);
              }
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
          }, []);





console.log(scrolled)
  return (
    <div  ref={pageRef} className='  relative  min-h-screen'>
            <Image className=' fixed top-0 left-0 w-full h-full' src={'/assets/template3/1.webp'} width={10000} height={100000} alt='Landingng'/>
<div className=' p-6 lg:py-15 py-6 pb-0 lg:backdrop-blur-[26px] backdrop-blur-[6px] flex flex-col justify-start items-center gap-6 w-full min-h-screen'>



<div className='mt-2 z-30  w-[371px] lg:w-[480px] lg:hidden flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#36B894"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
    





<div className=' border-[1px] border-white/30 w-full  py-6 px-10 border-solid flex justify-between items-end  rounded-[24px] bg-[#7B554980]'>

<div className=' flex justify-start  gap-5 items-center'>
<Image className=' w-[160px] hidden lg:flex h-[160px]' src={'/assets/template3/2.png'} width={10000} height={100000} alt='logogng'/>
<Image className=' w-[125px] flex lg:hidden h-[125px]' src={'/assets/template3/3.png'} width={10000} height={100000} alt='logogng'/>

<div className=' flex flex-col justify-start gap-2 items-start'>
    <span className=' lg:text-[32px] text-[18px]   font-black'>نام فروشگاه شما</span>
    <span className=' hidden lg:flex text-[20px]  font-normal'>resturant / cafe</span>
    <button  className=' bg-btn3 text-[#3B3B3B] text-[14px] font-extrabold px-6 py-2 rounded-[12px]'>درباره ی فروشگاه</button>
</div>




</div>
<div className=' mt-3 w-[480px] hidden lg:flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#36B894"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



</div>


</div>


<div className={` ${scrolled ? ' w-[99vw]  rounded-none':' max-w-full w-full rounded-[32px] '} flex    transition-all 
duration-150 ease-in-out    sticky   top-0 z-30 justify-between items-center gap-2  px-2 lg:px-6  bg-white  h-[100px]    lg:h-[95px] `}>

<ul className=' w-full  lg:max-w-full    h-[100px]   overflow-scroll   flex justify-start scrollbar-none gap-4 items-center  '>

     <li className=' z-50 relative  p-1 min-w-[72px]  overflow-visible lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full lg:bg-white lg:border-[1px] border-[0px] border-[#9D796E]  bg-[#CBF9EC] whitespace-nowrap'> 
      
      
      <span className=' text-[#1C1C1C] w-fit text-[10px] font-extrabold'>قهوه</span> 
     <CoffeeIcon size={width} color={'#412820'}/>

     <div className='  lg:hidden flex  absolute   -bottom-3 z-50 h-1 w-[36px] bg-[#36B894]'></div>
      </li>

   
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>قهوه‌های گرم</span> <HotCoffee size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'><span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>قهوه‌های سرد</span>   <ColdCoffee size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>قهوه‌های دمی</span> <Brewedcoffees size={width} color={'#412820'}/></li>
  <li className='p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'>
  <span className='text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>نوشیدنی‌های غیر قهوه</span>
  <Noncoffeedrinks size={width} color={'#412820'}/>
</li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>آبمیوه‌های تازه</span><Freshjuices size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'><span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>نوشیدنی‌های سرد'</span><Colddrinks size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'><span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>شیک‌ها و فراپه‌ها</span><ShakesandFrappes size={width} color={'#412820'}/> </li>
  <li className='p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>اسموتی‌ها</span><Smoothies size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>موکتل‌ها</span><Mocktails size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>غذاها</span> <FastFoodIcon size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap' >صبحانه</span><BreakFastIcon size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>سالادها</span><Salads size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>غذاها</span><Appetizers size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>برانچ</span><Brunch size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>پیش غذاها</span><Appetizers size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>غذاهای اصلی</span><PersianFoodIcon size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>کیک‌ها</span> <Cakes size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>شیرینی‌ها</span><Sweets size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>بستنی‌ها</span> <Saltysnacks size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>دسرهای گرم</span><Hotdesserts size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>دسرهای سرد</span><Snackswithdrinks size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>تنقلات همراه نوشیدنی</span> <Snacksandrefreshments size={width} color={'#412820'}/></li>
  <li className='p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>اسنک‌ها و میان وعده‌ها</span><DessertIcon size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>دسرها و شیرینی‌ها</span><Nutsandseeds size={width} color={'#412820'}/></li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>آجیل و مغزیجات</span><Saltysnacks size={width} color={'#412820'}/> </li>
  <li className=' p-1  lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>اسنک‌های شور</span> <Chocolatesandsmallsweets size={width} color={'#412820'}/></li>
  <li className=' p-1 lg:min-w-[147px] w-fit h-[55px] flex cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex-col-reverse justify-center text-center items-center gap-2 lg:min-h-[64px] rounded-full border-[1px] border-[#9D796E] whitespace-nowrap'> <span className=' text-[#1C1C1C] text-[10px] font-extrabold mx-2 whitespace-nowrap'>شکلات و شیرینی‌های کوچک</span><Colddesserts size={width} color={'#412820'}/> </li>
  
    </ul>
  


    <button className='flex cursor-pointer text-center   justify-center items-center gap-1  min-w-[112px] lg:min-w-[182px]  bg-[#1C1C1C]  px-0 rounded-[10px] p-2'>
<div className=' hidden lg:flex'>
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 11.4V4.6C21.5 3.1 20.86 2.5 19.27 2.5H15.23C13.64 2.5 13 3.1 13 4.6V11.4C13 12.9 13.64 13.5 15.23 13.5H19.27C20.86 13.5 21.5 12.9 21.5 11.4Z" fill="white"/>
<path d="M11 13.6V20.4C11 21.9 10.36 22.5 8.77 22.5H4.73C3.14 22.5 2.5 21.9 2.5 20.4V13.6C2.5 12.1 3.14 11.5 4.73 11.5H8.77C10.36 11.5 11 12.1 11 13.6Z" fill="white"/>
<path d="M21.5 20.4V17.6C21.5 16.1 20.86 15.5 19.27 15.5H15.23C13.64 15.5 13 16.1 13 17.6V20.4C13 21.9 13.64 22.5 15.23 22.5H19.27C20.86 22.5 21.5 21.9 21.5 20.4Z" fill="white"/>
<path d="M11 7.4V4.6C11 3.1 10.36 2.5 8.77 2.5H4.73C3.14 2.5 2.5 3.1 2.5 4.6V7.4C2.5 8.9 3.14 9.5 4.73 9.5H8.77C10.36 9.5 11 8.9 11 7.4Z" fill="white"/>
</svg>
</div>
<span className=' lg:text-[16px] text-[12px] font-bold lg:font-extrabold  '>دسته بندیها</span>



    </button>
    <div className=' lg:hidden flex absolute bottom-3 w-[90%] left-1/2 -translate-x-1/2 h-[1px] bg-[#D2D2D2]'></div>

</div>





    
<div className=' relative  w-[98vw] lg:w-full flex flex-col mt-5  justify-start items-center gap-8'>



    <span className='lg:text-[29px] text-[16px] font-extrabold'>عنوان دسته بندی</span>

    <div className=' flex  pb-10  justify-center gap-4 items-center  lg:px-0 px-3 flex-wrap'>

    <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true} />
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true} />
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true} />
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true} />
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>

    </div>




</div>





</div>











<div className=' overflow-auto' ref={modalContainerRef}>

<ReactModal
        
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal-content lg:relative  fixed bottom-0"
        overlayClassName="modal-overlay"
      >
  <div className=' relative  bg-white   rounded-tr-[40px] rounded-tl-[40px]  lg:rounded-[40px]  lg:h-[560px]  h-[674px] w-screen lg:w-[800px]  '>
<div onClick={()=>setIsOpen(false)} className='absolute  lg:block hidden top-5 z-40 hover:scale-95 transition-all duration-150 ease-in-out left-5'>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 37.9167C10.1168 37.9167 2.0835 29.8834 2.0835 20C2.0835 10.1167 10.1168 2.08337 20.0002 2.08337C29.8835 2.08337 37.9168 10.1167 37.9168 20C37.9168 29.8834 29.8835 37.9167 20.0002 37.9167ZM20.0002 4.58337C11.5002 4.58337 4.5835 11.5 4.5835 20C4.5835 28.5 11.5002 35.4167 20.0002 35.4167C28.5002 35.4167 35.4168 28.5 35.4168 20C35.4168 11.5 28.5002 4.58337 20.0002 4.58337Z" fill="#8F9DAF"/>
<path d="M15.2829 25.9665C14.9663 25.9665 14.6496 25.8499 14.3996 25.5999C13.9163 25.1165 13.9163 24.3165 14.3996 23.8332L23.8329 14.3999C24.3163 13.9165 25.1163 13.9165 25.5996 14.3999C26.0829 14.8832 26.0829 15.6832 25.5996 16.1665L16.1663 25.5999C15.9329 25.8499 15.5996 25.9665 15.2829 25.9665Z" fill="#8F9DAF"/>
<path d="M24.7163 25.9665C24.3996 25.9665 24.0829 25.8499 23.8329 25.5999L14.3996 16.1665C13.9163 15.6832 13.9163 14.8832 14.3996 14.3999C14.8829 13.9165 15.6829 13.9165 16.1663 14.3999L25.5996 23.8332C26.0829 24.3165 26.0829 25.1165 25.5996 25.5999C25.3496 25.8499 25.0329 25.9665 24.7163 25.9665Z" fill="#8F9DAF"/>
</svg>

</div>
    
    <div className='   relative     z-0 lg:h-[560px] h-[674px]  w-screen  lg:w-[800px]   '>

   
    <div className=' lg:hidden flex lg:-right-66 top-23 left-1/2 -translate-x-1/2 lg:-bottom-0.5 absolute rounded-full
      justify-center items-center text-center  w-[336px] h-[336px] 
     lg:w-[586px] lg:h-[586px] border-[#ECE1DE] border-[1px]'>

        <div className=' bg-[#ECE1DE] lg:w-[488px] w-[268px] h-[268px]  rounded-full lg:h-[487px]'></div>



    </div>





    <div className=' lg:flex hidden lg:-right-66  lg:-bottom-0.5 absolute rounded-full
      justify-center items-center text-center  w-[336px] h-[336px] 
     lg:w-[586px] lg:h-[586px] border-[#ECE1DE] border-[1px]'>

        <div className=' bg-[#ECE1DE] lg:w-[488px] w-[268px] h-[268px]  rounded-full lg:h-[487px]'></div>



    </div>
    
    
    </div>

    <div className=' z-30       rounded-tl-[40px] rounded-tr-[40px] lg:rounded-[40px] flex justify-end
     items-center    lg:h-[560px] h-[674px]  w-screen lg:w-[800px]   bottom-0 fixed'>




<div className='  h-full w-full  flex flex-col justify-end  lg:justify-center lg:w-[495px]   '>




{activeSection==='section2' ?(    
    <div ref={section2Ref}  className='lg:w-[443px]      w-full ml-0 mr-0 lg:mr-5  mt-20  lg:ml-6  lg:h-[28rem] h-[19rem]    flex flex-col  justify-start gap-1 items-start'>
<div className='   justify-center items-center  w-full lg:hidden flex'>

<div className='w-[51px] h-[4px]  mb-2 bg-[#412820] rounded-full'></div>
</div>




<div className=' px-4 lg:px-0 flex justify-between mb-6  w-full items-center'>

  

<span className='  font-extrabold text-[#2D2D2D] text-[20px]'>نظرات کاربران</span>


<div className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section1")} className=' border-b-3 border-b-[#9D796E] font-extrabold text-[16px] text-[#9D796E]'>برگشت به عقب</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#9D796E" stroke-width="2"/>
</svg>

</div>


</div>

<div className=' scrollbar-none   pb-5  w-full lg:w-fit  flex flex-col justify-start items-center h-[430px] max-h-[35vh] lg:max-h-[410px] overflow-y-auto  '>


<CommentCard isadmin={false}/>
<CommentCard isadmin={true}/>
<CommentCard isadmin={false}/>


</div>



</div>
):activeSection==='section1' ?( 
<div ref={section1Ref} className='  gap-1 pb-3   flex flex-col justify-start lg:justify-center scrollbar-none  pt-10 lg:pt-0 overflow-y-scroll  max-h-[21rem]  h-[26rem]  lg:max-h-full  px-2 lg:px-12 lg:h-full  items-center lg:items-start'>
       
       
  <span className=' mb-3 bg-[#36B894] w-[110px]   hidden lg:block   text-center font-black text-[16.49px] py-1 rounded-[35.51px]'>20 % تخفیف</span>

<div className='w-[51px] h-[4px] lg:hidden block  mb-2 bg-[#412820] rounded-full'>.</div>


<div className=' min-h-fit relative'>

<span className=' mt-2 text-[20px] lg:text-[22px] font-extrabold text-[#2D2D2D]'>عنوان آیتم | item name</span>
<span className='offcard1 lg:hidden absolute -top-5 text-[13.03px] font-black  bg-[#36B894] text-center min-w-[48.35897816820379] rounded-[33.17px] rotate-[-25.15deg]   py-[4px]'>
20 %

</span>
</div>

<span className=' text-[#36B894] text-[14px] lg:text-[16px]  font-extrabold'>عنوان دسته بندی</span>
<p className='text-[13px] lg:my-4 font-medium text-[#515151] text-center lg:text-right 
'>توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود...توضیحات در اینجا نوشته میشود...</p>


<div className='  flex    lg:px-0 px-8    mb-6 custom-mb w-full justify-start flex-col items-start  relative'>

<div className=' relative'>
<span className=' font-semibold text text-[#2D2D2D] text-[13px]'>200 هزارتومان</span>
<div className='   top-1.5  right-0 absolute'>

<svg width="77" height="13" viewBox="0 0 77 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M76.7355 0.838163L0.60821 11.7034" stroke="#36B894"/>
</svg>

</div>


</div>

<div className='   flex-row gap-7 lg:gap-0 flex justify-between items-center  w-full'>

<span className=' font-black text-[#36B894] text-[18px]'>180 هزارتومان</span>


<div className=' cursor-pointer  rounded-full p-2 px-6 border-[#9D796E] border-[1px]  transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section2")} className='  font-extrabold text-[16px] text-[#9D796E]'>مشاهده نظرات</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#9D796E" stroke-width="2"/>
</svg>

</div>


</div>






</div>

<div className=' flex justify-center    gap-3 items-center'>

<button onClick={() => navigateToSection("section3")} className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center w-[178px] py-3 bg-[#412820] rounded-[11px] gap-2 items-center'>
<div className=' text-white'><BiCommentAdd size={20} /></div>



<span className='text-[13px]  text-white font-extrabold'>افزودن نظر</span>



</button>


<button className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center w-[178px] py-3 bg-[#36B894] rounded-[11px] gap-2 items-center'>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 8.70367V11.5C17.5 13.9998 17.5 15.2498 16.8634 16.1259C16.6577 16.4089 16.4089 16.6577 16.1259 16.8634C15.2498 17.5 13.9998 17.5 11.5 17.5H8.5C6.00017 17.5 4.75027 17.5 3.87405 16.8634C3.59107 16.6577 3.34221 16.4089 3.13661 16.1259C2.5 15.2498 2.5 13.9998 2.5 11.5V8.70367C2.5 8.35975 2.5 8.1878 2.51268 8.04282C2.65367 6.43132 3.93133 5.15368 5.54282 5.01268C5.6878 5 5.85977 5 6.2037 5H6.38889C6.5423 5 6.66667 4.87563 6.66667 4.72222C6.66667 3.49492 7.66159 2.5 8.88892 2.5H11.1111C12.3384 2.5 13.3333 3.49492 13.3333 4.72222C13.3333 4.87563 13.4577 5 13.6111 5H13.7963C14.1402 5 14.3122 5 14.4572 5.01268C16.0687 5.15368 17.3463 6.43132 17.4873 8.04282C17.5 8.1878 17.5 8.35975 17.5 8.70367ZM10 8.33333C8.61925 8.33333 7.5 9.45258 7.5 10.8333C7.5 12.2141 8.61925 13.3333 10 13.3333C11.3807 13.3333 12.5 12.2141 12.5 10.8333C12.5 9.45258 11.3807 8.33333 10 8.33333Z" fill="white" fill-opacity="0.18"/>
<path d="M17.5 11.5V8.70367C17.5 8.35975 17.5 8.1878 17.4873 8.04282C17.3463 6.43132 16.0687 5.15368 14.4572 5.01268C14.3122 5 14.1402 5 13.7963 5H13.6111C13.4577 5 13.3333 4.87563 13.3333 4.72222C13.3333 3.49492 12.3384 2.5 11.1111 2.5H8.88892C7.66159 2.5 6.66667 3.49492 6.66667 4.72222C6.66667 4.87563 6.5423 5 6.38889 5H6.2037C5.85977 5 5.6878 5 5.54282 5.01268C3.93133 5.15368 2.65367 6.43132 2.51268 8.04282C2.5 8.1878 2.5 8.35975 2.5 8.70367V11.5C2.5 13.9998 2.5 15.2498 3.13661 16.1259C3.34221 16.4089 3.59107 16.6577 3.87405 16.8634C4.75027 17.5 6.00017 17.5 8.5 17.5H11.5C13.9998 17.5 15.2498 17.5 16.1259 16.8634C16.4089 16.6577 16.6577 16.4089 16.8634 16.1259C17.5 15.2498 17.5 13.9998 17.5 11.5Z" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
<path d="M7.5 10.8334C7.5 9.45262 8.61925 8.33337 10 8.33337C11.3807 8.33337 12.5 9.45262 12.5 10.8334C12.5 12.2141 11.3807 13.3334 10 13.3334C8.61925 13.3334 7.5 12.2141 7.5 10.8334Z" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
</svg>

<span className='text-[13px] font-extrabold'>مشاهده تصاویر AR</span>



</button>




</div>




</div>  ):(<div ref={section3Ref} className='lg:w-[361px] w-full  lg:mr-9  mr-0   px-2 lg:px-0  m-0 lg:ml-20  lg:min-h-[500px]   h-[19rem]    lg:h-[336px]  justify-start  flex flex-col lg:justify-center lg:gap-1 items-center lg:items-start'>
        
        
        
        
        <div className='  justify-center items-center  w-full lg:hidden flex'>

<div className='w-[51px] h-[4px]  mb-2 bg-[#412820] rounded-full'></div>
</div>




<div className=' px-4 lg:px-0 flex justify-between mb-6  w-full items-center'>

  

<span className='  font-extrabold text-[#2D2D2D] text-[20px]'>ثبت نظر</span>


<div className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section1")} className=' border-b-3 border-b-[#9D796E] font-extrabold text-[16px] text-[#9D796E]'>برگشت به عقب</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#9D796E" stroke-width="2"/>
</svg>

</div>


</div>

<div className='lg:overflow-hidden overflow-auto   max-h-[320px] px-2  pb-2 flex-col w-full justify-start flex items-center gap-2'>
<input type='text' className=' p-3 placeholder:text-[14px] focus:border-black border border-solid   text-black placeholder:text-medgray   border-medgray/60 w-full placeholder:font-medium transition-all duration-150 ease-in-out rounded-[8px]' placeholder='نام' />
<input 
  type="tel" 
  className="p-3 text-right placeholder:text-[14px] focus:border-black border border-solid text-black placeholder:text-medgray border-medgray/60 w-full placeholder:font-medium transition-all duration-150 ease-in-out rounded-[8px]" 
  placeholder="شماره تلفن" 
/>
         <Rating
        initialRating={rating}
        emptySymbol={<span style={{ color: "gray", fontSize: "30px" }}>

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36051 1.72614C8.03109 0.313458 9.96859 0.313455 10.6392 1.72613L11.7981 4.16761C12.0644 4.72858 12.5791 5.11741 13.1745 5.20736L15.7659 5.59887C17.2654 5.8254 17.8641 7.74124 16.7791 8.84086L14.9039 10.7413C14.4731 11.1779 14.2765 11.8071 14.3782 12.4236L14.8208 15.1071C15.077 16.6598 13.5095 17.8438 12.1684 17.1107L9.85053 15.8438C9.31796 15.5527 8.68172 15.5527 8.14915 15.8438L5.83131 17.1107C4.49016 17.8438 2.92269 16.6598 3.17883 15.1071L3.62149 12.4236C3.72321 11.8071 3.5266 11.1779 3.09574 10.7413L1.22057 8.84086C0.135559 7.74125 0.734277 5.8254 2.23372 5.59887L4.82515 5.20736C5.42058 5.11741 5.93531 4.72858 6.20159 4.16761L7.36051 1.72614Z" fill="#B4BDCA"/>
</svg>

        </span>}
        fullSymbol={<span style={{ color: "gold", fontSize: "30px" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.36051 2.72614C9.03109 1.31346 10.9686 1.31346 11.6392 2.72613L12.7981 5.16761C13.0644 5.72858 13.5791 6.11741 14.1745 6.20736L16.7659 6.59887C18.2654 6.8254 18.8641 8.74124 17.7791 9.84086L15.9039 11.7413C15.4731 12.1779 15.2765 12.8071 15.3782 13.4236L15.8208 16.1071C16.077 17.6598 14.5095 18.8438 13.1684 18.1107L10.8505 16.8438C10.318 16.5527 9.68172 16.5527 9.14915 16.8438L6.83131 18.1107C5.49016 18.8438 3.92269 17.6598 4.17883 16.1071L4.62149 13.4236C4.72321 12.8071 4.5266 12.1779 4.09574 11.7413L2.22057 9.84086C1.13556 8.74125 1.73428 6.8254 3.23372 6.59887L5.82515 6.20736C6.42058 6.11741 6.93531 5.72858 7.20159 5.16761L8.36051 2.72614Z" fill="#FFB121"/>
        </svg>
        </span>}
        onChange={(value) => setRating(value)}
      />
<textarea type='text' className=' resize-none min-h-[100px]  max-h-h-[202px] overflow-auto  p-3 placeholder:text-[14px] focus:border-black border border-solid   text-black placeholder:text-medgray   border-medgray/60 w-full placeholder:font-medium transition-all duration-150 ease-in-out rounded-[8px]' placeholder='پیام شما' />


<button  className='  py-2 px-4 bg-[#36B894]   rounded'>ثبت نظر</button>
</div>







</div>)}















</div>

















     


<div className='  lg:flex hidden lg:top-1/2 lg:-translate-y-1/2 lg:-right-59 absolute'>
      <div className=' relative'>

        <div className='  z-50'>
        <Carousel/>

        </div>
  
      <div className='w-[226px] h-[512px] hidden  -z-50 -right-7 absolute  top-1/2 -translate-y-1/2  bg-[#DA4914] rounded-[50px]'></div>


      </div>



      </div>





     
      <div className='    topcustom2  top-3  min-w-[353px] min-h-[344px]   left-1/2 -translate-x-1/2   absolute lg:hidden flex'>
      <div className=' relative'>

      <div onClick={()=>setIsOpen(false)} className='absolute rounded-full bg-[#9D796E]/90 right-5   shadow-2xl lg:hidden block top-5 z-40 hover:scale-95 transition-all duration-150 ease-in-out '>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 37.9167C10.1168 37.9167 2.0835 29.8834 2.0835 20C2.0835 10.1167 10.1168 2.08337 20.0002 2.08337C29.8835 2.08337 37.9168 10.1167 37.9168 20C37.9168 29.8834 29.8835 37.9167 20.0002 37.9167ZM20.0002 4.58337C11.5002 4.58337 4.5835 11.5 4.5835 20C4.5835 28.5 11.5002 35.4167 20.0002 35.4167C28.5002 35.4167 35.4168 28.5 35.4168 20C35.4168 11.5 28.5002 4.58337 20.0002 4.58337Z" fill="#8F9DAF"/>
<path d="M15.2829 25.9665C14.9663 25.9665 14.6496 25.8499 14.3996 25.5999C13.9163 25.1165 13.9163 24.3165 14.3996 23.8332L23.8329 14.3999C24.3163 13.9165 25.1163 13.9165 25.5996 14.3999C26.0829 14.8832 26.0829 15.6832 25.5996 16.1665L16.1663 25.5999C15.9329 25.8499 15.5996 25.9665 15.2829 25.9665Z" fill="#8F9DAF"/>
<path d="M24.7163 25.9665C24.3996 25.9665 24.0829 25.8499 23.8329 25.5999L14.3996 16.1665C13.9163 15.6832 13.9163 14.8832 14.3996 14.3999C14.8829 13.9165 15.6829 13.9165 16.1663 14.3999L25.5996 23.8332C26.0829 24.3165 26.0829 25.1165 25.5996 25.5999C25.3496 25.8499 25.0329 25.9665 24.7163 25.9665Z" fill="#8F9DAF"/>
</svg>

</div>

        <div className='  z-50'>
        <Carousel/>

        </div>
  
      <div className='w-[226px] h-[512px] hidden  -z-50 -right-7 absolute  top-1/2 -translate-y-1/2  bg-[#DA4914] rounded-[50px]'></div>


      </div>



      </div>










    </div>

   
  

  </div>
      </ReactModal>

</div>










    </div>
  )
}

export default Index
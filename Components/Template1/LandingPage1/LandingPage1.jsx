import React from 'react'
import Image from 'next/image'
import CategoryItem from '../CategoryItem/CategoryItem'
import BreakFastIcon from '@/Components/Icons/BreakFastIcon/BreakFastIcon'
import DessertIcon from '@/Components/Icons/DessertIcon/DessertIcon'
import DrinksIcon from '@/Components/Icons/DrinksIcon/DrinksIcon'
import FastFoodIcon from '@/Components/Icons/FastFoodIcon/FastFoodIcon'
import InternationalFoodIcon from '@/Components/Icons/InternationalFoodIcon/InternationalFoodIcon'
import PersianFoodIcon from '@/Components/Icons/PersianFoodIcon/PersianFoodIcon'
import SaladIcon from '@/Components/Icons/SaladIcon/SaladIcon'
import gsap from "gsap";
import { useRef,useEffect,useState } from 'react'

function LandingPage1() {
    const [isOpen, setIsOpen] = useState(false);
    const pageRef = useRef(null);

    useEffect(() => {
      gsap.from(pageRef.current, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power3.out",
      });
    }, []);


    useEffect(() => {
      // Select all cards
      const cards = gsap.utils.toArray(".card");
  
      // Loop through each card and apply animations
      cards.forEach((card, index) => {
        if (card.classList.contains("animate-from-right")) {
          // Animate from the right
          gsap.from(card, {
            x: 100, // Start from 100px to the right
            opacity: 0, // Start with opacity 0
            duration: 1, // Animation duration
            delay: index * 0.3, // Stagger delay
            ease: "power2.out", // Easing function
          });
        } else if (card.classList.contains("animate-from-left")) {
          // Animate from the left
          gsap.from(card, {
            x: -100, // Start from 100px to the left
            opacity: 0, // Start with opacity 0
            duration: 1, // Animation duration
            delay: index * 0.3, // Stagger delay
            ease: "power2.out", // Easing function
          });
        }
      });
    }, []); // Empty dependency array ensures this runs only once after the component mounts
  



  return (
    <div ref={pageRef} className='landingbg1 landingbgmob1 items-center lg:flex-row flex-col  p-2 pt-5 flex justify-between  min-h-screen overflow-hidden     w-full relative'>
    
    
    
    
    
    <div>

  <div className=' m-0 lg:mr-56 relative  flex   justify-center flex-col items-center gap-4  z-10'>

  <div className=' mt-3 w-[95vw] lg:w-[480px] lg:hidden flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#D99F35"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>





  <Image className=' lg:w-[160px] lg:h-[160px] w-[88px] h-[88px] aspect-square' src={'/assets/template1/2.png'} width={1000} height={1000} alt='Landing_Img'/>
 <span className=' lg:text-[32px] cursor-pointer text-[18px] font-black'>نام فروشگاه شما</span>
 <span className=' hidden lg:flex text-[20px] font-normal'>resturant / cafe</span>
 <button className='  lg:text-[16px] text-[14px] w-[157px] lg:w-[180px] font-extrabold   bg-btn1  px-0 rounded-[12px] p-2'>درباره فروشگاه</button>


<div className=' mt-3 w-[480px] hidden lg:flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#D99F35"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
  </div>


</div>
    
    
    
    
    
    
    
      <div className=' z-30 lg:w-[738px] border-[1px] border-white lg:border-0 mt-20 lg:mt-0 w-[98%] flex flex-col   gap-4 lg:gap-14  justify-start items-center h-max pb-8 lg:h-screen leftsidecontmob1 lg:leftsidecont1 rounded-[26px] lg:rounded-br-[64px]  lg:rounded-tr-[64px]'>

<div className=' w-full lg:mt-14   mt-8   flex items-center justify-between px-4 lg:px-10'>

<div className=' relative  w-fit'>
  <span  className='  relative lg:text-[28px] text-[20px] font-black  z-10'>دسته بندی‌ها</span>
  <div className=' absolute  w-full  lg:h-3  z-0   h-8     bg-textsec1  bottom-0 lg:bg-textbg1'></div>


</div>
 
  <button className=' cursor-pointer text-[14px] lg:text-[16px] font-extrabold p-4  lg:px-3  bg-btn1  rounded-[12px] lg:p-2'>مشاهده همه  آیتم‌ها</button>



</div>

<div className=' flex justify-center gap-4 items-center  px-4 lg:px-10 flex-wrap flex-row-reverse'>
  <div className=' w-[30%] card animate-from-left'><CategoryItem  link={'/'} text={'غذاهای دریایی / سالاد'} icon={<SaladIcon  color={"#900000"}/>} /></div>
  <div className=' w-[30%]  card animate-from-right'><CategoryItem link={'/'} text={'فست فود'} icon={<FastFoodIcon  color={"#900000"}/>} /></div>
  <div className='w-[30%]  card animate-from-left'><CategoryItem link={'/'} text={'غذای ایرانی'} icon={<PersianFoodIcon  color={"#900000"}/>} /></div>
  <div className='w-[30%]   card animate-from-right'><CategoryItem link={'/'} text={'خوراک و غذاهای فرنگی'} icon={<InternationalFoodIcon  color={"#900000"}/>} /></div>
  <div className=' w-[30%]  card animate-from-left'><CategoryItem link={'/'} text={'صبحانه'} icon={<BreakFastIcon  color={"#900000"}/>} /></div>
  <div className='w-[30%]  card animate-from-right'><CategoryItem link={'/'} text={'دسر و پیش‌غذا'} icon={<DessertIcon  color={"#900000"}/>} /></div>
  <div className=' w-[30%]  card animate-from-left'><CategoryItem link={'/'} text={'نوشیدنی‌های گرم و سرد'} icon={<DrinksIcon  color={"#900000"}/>} /></div>








</div>




</div>






        <Image className=' absolute    z-0 right-0 top-20 lg:top-0' src={'/assets/template1/1.png'} width={1000} height={1000} alt='Landing_Img'/>
        <Image
  className='absolute z-0 lg:-right-5 flex  lg:hidden left-1/2 -translate-x-1/2 top-90 lg:-bottom-12 '
  src={'/assets/template1/3.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>


<Image
  className='absolute z-0 flex   lg:hidden left-1/2 -translate-x-1/2   bottom-0 '
  src={'/assets/template1/3.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>



<Image
  className='absolute z-0 lg:-right-5  hidden lg:flex  lg:-bottom-12 '
  src={'/assets/template1/3.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>



    </div>



  )
}

export default LandingPage1
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
import ItemsCard from '../ItemsCard/ItemsCard'
import Carousel from '../Carousel/Carousel'
import ReactModal from 'react-modal'
import Rating from "react-rating";

import CommentCard from '../CommentCard/CommentCard'
import { BiCommentAdd } from "react-icons/bi";
import gsap from "gsap";
import Link from 'next/link'
import { useRef,useEffect,useState } from 'react'

function LandingPage1() {
    const [rating, setRating] = useState(3);
      const [isOpen, setIsOpen] = useState(false);
      const closeModal = () => setIsOpen(false);
      const openModal = () => setIsOpen(true);
        const [activeSection, setActiveSection] = useState("section1");
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
    const [width, setwidth] = useState(null);
    useEffect(() => {
      // This code runs only in the browser
      setwidth(window.innerWidth >= 1024 ? 72: 48 );
    }, []);
    console.log(width)
  
  
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
  
  

  return (
    <div  className='landingbg1   landingbgmob1  items-center lg:items-start lg:flex-row flex-col
      px-2  lg:pt-0 lg:p-0  flex   lg:justify-between justify-start 
       min-h-screen overflow-hidden     w-full relative'>
    
    
    
    
    
    <div className=' lg:flex hidden  bgcontlandind2 border-[1px] border-white h-screen  justify-center items-center w-[665px] z-50'>

  <div className='  relative   flex   justify-center flex-col  items-start gap-4  z-10'>

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

 <button className='  lg:text-[16px] text-[14px] w-[157px] lg:w-[180px] font-extrabold    bg-black  px-0 rounded-[12px] p-2'>درباره فروشگاه</button>

 <ItemsCard modaltriger={openModal} isliked={false}/>



 


<div className=' mt-3 w-[480px] hidden lg:flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.92334" width="50" height="50" rx="10" fill="#DA4914"/>
<path d="M35.6667 25.258C35.6667 31.5179 30.5925 36.5927 24.3333 36.5927C18.0741 36.5927 13 31.5179 13 25.258C13 18.998 18.0741 13.9233 24.3333 13.9233C30.5925 13.9233 35.6667 18.998 35.6667 25.258Z" fill="white" fill-opacity="0.18"/>
<path d="M37 37.9229L32.3461 33.2693M32.3461 33.2693C34.3961 31.2185 35.664 28.3857 35.664 25.2567C35.664 18.9974 30.5905 13.9233 24.332 13.9233C18.0735 13.9233 13 18.9974 13 25.2567C13 31.5159 18.0735 36.59 24.332 36.59C27.4619 36.59 30.2953 35.3209 32.3461 33.2693Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



</div>
  </div>


</div>



<div className='  flex flex-col justify-start items-center gap-5 z-40'>


<div className='mt-10 z-30  w-[95vw] lg:w-[480px] lg:hidden flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#D99F35"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
    

<div className='z-30 bg-[#E361258A] h-[165px] lg:hidden flex pl-6 gap-4 rounded-[24px] border-[1px]
 border-white  justify-center items-center w-[95vw]'>


  <Image src={'/assets/template2/5.png'} width={125} height={125} alt='logo_home'/>

  <div className=' flex flex-col justify-center gap-2 items-start'>
    <span className='text-[18px] font-black text-white'>نام فروشگاه شما</span>

    <button className=' text-[14px] font-extrabold p-2 rounded-[12px] px-8 bg-[#1D1D1D]'>درباره فروشگاه</button>
  </div>



</div>




</div>
    

    
    
    
    
      <div className=' z-30 lg:w-[738px] mb-20 border-[1px] border-white mt-3 lg:mt-0 w-[98%] flex flex-col
         gap-4 lg:gap-14  relative justify-start items-center h-max pb-14 lg:pb-8 lg:h-screen leftsidecontmob2
       lg:leftsidecont2 rounded-[26px] min-h-[519px] backdrop-blur-[3px] lg:rounded-[0px] lg:rounded-br-[64px]  lg:rounded-tr-[64px]'>

<div className=' w-full lg:mt-14   mt-4   flex items-center justify-between px-4 lg:px-10'>

<div className=' relative  w-fit'>
  <span  className='  relative lg:text-[28px] text-[20px] font-black  z-10'>دسته بندی‌ها</span>
  <div className=' absolute  w-full  lg:h-3  z-0   h-8     bg-textbg2  bottom-0 lg:bg-textbg2'></div>


</div>
 
  <button className=' cursor-pointer text-[14px] lg:text-[16px] font-extrabold p-4 px-6   lg:px-3  bg-[#1D1D1D]  rounded-[12px] lg:p-2'>مشاهده همه  آیتم‌ها</button>



</div>

<div className=' flex justify-center gap-4 items-center  px-4 lg:px-10 flex-wrap flex-row-reverse'>
  <div className=' w-[30%] card animate-from-left'><CategoryItem  link={'/Categories'} text={'غذاهای دریایی / سالاد'} icon={<SaladIcon size={width} color="#ffffff" />} /></div>
  <div className='  w-[30%]  card animate-from-right'><CategoryItem link={'/Categories'} text={'فست فود'} icon={<FastFoodIcon  size={width} color={"#ffffff"}/>} /></div>
  <div className=' w-[30%]  card animate-from-left'><CategoryItem link={'/Categories'} text={'غذای ایرانی'} icon={<PersianFoodIcon size={width} color={"#ffffff"}/>} /></div>
  <div className='  w-[30%] card animate-from-right'><CategoryItem link={'/Categories'} text={'خوراک و غذاهای فرنگی'} icon={<InternationalFoodIcon size={width}  color={"#ffffff"}/>} /></div>
  <div className='  w-[30%] card animate-from-left'><CategoryItem link={'/Categories'} text={'صبحانه'} icon={<BreakFastIcon  size={width} color={"#ffffff"}/>} /></div>
  <div className='  w-[30%] card animate-from-right'><CategoryItem link={'/Categories'} text={'دسر و پیش‌غذا'} icon={<DessertIcon  size={width} color={"#ffffff"}/>} /></div>
  <div className='  w-[30%]  card animate-from-left'><CategoryItem link={'/Categories'} text={'نوشیدنی‌های گرم و سرد'} icon={<DrinksIcon  size={width} color={"#ffffff"}/>} /></div>








</div>
<div className=' absolute lg:hidden block -bottom-0'>
<div className=' flex flex-col  relative justify-start items-center gap-1' >
<Image
  className='  w-38 h-auto'
  src={'/assets/template2/7.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>
<Image
  className='  w-26 absolute top-5 h-auto '
  src={'/assets/template2/7.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>

</div>


</div>


<ReactModal
        
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal-content lg:relative  fixed bottom-0"
        overlayClassName="modal-overlay"
      >
  <div className=' relative  bg-white   rounded-tr-[40px] rounded-tl-[40px]  lg:rounded-[40px]    h-[560px] w-screen lg:w-[800px]  '>
<div onClick={()=>setIsOpen(false)} className='absolute  lg:block hidden top-5 z-40 hover:scale-95 transition-all duration-150 ease-in-out left-5'>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 37.9167C10.1168 37.9167 2.0835 29.8834 2.0835 20C2.0835 10.1167 10.1168 2.08337 20.0002 2.08337C29.8835 2.08337 37.9168 10.1167 37.9168 20C37.9168 29.8834 29.8835 37.9167 20.0002 37.9167ZM20.0002 4.58337C11.5002 4.58337 4.5835 11.5 4.5835 20C4.5835 28.5 11.5002 35.4167 20.0002 35.4167C28.5002 35.4167 35.4168 28.5 35.4168 20C35.4168 11.5 28.5002 4.58337 20.0002 4.58337Z" fill="#8F9DAF"/>
<path d="M15.2829 25.9665C14.9663 25.9665 14.6496 25.8499 14.3996 25.5999C13.9163 25.1165 13.9163 24.3165 14.3996 23.8332L23.8329 14.3999C24.3163 13.9165 25.1163 13.9165 25.5996 14.3999C26.0829 14.8832 26.0829 15.6832 25.5996 16.1665L16.1663 25.5999C15.9329 25.8499 15.5996 25.9665 15.2829 25.9665Z" fill="#8F9DAF"/>
<path d="M24.7163 25.9665C24.3996 25.9665 24.0829 25.8499 23.8329 25.5999L14.3996 16.1665C13.9163 15.6832 13.9163 14.8832 14.3996 14.3999C14.8829 13.9165 15.6829 13.9165 16.1663 14.3999L25.5996 23.8332C26.0829 24.3165 26.0829 25.1165 25.5996 25.5999C25.3496 25.8499 25.0329 25.9665 24.7163 25.9665Z" fill="#8F9DAF"/>
</svg>

</div>
    
    <div className='   relative    z-0  h-[560px]  w-screen  lg:w-[800px] overflow-hidden  '>

    <Image className="lg:w-[501px] lg:h-[501px]  lg:top-[49px] absolute -bottom-[100px] h-[403px] 
     opacity-[25%] lg:left-[-178px]  filter grayscale brightness-90" src={'/assets/template1/7.png'} width={1000} height={1000} alt='modal_Img'/>
    </div>

    <div className=' z-30       rounded-tl-[40px] rounded-tr-[40px] lg:rounded-[40px] flex justify-end
     items-center    lg:h-[560px] h-[560px]   w-screen lg:w-[800px]   bottom-0 fixed'>




<div className='  h-full w-full  flex flex-col justify-end  lg:justify-center lg:w-[495px]   '>




{activeSection==='section2' ?(    
    <div ref={section2Ref}  className='lg:w-[443px]  hcustom    w-full ml-0 mr-0 lg:mr-5  mt-0  lg:ml-6  h-[24rem]   flex flex-col  justify-start gap-1 items-start'>
<div className='   justify-center items-center  w-full lg:hidden flex'>

<div className='w-[51px] h-[4px]  mb-2 bg-btn1/50 rounded-full'></div>
</div>




<div className=' px-4 lg:px-0 flex justify-between mb-6  w-full items-center'>

  

<span className='  font-extrabold text-[#2D2D2D] text-[20px]'>نظرات کاربران</span>


<div className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section1")} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>برگشت به عقب</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
</svg>

</div>


</div>

<div className=' scrollbar-none  pb-5  w-full lg:w-fit  flex flex-col justify-start items-center h-[430px] max-h-[35vh] lg:max-h-[410px] overflow-y-auto  '>


<CommentCard isadmin={false}/>
<CommentCard isadmin={true}/>
<CommentCard isadmin={false}/>


</div>



</div>
):activeSection==='section1' ?( <div ref={section1Ref} className='  gap-1 pb-3  flex flex-col justify-start lg:justify-center scrollbar-none  pt-10 lg:pt-0 overflow-y-scroll hcustom max-h-[26rem]  h-[26rem]  lg:max-h-full  px-2 lg:px-12 lg:h-full  items-center lg:items-start'>
       
       
  <span className=' mb-3 bg-[#D99F35] w-[110px]   hidden lg:block   text-center font-black text-[16.49px] py-1 rounded-[35.51px]'>20 % تخفیف</span>

<div className='w-[51px] h-[4px] lg:hidden block  mb-2 bg-btn1/50 rounded-full'>.</div>


<div className=' min-h-fit relative'>

<span className=' mt-2 text-[20px] lg:text-[22px] font-extrabold text-black'>عنوان آیتم | item name</span>
<span className='offcard1 lg:hidden absolute -top-5 text-[13.03px] font-black  bg-btn1 text-center min-w-[48.35897816820379] rounded-[33.17px] rotate-[-25.15deg]   py-[4px]'>
20 %

</span>
</div>

<span className=' text-textsec1 text-[14px] lg:text-[16px]  font-extrabold'>عنوان دسته بندی</span>
<p className='text-[13px] my-4 font-medium text-[#515151] text-center lg:text-right 
'>توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود...توضیحات در اینجا نوشته میشود...</p>


<div className='  flex       mb-6 custom-mb w-full justify-start flex-col items-center lg:items-start  relative'>

<div className=' relative'>
<span className=' font-semibold text text-[#2D2D2D] text-[13px]'>200 هزارتومان</span>
<div className='   top-0.5  right-1 absolute'>

<svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.5536 0.579346L0.840332 20.7194" stroke="#D99F35" stroke-width="1.18471"/>
</svg>
</div>


</div>

<div className='   flex-col lg:flex-row gap-7 lg:gap-0 flex justify-between items-center  w-full'>

<span className=' font-black text-textsec1 text-[18px]'>180 هزارتومان</span>


<div className=' cursor-pointer  transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section2")} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>مشاهده نظرات</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
</svg>

</div>


</div>






</div>

<div className=' flex justify-center    gap-3 items-center'>

<button onClick={() => navigateToSection("section3")} className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center w-[178px] py-3 bg-[#F2AEAE] rounded-[11px] gap-2 items-center'>
<div className=' text-black'><BiCommentAdd size={20} /></div>



<span className='text-[13px] text-black font-extrabold'>افزودن به نظر</span>



</button>


<button className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center w-[178px] py-3 bg-textsec1 rounded-[11px] gap-2 items-center'>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 8.70367V11.5C17.5 13.9998 17.5 15.2498 16.8634 16.1259C16.6577 16.4089 16.4089 16.6577 16.1259 16.8634C15.2498 17.5 13.9998 17.5 11.5 17.5H8.5C6.00017 17.5 4.75027 17.5 3.87405 16.8634C3.59107 16.6577 3.34221 16.4089 3.13661 16.1259C2.5 15.2498 2.5 13.9998 2.5 11.5V8.70367C2.5 8.35975 2.5 8.1878 2.51268 8.04282C2.65367 6.43132 3.93133 5.15368 5.54282 5.01268C5.6878 5 5.85977 5 6.2037 5H6.38889C6.5423 5 6.66667 4.87563 6.66667 4.72222C6.66667 3.49492 7.66159 2.5 8.88892 2.5H11.1111C12.3384 2.5 13.3333 3.49492 13.3333 4.72222C13.3333 4.87563 13.4577 5 13.6111 5H13.7963C14.1402 5 14.3122 5 14.4572 5.01268C16.0687 5.15368 17.3463 6.43132 17.4873 8.04282C17.5 8.1878 17.5 8.35975 17.5 8.70367ZM10 8.33333C8.61925 8.33333 7.5 9.45258 7.5 10.8333C7.5 12.2141 8.61925 13.3333 10 13.3333C11.3807 13.3333 12.5 12.2141 12.5 10.8333C12.5 9.45258 11.3807 8.33333 10 8.33333Z" fill="white" fill-opacity="0.18"/>
<path d="M17.5 11.5V8.70367C17.5 8.35975 17.5 8.1878 17.4873 8.04282C17.3463 6.43132 16.0687 5.15368 14.4572 5.01268C14.3122 5 14.1402 5 13.7963 5H13.6111C13.4577 5 13.3333 4.87563 13.3333 4.72222C13.3333 3.49492 12.3384 2.5 11.1111 2.5H8.88892C7.66159 2.5 6.66667 3.49492 6.66667 4.72222C6.66667 4.87563 6.5423 5 6.38889 5H6.2037C5.85977 5 5.6878 5 5.54282 5.01268C3.93133 5.15368 2.65367 6.43132 2.51268 8.04282C2.5 8.1878 2.5 8.35975 2.5 8.70367V11.5C2.5 13.9998 2.5 15.2498 3.13661 16.1259C3.34221 16.4089 3.59107 16.6577 3.87405 16.8634C4.75027 17.5 6.00017 17.5 8.5 17.5H11.5C13.9998 17.5 15.2498 17.5 16.1259 16.8634C16.4089 16.6577 16.6577 16.4089 16.8634 16.1259C17.5 15.2498 17.5 13.9998 17.5 11.5Z" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
<path d="M7.5 10.8334C7.5 9.45262 8.61925 8.33337 10 8.33337C11.3807 8.33337 12.5 9.45262 12.5 10.8334C12.5 12.2141 11.3807 13.3334 10 13.3334C8.61925 13.3334 7.5 12.2141 7.5 10.8334Z" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
</svg>

<span className='text-[13px] font-extrabold'>مشاهده تصاویر AR</span>



</button>




</div>




</div>  ):(<div ref={section3Ref} className='lg:w-[361px] w-full  lg:mr-9  mr-0   px-2 lg:px-0  m-0 lg:ml-20  lg:min-h-[500px]  hcustom h-[24rem]    lg:h-[336px]  justify-start  flex flex-col lg:justify-center lg:gap-1 items-center lg:items-start'>
        
        
        
        
        <div className='  justify-center items-center  w-full lg:hidden flex'>

<div className='w-[51px] h-[4px]  mb-2 bg-btn1/50 rounded-full'></div>
</div>




<div className=' px-4 lg:px-0 flex justify-between mb-6  w-full items-center'>

  

<span className='  font-extrabold text-[#2D2D2D] text-[20px]'>ثبت نظر</span>


<div className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section1")} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>برگشت به عقب</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
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


<button  className='  py-2 px-4 bg-btn1   rounded'>ثبت نظر</button>
</div>







</div>)}















</div>

















     


<div className='  lg:flex hidden lg:top-1/2 lg:-translate-y-1/2 lg:-right-38 absolute'>
      <div className=' relative'>

        <div className='  z-50'>
        <Carousel/>

        </div>
  
      <div className='w-[226px] h-[512px] hidden  -z-50 -right-7 absolute  top-1/2 -translate-y-1/2  bg-[#DA4914] rounded-[50px]'></div>


      </div>



      </div>





     
      <div className='    topcustom -top-50  min-w-[353px] min-h-[344px]   left-1/2 -translate-x-1/2   absolute lg:hidden flex'>
      <div className=' relative'>

      <div onClick={()=>setIsOpen(false)} className='absolute rounded-full bg-textsec1/80 right-5   shadow-2xl lg:hidden block top-5 z-40 hover:scale-95 transition-all duration-150 ease-in-out '>
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




<div className=' fixed  top-0   z-0   h-screen  left-1/2 -translate-x-1/2 w-screen'>


  <div className=' relative'>

  <Image className=' z-10 top-0  h-screen  absolute  w-full   ' src={'/assets/template2/1.png'} width={1000} height={1000} alt='Landing_Img'/>
  <div className="absolute   z-50 top-0  h-screen w-full  bg-white opacity-60 "></div>
  
  </div>
</div>

     
        
        
        
        
        
        <Image
  className='fixed z-0 lg:-right-5 flex  lg:hidden left-1/2 -translate-x-1/2 top-90 lg:-bottom-12 '
  src={'/assets/template1/3.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>


<Image
  className='fixed z-0 flex  right-0 bottom-0 '
  src={'/assets/template2/3.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>



<Image
  className='fixed z-0 bottom-0  left-0'
  src={'/assets/template2/2.png'}
  width={1000}
  height={1000}
  alt='Landing_Img'
/>



    </div>



  )
}

export default LandingPage1
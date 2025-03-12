"use client";
import React from 'react'
import Image from 'next/image'
import ItemsCard from '../ItemsCard/ItemsCard'
import { useState ,useRef ,useEffect } from 'react';
import ReactModal from 'react-modal';
import Carousel from '@/Components/Carousel/Carousel';
import CommentCard from '../CommentCard/CommentCard';
import gsap from "gsap";
ReactModal.setAppElement('#__next');

function Categoreis1() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [showSection, setShowSection] = useState(false);

  const [activeSection, setActiveSection] = useState(1);


  const sectionRef = useRef(null);



  const pageRef = useRef(null);
  const modalRef = useRef(null);
  const modalContainerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);


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

  // Section Toggle Animation
  const switchSection = (section) => {
    if (section === activeSection) return;

    const currentRef = activeSection === 1 ? section1Ref : section2Ref;
    const nextRef = section === 1 ? section1Ref : section2Ref;

    // Animate current section out
    gsap.to(currentRef.current, {
      opacity: 0,
      x: -100,
      duration: 0.1,
      onComplete: () => {
        setActiveSection(section);
        // Animate next section in
        gsap.fromTo(
          nextRef.current,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });
  };



  return (
    <div ref={pageRef} className=' bgimagecategorymob1 lg:bgimagecategory1 min-h-screen relative w-full '>
      


        <div className=' lg:px-20 px-0 pb-10 lg:pb-0 items-center pt-8 lg::pt-20 mix-blend-overlay
         flex flex-col bg-[#935420]
 justify-center gap-8  lg:bg-[#834223]'>

        <div className=' mt-3 w-[95vw] lg:w-[480px] lg:hidden flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#D99F35"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>


            
  <div className=' w-full     flex justify-center   lg:justify-between  items-center gap-4  z-10'>

<div className=' flex lg:justify-start items-center gap-3'>

<Image className=' lg:w-[160px] lg:h-[160px] w-[88px] h-[88px] aspect-square' src={'/assets/template1/2.png'} width={1000} height={1000} alt='Landing_Img'/>
 
 <div className=' flex flex-col items-start justify-center'>

 <span className=' lg:text-[32px] text-[20px] cursor-pointer font-black'>نام فروشگاه شما</span>
 <span className=' lg:text-[20px] text-[16px] font-normal'>resturant / cafe</span>

 </div>


</div>
  
 


<div className=' hidden lg:flex  w-[480px] bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#D99F35"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
  </div>


  <div className=' mt-12   pb-8 border-b-[1px] border-white gap-4  flex justify-between items-center'>

    <ul className=' flex lg:flex-wrap   flex-nowrap lg:max-w-fit max-w-[70vw] scrollbar-none  overflow-x-auto justify-start gap-1 lg:gap-[32px] items-center'>
        <li  className=' lg:min-w-[167px] min-w-[100px]  cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[12px] lg:text-[16px]'>دسته بندی اول </li>
        <li  className=' lg:min-w-[167px]  min-w-[100px]  cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-none lg:bg-white/30 font-black text-[12px] lg:text-[16px]'>دسته بندی دوم </li>
        <li  className=' lg:min-w-[167px] min-w-[100px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-none lg:bg-white/30 font-black text-[12px] lg:text-[16px]'>دسته بندی سوم </li>
        <li  className=' lg:min-w-[167px] min-w-[100px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-none lg:bg-white/30 font-black text-[12px] lg:text-[16px]'>دسته بندی چهارم </li>
        <li  className=' lg:min-w-[167px] min-w-[100px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-none lg:bg-white/30 font-black text-[12px] lg:text-[16px]'>دسته بندی پنجم </li>
        <li  className='lg:min-w-[167px] min-w-[100px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-none lg:bg-white/30 font-black text-[12px] lg:text-[16px]'>دسته بندی ششم </li>
        <li  className=' lg:min-w-[167px] min-w-[100px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-none lg:bg-white/30 font-black text-[12px] lg:text-[16px]'>دسته بندی هفتم </li>
  
    </ul>

    <button className=' hidden lg:flex cursor-pointer text-center   justify-center items-center gap-1  w-[182px]  bg-btn1  px-0 rounded-[10px] p-2'>
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 11.4V4.6C21.5 3.1 20.86 2.5 19.27 2.5H15.23C13.64 2.5 13 3.1 13 4.6V11.4C13 12.9 13.64 13.5 15.23 13.5H19.27C20.86 13.5 21.5 12.9 21.5 11.4Z" fill="white"/>
<path d="M11 13.6V20.4C11 21.9 10.36 22.5 8.77 22.5H4.73C3.14 22.5 2.5 21.9 2.5 20.4V13.6C2.5 12.1 3.14 11.5 4.73 11.5H8.77C10.36 11.5 11 12.1 11 13.6Z" fill="white"/>
<path d="M21.5 20.4V17.6C21.5 16.1 20.86 15.5 19.27 15.5H15.23C13.64 15.5 13 16.1 13 17.6V20.4C13 21.9 13.64 22.5 15.23 22.5H19.27C20.86 22.5 21.5 21.9 21.5 20.4Z" fill="white"/>
<path d="M11 7.4V4.6C11 3.1 10.36 2.5 8.77 2.5H4.73C3.14 2.5 2.5 3.1 2.5 4.6V7.4C2.5 8.9 3.14 9.5 4.73 9.5H8.77C10.36 9.5 11 8.9 11 7.4Z" fill="white"/>
</svg>
<span className=' text-[16px] font-extrabold  '>دسته بندیها</span>



    </button>




    <button className='  flex lg:hidden cursor-pointer text-center   justify-center items-center gap-1  w-[80px]  bg-btn1  px-0 rounded-[10px] py-2'>

<span className=' text-[12px] font-extrabold  '>دسته بندیها</span>



    </button>


  </div>



        </div>


        <div className='  lg:px-20  pb-20 mix-blend-overlay bg-[#6C2727] flex flex-col justify-start items-center'>

          <span className=' font-extrabold py-8 text-[16px] lg:text-[29px]'>عنوان دسته بندی</span>


<div className=' flex   justify-center gap-4 items-center  lg:px-0 px-3 flex-wrap'>

  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true} />
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>
  <ItemsCard modaltriger={openModal} isliked={false}/>
  <ItemsCard modaltriger={openModal} isliked={true}/>


</div>



        </div>



<div ref={modalContainerRef}>

<ReactModal
        
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal-content lg:relative absolute bottom-0"
        overlayClassName="modal-overlay"
      >
  <div className=' relative   rounded-tr-[40px] rounded-tl-[40px]  lg:rounded-[40px] h-[62vh] lg:h-[560px] w-screen lg:w-[800px]  bg-white'>
<div onClick={()=>setIsOpen(false)} className='absolute lg:block hidden top-5 z-40 hover:scale-95 transition-all duration-150 ease-in-out left-5'>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 37.9167C10.1168 37.9167 2.0835 29.8834 2.0835 20C2.0835 10.1167 10.1168 2.08337 20.0002 2.08337C29.8835 2.08337 37.9168 10.1167 37.9168 20C37.9168 29.8834 29.8835 37.9167 20.0002 37.9167ZM20.0002 4.58337C11.5002 4.58337 4.5835 11.5 4.5835 20C4.5835 28.5 11.5002 35.4167 20.0002 35.4167C28.5002 35.4167 35.4168 28.5 35.4168 20C35.4168 11.5 28.5002 4.58337 20.0002 4.58337Z" fill="#8F9DAF"/>
<path d="M15.2829 25.9665C14.9663 25.9665 14.6496 25.8499 14.3996 25.5999C13.9163 25.1165 13.9163 24.3165 14.3996 23.8332L23.8329 14.3999C24.3163 13.9165 25.1163 13.9165 25.5996 14.3999C26.0829 14.8832 26.0829 15.6832 25.5996 16.1665L16.1663 25.5999C15.9329 25.8499 15.5996 25.9665 15.2829 25.9665Z" fill="#8F9DAF"/>
<path d="M24.7163 25.9665C24.3996 25.9665 24.0829 25.8499 23.8329 25.5999L14.3996 16.1665C13.9163 15.6832 13.9163 14.8832 14.3996 14.3999C14.8829 13.9165 15.6829 13.9165 16.1663 14.3999L25.5996 23.8332C26.0829 24.3165 26.0829 25.1165 25.5996 25.5999C25.3496 25.8499 25.0329 25.9665 24.7163 25.9665Z" fill="#8F9DAF"/>
</svg>

</div>
    
    <div className='  relative z-0 h-[62vh] lg:h-[560px]  w-screen lg:w-[800px] overflow-hidden '>
    <Image className="lg:w-[501px] lg:h-[501px]  lg:top-[49px] absolute -bottom-[100px] h-[403px]  opacity-[25%] lg:left-[-178px]  filter grayscale brightness-90" src={'/assets/template1/7.png'} width={1000} height={1000} alt='modal_Img'/>
    </div>

    <div className=' z-30   rounded-tl-[40px] rounded-tr-[40px] lg:rounded-[40px] flex justify-end items-center h-[62vh] lg:h-[560px] w-screen lg:w-[800px] top-0 absolute'>

{activeSection===2 ?(    
    <div ref={section1Ref} className='lg:w-[443px]   w-full ml-0  lg:ml-6 mt-45 lg:mt-18  min-h-[390px]    flex flex-col  justify-start gap-1 items-start'>
<div className='  justify-center items-center  w-full lg:hidden flex'>

<div className='w-[51px] h-[4px]  mb-2 bg-btn1/50 rounded-full'></div>
</div>




<div className=' px-4 lg:px-0 flex justify-between mb-6  w-full items-center'>

  

<span className='  font-extrabold text-[#2D2D2D] text-[20px]'>نظرات کاربران</span>


<div className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => switchSection(1)} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>برگشت به عقب</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
</svg>

</div>


</div>

<div className=' scrollbar-none  w-full flex flex-col justify-start items-center h-[410px] max-h-[35vh] lg:max-h-[410px] overflow-y-auto  '>


<CommentCard isadmin={false}/>
<CommentCard isadmin={true}/>
<CommentCard isadmin={false}/>


</div>



</div>
):(      <div ref={section2Ref} className='lg:w-[361px]  w-full  m-0 lg:ml-20 h-full pt-37 lg:h-[336px]  justify-start  flex flex-col lg:justify-center lg:gap-1 items-center lg:items-start'>
       
       
        <span className=' bg-[#D99F35] w-[110px]   hidden lg:block   text-center font-black text-[16.49px] py-2 rounded-[35.51px]'>20 % تخفیف</span>

<div className='w-[51px] h-[4px]  mb-2 bg-btn1/50 rounded-full'></div>


<div className=' relative'>

<span className=' mt-2 text-[20px] lg:text-[22px] font-extrabold text-black'>عنوان آیتم | item name</span>
<span className='offcard1 lg:hidden absolute -top-5 text-[13.03px] font-black  bg-btn1 text-center min-w-[48.35897816820379] rounded-[33.17px] rotate-[-25.15deg]   py-[4px]'>
20 %

</span>
</div>

<span className=' mb-2 text-textsec1 text-[14px] lg:text-[16px]  font-extrabold'>عنوان دسته بندی</span>
<p className='text-[13px] font-medium text-[#515151] text-center lg:text-right mt-8 lg:mt-0 mb-4 lg:mb-2'>توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود...توضیحات در اینجا نوشته میشود...</p>


<div className=' lg:mb-3 flex   mb-10 w-full justify-start flex-col items-center lg:items-start  relative'>

<div className=' relative'>
    <span className=' font-semibold text text-[#2D2D2D] text-[13px]'>200 هزارتومان</span>
<div className='   top-0.5  right-1 absolute'>

<svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.5536 0.579346L0.840332 20.7194" stroke="#D99F35" stroke-width="1.18471"/>
</svg>
</div>


</div>

<div className=' flex lg:justify-between  lg:flex-row flex-col justify-start w-full items-center'>

<span className=' font-black text-textsec1 text-[18px]'>180 هزارتومان</span>


<div className=' cursor-pointer mt-6 lg:mt-8 transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
  <span onClick={() => switchSection(2)} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>مشاهده نظرات</span>
  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
</svg>

</div>


</div>






</div>

<div className=' flex justify-center gap-3 items-center'>

<button className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center w-[178px] py-3 bg-[#F2AEAE] rounded-[11px] gap-2 items-center'>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4117 7.87082C16.5395 12.8961 9.99575 17.0833 9.99575 17.0833C9.99575 17.0833 3.40386 12.896 2.57985 7.87109C1.75585 2.84617 7.52379 1.17099 9.99575 5.06621C12.4678 1.17092 18.2839 2.84548 17.4117 7.87082Z" stroke="#1F1F1F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4117 7.87082C16.5395 12.8961 9.99575 17.0833 9.99575 17.0833C9.99575 17.0833 3.40386 12.896 2.57985 7.87109C1.75585 2.84617 7.52379 1.17099 9.99575 5.06621C12.4678 1.17092 18.2839 2.84548 17.4117 7.87082Z" fill="#1F1F1F" fill-opacity="0.18"/>
</svg>


<span className='text-[13px] text-black font-extrabold'>افزودن به علاقه‌مندی‌ها</span>



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




      </div>)}

















     


      <div className='  lg:flex hidden lg:top-1/2 lg:-translate-y-1/2 lg:-right-38 absolute'>
      <div className=' relative'>

        <div className='  z-50'>
        <Carousel/>

        </div>
  
      <div className='w-[226px] h-[512px] hidden  -z-50 -right-7 absolute  top-1/2 -translate-y-1/2  bg-[#DA4914] rounded-[50px]'></div>


      </div>



      </div>





     
      <div className='  -top-60  left-1/2 -translate-x-1/2   absolute lg:hidden flex'>
      <div className=' relative'>

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

export default Categoreis1
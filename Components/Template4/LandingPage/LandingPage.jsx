import React from 'react'
import Image from 'next/image'
import CategoryItem from '../CategoryItem/CategoryItem'
import Cosmetics from '@/Components/Icons/Cosmetics/Cosmetics'
import Haircareproducts from '@/Components/Icons/Haircareproducts/Haircareproducts'
import Perfumeandcologne from '@/Components/Icons/Perfumeandcologne/Perfumeandcologne'
import Professionalcosmeticproducts from '@/Components/Icons/Professionalcosmeticproducts/Professionalcosmeticproducts'
import Sanitaryware from '@/Components/Icons/Sanitaryware/Sanitaryware'
import Skincareproducts from '@/Components/Icons/Skincareproducts/Skincareproducts'
import { useState,useEffect } from 'react'

function LandingPage() {


    const [width, setwidth] = useState(null);
      useEffect(() => {
        // This code runs only in the browser
        setwidth(window.innerWidth >= 1024 ? 90: 48 );
      }, []);
  
  return (
    <div className=' relative min-h-screen'>


      
        <Image className=' fixed top-0 left-0 w-full h-full' src={'/assets/template4/1.webp'} width={10000} height={100000} alt='Landingng'/>
<div className='  fixed top-0 left-0 w-full h-full min-h-screen bg-[#FE5CCD]/20'></div>

<div className=' p-6 lg:py-15 py-6 pb-0  bg-contain lg:backdrop-blur-[2px] backdrop-blur-[6px] flex flex-col justify-start items-center gap-6 w-full min-h-screen'>











<div className=' border-[1px] border-white/30 w-full  py-6 px-10 border-solid flex justify-between items-end  rounded-[24px]  bg-white/50'>

<div className=' flex justify-start  gap-5 items-center'>
<Image className=' w-[177px] hidden lg:flex h-[177px]' src={'/assets/template4/2.png'} width={10000} height={100000} alt='logogng'/>
<Image className=' w-[125px] flex lg:hidden h-[125px]' src={'/assets/template4/2.png'} width={10000} height={100000} alt='logogng'/>

<div className=' flex flex-col justify-start gap-2 items-start'>
    <span className=' lg:text-[20px] text-[18px]  text-[#464646]  font-black'>نام فروشگاه شما</span>
    <span className=' hidden lg:flex text-[16px] text-[#464646]  font-semibold'>cosmetics & skin/haircare</span>
    <button  className='  bg-btn4  text-white text-[14px] font-extrabold px-6 py-2 rounded-[12px]'>درباره ی فروشگاه</button>
</div>




</div>
<div className=' mt-3 w-[480px] hidden lg:flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#781BE1"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



</div>


</div>

<div className='mt-2 z-30  w-[371px] lg:w-[480px] lg:hidden flex bg-white  justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#781BE1"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
    

<div className=' lg:w-full flex w-screen justify-start   items-center gap-6 flex-col  rounded-[50px] px-2 py-6 lg:px-10 border-solid bg-white/50'>

<div className='  w-full justify-between items-center flex'>
    <span className=' text-[32px] text-[#474747] font-black'>دسته بندی</span>

    <button className=' text-[14px] font-extrabold relative  text-white  px-6 py-2 p-0 rounded-[12px] overflow-hidden  bg-btn4'>
        <div className='w-[36px] rounded-full h-[36px] bg-[#FFFFFF99]  absolute -left-[15px] top-1/20 -translate-y-5'></div>
        مشاهده همه  آیتم‌ها
        <div className='w-[36px] rounded-full h-[36px] bg-[#FFFFFF99]  absolute  -right-[8px] top-1/2 -translate-y-1/8'></div>
    
    </button>


</div>



<div className=' flex  justify-center w-full   gap-3 flex-wrap items-center'>
  <div className=' lg:w-[15%] w-[45%] '>  <CategoryItem link={'/template4/categories'} text={'لوازم آرایشی'} icon={<Cosmetics size={width} />}/></div>
  <div className=' lg:w-[15%] w-[45%]'>  <CategoryItem link={'/template4/categories'} text={'محصولات مراقبت مو'} icon={<Haircareproducts size={width} />}/></div>
  <div className=' lg:w-[15%] w-[45%]'> <CategoryItem link={'/template4/categories'} text={'عطر و ادکلن'} icon={<Perfumeandcologne size={width} />}/></div>
  <div className=' lg:w-[15%] w-[45%]'>  <CategoryItem link={'/template4/categories'} text={'محصولات آرایشی حرفه‌ای'} icon={<Professionalcosmeticproducts size={width} />}/></div>
  <div className=' lg:w-[15%] w-[45%]'>  <CategoryItem link={'/template4/categories'} text={'لوازم بهداشتی'} icon={<Sanitaryware size={width} />}/></div>
  <div className=' lg:w-[15%] w-[45%]'>  <CategoryItem link={'/template4/categories'} text={'محصولات مراقبت پوستی'} icon={<Skincareproducts size={width} />}/></div>













</div>


</div>






</div>

    </div>
  )
}

export default LandingPage
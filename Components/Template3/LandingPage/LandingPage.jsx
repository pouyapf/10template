import React from 'react'
import Image from 'next/image'
import CategoryItem from '../CategoryItem/CategoryItem'
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
function LandingPage() {


    const [width, setwidth] = useState(null);
      useEffect(() => {
        // This code runs only in the browser
        setwidth(window.innerWidth >= 1024 ? 72: 48 );
      }, []);
  
  return (
    <div className=' relative min-h-screen'>


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



<div className=' lg:w-full flex w-screen justify-start items-center gap-6 flex-col  rounded-tl-[50px] rounded-tr-[50px] px-2 py-6 lg:px-10 border-solid bg-white/30'>

<div className='  w-full justify-between items-center flex'>
    <span className=' text-[32px] font-black'>دسته بندی</span>

    <button className=' text-[14px] font-extrabold relative text-[#3B3B3B]   px-6 py-2 p-0 rounded-[12px] overflow-hidden bg-[#80E9CB]'>
        <div className='w-[36px] rounded-full h-[36px] bg-[#FFFFFF99]  absolute -left-[18px] top-1/2 -translate-y-1/2'></div>
        مشاهده همه  آیتم‌ها
        <div className='w-[36px] rounded-full h-[36px] bg-[#FFFFFF99]  absolute  -right-[18px] top-1/2 -translate-y-1/2'></div>
    
    </button>


</div>



<div className=' flex  justify-center  gap-3 flex-wrap items-center'>
  <div className=' lg:w-[12%] w-[30%] '>  <CategoryItem link={'/template3/categories'} text={'قهوه'} icon={<CoffeeIcon size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'قهوه‌های گرم'} icon={<HotCoffee size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'> <CategoryItem link={'/template3/categories'} text={'قهوه‌های سرد'} icon={<ColdCoffee size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'قهوه‌های دمی'} icon={<Brewedcoffees size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'نوشیدنی‌های غیر قهوه'} icon={<Noncoffeedrinks size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'آبمیوه‌های تازه'} icon={<Freshjuices size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'نوشیدنی‌های سرد'} icon={<Colddrinks size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'شیک‌ها و فراپه‌ها'} icon={<ShakesandFrappes size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'اسموتی‌ها'} icon={<Smoothies size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'موکتل‌ها'} icon={<Mocktails size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'غذاها'} icon={<FastFoodIcon size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'صبحانه'} icon={<BreakFastIcon size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'سالادها'} icon={<Salads size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'پیش غذاها'} icon={<Appetizers size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'برانچ'} icon={<Brunch size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'پیش غذاها'} icon={<Appetizers size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'غذاهای اصلی'} icon={<PersianFoodIcon size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'کیک‌ها'} icon={<Cakes size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'شیرینی‌ها'} icon={<Sweets size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'بستنی‌ها'} icon={<Saltysnacks size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'دسرهای گرم'} icon={<Hotdesserts size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'دسرهای سرد'} icon={<Snackswithdrinks size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'تنقلات همراه نوشیدنی'} icon={<Snacksandrefreshments size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'اسنک‌ها و میان وعده‌ها'} icon={<DessertIcon size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'دسرها و شیرینی‌ها'} icon={<Nutsandseeds size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'آجیل و مغزیجات'} icon={<Saltysnacks size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'اسنک‌های شور'} icon={<Chocolatesandsmallsweets size={width} color={'#412820'}/>}/></div>
  <div className=' lg:w-[12%] w-[30%]'>  <CategoryItem link={'/template3/categories'} text={'شکلات و شیرینی‌های کوچک'} icon={<Colddesserts size={width} color={'#412820'}/>}/></div>
















</div>


</div>






</div>

    </div>
  )
}

export default LandingPage
import React from 'react'
import Image from 'next/image'
import ItemsCard from '../ItemsCard/ItemsCard'

function Categoreis1() {
  return (
    <div className=' bgimagecategory1 min-h-screen relative w-full '>
      


        <div className=' px-20 pt-20 mix-blend-overlay flex flex-col justify-center gap-8  bg-[#834223]'>




            
  <div className=' w-full   flex   justify-between  items-center gap-4  z-10'>

<div className=' flex justify-start items-center gap-3'>

<Image className=' w-[160px] h-[160px] aspect-square' src={'/assets/template1/2.png'} width={1000} height={1000} alt='Landing_Img'/>
 
 <div className=' flex flex-col items-start justify-center'>

 <span className=' text-[32px] cursor-pointer font-black'>نام فروشگاه شما</span>
 <span className=' text-[20px] font-normal'>resturant / cafe</span>

 </div>


</div>
  
 


<div className='  w-[480px] bg-white flex justify-between px-4 items-center h-[72px] rounded-[12px]'>
  <input className='  text-black bg-none border-0 outline-0 bg-transparent font-medium text-[18px]  placeholder:text-[#697C94]' type='text' placeholder='دنبال چه چیزی هستی؟' />
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="10" fill="#D99F35"/>
<path d="M35.6667 24.3347C35.6667 30.5945 30.5925 35.6693 24.3333 35.6693C18.0741 35.6693 13 30.5945 13 24.3347C13 18.0747 18.0741 13 24.3333 13C30.5925 13 35.6667 18.0747 35.6667 24.3347Z" fill="white" fill-opacity="0.18"/>
<path d="M37 36.9996L32.3461 32.346M32.3461 32.346C34.3961 30.2952 35.664 27.4624 35.664 24.3333C35.664 18.0741 30.5905 13 24.332 13C18.0735 13 13 18.0741 13 24.3333C13 30.5925 18.0735 35.6667 24.332 35.6667C27.4619 35.6667 30.2953 34.3976 32.3461 32.346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
  </div>


  <div className='  pb-8 border-b-[1px] border-white gap-4  flex justify-between items-center'>

    <ul className=' flex flex-wrap justify-start gap-[32px] items-center'>
        <li  className=' w-[167px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[16px]'>دسته بندی اول </li>
        <li  className=' w-[167px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[16px]'>دسته بندی دوم </li>
        <li  className=' w-[167px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[16px]'>دسته بندی سوم </li>
        <li  className=' w-[167px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[16px]'>دسته بندی چهارم </li>
        <li  className=' w-[167px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[16px]'>دسته بندی پنجم </li>
        <li  className=' w-[167px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[16px]'>دسته بندی ششم </li>
        <li  className=' w-[167px] cursor-pointer transition-all duration-150 ease-in-out hover:scale-95  text-center py-[10px] rounded-[37px] bg-white/30 font-black text-[16px]'>دسته بندی هفتم </li>
  
    </ul>

    <button className=' cursor-pointer text-center flex  justify-center items-center gap-1  w-[182px]  bg-btn1  px-0 rounded-[10px] p-2'>
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 11.4V4.6C21.5 3.1 20.86 2.5 19.27 2.5H15.23C13.64 2.5 13 3.1 13 4.6V11.4C13 12.9 13.64 13.5 15.23 13.5H19.27C20.86 13.5 21.5 12.9 21.5 11.4Z" fill="white"/>
<path d="M11 13.6V20.4C11 21.9 10.36 22.5 8.77 22.5H4.73C3.14 22.5 2.5 21.9 2.5 20.4V13.6C2.5 12.1 3.14 11.5 4.73 11.5H8.77C10.36 11.5 11 12.1 11 13.6Z" fill="white"/>
<path d="M21.5 20.4V17.6C21.5 16.1 20.86 15.5 19.27 15.5H15.23C13.64 15.5 13 16.1 13 17.6V20.4C13 21.9 13.64 22.5 15.23 22.5H19.27C20.86 22.5 21.5 21.9 21.5 20.4Z" fill="white"/>
<path d="M11 7.4V4.6C11 3.1 10.36 2.5 8.77 2.5H4.73C3.14 2.5 2.5 3.1 2.5 4.6V7.4C2.5 8.9 3.14 9.5 4.73 9.5H8.77C10.36 9.5 11 8.9 11 7.4Z" fill="white"/>
</svg>
<span className=' text-[16px] font-extrabold  '>دسته بندیها</span>



    </button>


  </div>



        </div>


        <div className=' px-20  mix-blend-overlay bg-[#6C2727] flex flex-col justify-start items-center'>

          <span className=' font-extrabold py-8 text-[29px]'>عنوان دسته بندی</span>


<div className=' flex   justify-center gap-4 items-center flex-wrap'>

  <ItemsCard isliked={false}/>
  <ItemsCard isliked={false}/>
  <ItemsCard isliked={true} />
  <ItemsCard isliked={false}/>
  <ItemsCard isliked={true}/>
  <ItemsCard isliked={false}/>
  <ItemsCard isliked={true}/>


</div>



        </div>








    </div>
  )
}

export default Categoreis1
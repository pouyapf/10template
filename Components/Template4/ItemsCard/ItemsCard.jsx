import React from 'react'
import Image from 'next/image'

function ItemsCard({isliked,modaltriger}) {
  return (
    <div className=' flex py-6  px-2 lg:px-3 justify-between items-center  w-full lg:w-[427.68px] backdrop-blur-[16.59px]  border-[1px]  border-white/50 rounded-[13.03px]  bg-white/60'>





<Image onClick={()=>modaltriger(true)}  className=' w-[118.47px] h-[152.82777404785156] rounded-[11.85px]' src={'/assets/template1/4.png'} width={10000} height={10000} alt='food_img'/>

<div className=' mr-2   flex flex-col h-[152.82777404785156] justify-between items-start'>

    <span className=' text-[14px] text-[#1C1C1C] lg:text-[16.59px] font-extrabold'>عنوان آیتم | item name</span>
<span className=' text-[12px]  text-btn4 font-extrabold lg:text-[14.22px]'>عنوان دسته بندی</span>
<span className=' text-[13px] text-[#1C1C1C] font-medium'>توضیحات در اینجا نوشته میشود...</span>


<div className='  relative'>

<div className=' relative'>
    <span className=' text-[#1C1C1C] font-semibold text-[10px] lg:text-[11.85px]'>200 هزارتومان</span>
<div className='   top-0.5  -right-1 absolute'>

<svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.9144 0.579346L0.201172 20.7194" stroke="#781BE1" stroke-width="1.18471"/>
</svg>


</div>


</div>



<span className=' font-black text-[#1C1C1C] text-[14px] lg:text-[16.59px]'>180 هزارتومان</span>
<span className='offcard3 absolute   customtop top-0 text-[13.03px] font-black  bg-btn4 text-center min-w-[44.35897816820379] rounded-[33.17px] rotate-[-22.42deg]   py-[4px]'>
20 %

</span>


</div>


</div>


<div className='h-[152.82777404785156] flex  flex-col justify-between items-end'>

    
{isliked ? (<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-[#FBD2E3]'>
<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.04 3.6167C17.9284 3.6167 16.0384 4.64337 14.86 6.21837C13.6817 4.64337 11.7917 3.6167 9.68003 3.6167C6.09836 3.6167 3.19336 6.53337 3.19336 10.1384C3.19336 11.5267 3.41503 12.81 3.80003 14C5.64336 19.8334 11.325 23.3217 14.1367 24.2784C14.5334 24.4184 15.1867 24.4184 15.5834 24.2784C18.395 23.3217 24.0767 19.8334 25.92 14C26.305 12.81 26.5267 11.5267 26.5267 10.1384C26.5267 6.53337 23.6217 3.6167 20.04 3.6167Z" fill="#FF3E3E"/>
</svg>



    
</div>
):(<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-[#FBD2E3]'>
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7194 26.201C14.3577 26.201 14.0077 26.1543 13.7161 26.0493C9.2594 24.521 2.17773 19.096 2.17773 11.081C2.17773 6.99766 5.4794 3.68433 9.5394 3.68433C11.5111 3.68433 13.3544 4.45433 14.7194 5.83099C16.0844 4.45433 17.9277 3.68433 19.8994 3.68433C23.9594 3.68433 27.2611 7.00933 27.2611 11.081C27.2611 19.1077 20.1794 24.521 15.7227 26.0493C15.4311 26.1543 15.0811 26.201 14.7194 26.201ZM9.5394 5.43433C6.44773 5.43433 3.92773 7.96599 3.92773 11.081C3.92773 19.0493 11.5927 23.4827 14.2877 24.4043C14.4977 24.4743 14.9527 24.4743 15.1627 24.4043C17.8461 23.4827 25.5227 19.061 25.5227 11.081C25.5227 7.96599 23.0027 5.43433 19.9111 5.43433C18.1377 5.43433 16.4927 6.26266 15.4311 7.69766C15.1044 8.14099 14.3577 8.14099 14.0311 7.69766C12.9461 6.25099 11.3127 5.43433 9.5394 5.43433Z" fill="#1C1C1C"/>
</svg>



    
    
        
    </div>
    )}



<button onClick={()=>modaltriger(true)} className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 text-[14px] lg:text-[16.59px] w-[95.96px] font-extrabold   bg-btn4 px-0 rounded-[14.22px] p-2'>جزئیات</button>


</div>


    </div>
  )
}

export default ItemsCard
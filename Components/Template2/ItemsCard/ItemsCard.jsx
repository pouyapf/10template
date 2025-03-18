import React from 'react'
import Image from 'next/image'

function ItemsCard({isliked,modaltriger}) {
  return (
    <div className=' flex py-6  px-2 lg:px-3 justify-between items-center  w-full lg:w-[427.68px]  border-[1px]  border-white/50 rounded-[13.03px] cardbg2'>
<Image onClick={()=>modaltriger(true)}  className=' w-[118.47px] h-[152.82777404785156] rounded-[11.85px]' src={'/assets/template1/4.png'} width={10000} height={10000} alt='food_img'/>

<div className=' mr-2   flex flex-col h-[152.82777404785156] justify-between items-start'>

    <span className=' text-[14px] text-textsec2 lg:text-[16.59px] font-extrabold'>عنوان آیتم | item name</span>
<span className=' text-[12px] text-[#D6673F] font-extrabold lg:text-[14.22px]'>عنوان دسته بندی</span>
<span className=' text-[13px] text-textsec2 lg::text-[13.03px] font-medium'>توضیحات در اینجا نوشته میشود...</span>


<div className='  relative'>

<div className=' relative'>
    <span className=' font-semibold text-textsec2 text-[10px] lg:text-[11.85px]'>200 هزارتومان</span>
<div className='   top-0.5  right-1 absolute'>

<svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.8734 0.656006L0.160156 20.7961" stroke="#DA4914" stroke-width="1.18471"/>
</svg>

</div>


</div>


<span className=' font-black text-[14px] text-textsec2 lg:text-[16.59px]'>180 هزارتومان</span>
<span className='offcard1 absolute   customtop top-0 text-[13.03px] font-black  bg-btn2 text-center min-w-[44.35897816820379] rounded-[33.17px] rotate-[-22.42deg]   py-[4px]'>
20 %

</span>


</div>


</div>


<div className='h-[152.82777404785156] flex  flex-col justify-between items-end'>

    
{isliked ? (<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-[#EEAA9280]'>
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3564 26.201C13.9947 26.201 13.6447 26.1543 13.353 26.0493C8.89636 24.521 1.8147 19.096 1.8147 11.081C1.8147 6.99766 5.11636 3.68433 9.17636 3.68433C11.148 3.68433 12.9914 4.45433 14.3564 5.83099C15.7214 4.45433 17.5647 3.68433 19.5364 3.68433C23.5964 3.68433 26.898 7.00933 26.898 11.081C26.898 19.1077 19.8164 24.521 15.3597 26.0493C15.068 26.1543 14.718 26.201 14.3564 26.201ZM9.17636 5.43433C6.0847 5.43433 3.5647 7.96599 3.5647 11.081C3.5647 19.0493 11.2297 23.4827 13.9247 24.4043C14.1347 24.4743 14.5897 24.4743 14.7997 24.4043C17.483 23.4827 25.1597 19.061 25.1597 11.081C25.1597 7.96599 22.6397 5.43433 19.548 5.43433C17.7747 5.43433 16.1297 6.26266 15.068 7.69766C14.7414 8.14099 13.9947 8.14099 13.668 7.69766C12.583 6.25099 10.9497 5.43433 9.17636 5.43433Z" fill="white"/>
</svg>


    
</div>
):(<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-[#EEAA9280]'>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1797 3.6167C17.068 3.6167 15.178 4.64337 13.9997 6.21837C12.8213 4.64337 10.9313 3.6167 8.81967 3.6167C5.23801 3.6167 2.33301 6.53337 2.33301 10.1384C2.33301 11.5267 2.55467 12.81 2.93967 14C4.78301 19.8334 10.4647 23.3217 13.2763 24.2784C13.673 24.4184 14.3263 24.4184 14.723 24.2784C17.5347 23.3217 23.2163 19.8334 25.0597 14C25.4447 12.81 25.6663 11.5267 25.6663 10.1384C25.6663 6.53337 22.7613 3.6167 19.1797 3.6167Z" fill="#FF3E3E"/>
</svg>


    
    
        
    </div>
    )}


<button onClick={()=>modaltriger(true)} className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 text-[14px] lg:text-[16.59px] w-[95.96px] font-extrabold   bg-btn2  px-0 rounded-[14.22px] p-2'>جزئیات</button>


</div>


    </div>
  )
}

export default ItemsCard
import React from 'react'
import Image from 'next/image'

function ItemsCard({isliked,modaltriger}) {
  return (
    <div className=' flex py-6 px-3 justify-between items-center w-[427.68px]  border-[1px]  border-white/50 rounded-[13.03px] cardbg1'>
<Image className=' w-[118.47px] h-[152.82777404785156] rounded-[11.85px]' src={'/assets/template1/4.png'} width={10000} height={10000} alt='food_img'/>

<div className=' mr-2   flex flex-col h-[152.82777404785156] justify-between items-start'>

    <span className=' text-[16.59px] font-extrabold'>عنوان آیتم | item name</span>
<span className=' text-[#F3C44D] font-extrabold text-[14.22px]'>عنوان دسته بندی</span>
<span className=' text-[13.03px] font-medium'>توضیحات در اینجا نوشته میشود...</span>


<div className='  relative'>

<div className=' relative'>
    <span className=' font-semibold text-[11.85px]'>200 هزارتومان</span>
<div className='   top-0.5  right-1 absolute'>

<svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.5536 0.579346L0.840332 20.7194" stroke="#D99F35" stroke-width="1.18471"/>
</svg>
</div>


</div>


<span className=' font-black text-[16.59px]'>180 هزارتومان</span>
<span className='offcard1 absolute top-0 text-[13.03px] font-black  bg-btn1 text-center min-w-[44.35897816820379] rounded-[33.17px] rotate-[-22.42deg]   py-[4px]'>
20 %

</span>


</div>


</div>


<div className='h-[152.82777404785156] flex  flex-col justify-between items-end'>

    
{isliked ? (<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-white/50'>
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3564 26.201C13.9947 26.201 13.6447 26.1543 13.353 26.0493C8.89636 24.521 1.8147 19.096 1.8147 11.081C1.8147 6.99766 5.11636 3.68433 9.17636 3.68433C11.148 3.68433 12.9914 4.45433 14.3564 5.83099C15.7214 4.45433 17.5647 3.68433 19.5364 3.68433C23.5964 3.68433 26.898 7.00933 26.898 11.081C26.898 19.1077 19.8164 24.521 15.3597 26.0493C15.068 26.1543 14.718 26.201 14.3564 26.201ZM9.17636 5.43433C6.0847 5.43433 3.5647 7.96599 3.5647 11.081C3.5647 19.0493 11.2297 23.4827 13.9247 24.4043C14.1347 24.4743 14.5897 24.4743 14.7997 24.4043C17.483 23.4827 25.1597 19.061 25.1597 11.081C25.1597 7.96599 22.6397 5.43433 19.548 5.43433C17.7747 5.43433 16.1297 6.26266 15.068 7.69766C14.7414 8.14099 13.9947 8.14099 13.668 7.69766C12.583 6.25099 10.9497 5.43433 9.17636 5.43433Z" fill="white"/>
</svg>


    
</div>
):(<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-white/50'>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1799 3.6167C17.0683 3.6167 15.1783 4.64337 13.9999 6.21837C12.8216 4.64337 10.9316 3.6167 8.81992 3.6167C5.23825 3.6167 2.33325 6.53337 2.33325 10.1384C2.33325 11.5267 2.55492 12.81 2.93992 14C4.78325 19.8334 10.4649 23.3217 13.2766 24.2784C13.6733 24.4184 14.3266 24.4184 14.7233 24.2784C17.5349 23.3217 23.2166 19.8334 25.0599 14C25.4449 12.81 25.6666 11.5267 25.6666 10.1384C25.6666 6.53337 22.7616 3.6167 19.1799 3.6167Z" fill="#FF3E3E"/>
</svg>

    
    
        
    </div>
    )}


<button onClick={()=>modaltriger(true)} className='  text-[16.59px] w-[95.96px] font-extrabold   bg-btn1  px-0 rounded-[14.22px] p-2'>جزئیات</button>


</div>


    </div>
  )
}

export default ItemsCard
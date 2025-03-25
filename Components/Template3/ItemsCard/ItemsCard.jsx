import React from 'react'
import Image from 'next/image'

function ItemsCard({isliked,modaltriger}) {
  return (
    <div className=' flex py-6  px-2 lg:px-3 justify-between items-center  w-full lg:w-[427.68px] backdrop-blur-[16.59px]  border-[1px]  border-white/50 rounded-[13.03px] bg-[#FFFFFF99]'>





<Image onClick={()=>modaltriger(true)}  className=' w-[118.47px] h-[152.82777404785156] rounded-[11.85px]' src={'/assets/template1/4.png'} width={10000} height={10000} alt='food_img'/>

<div className=' mr-2   flex flex-col h-[152.82777404785156] justify-between items-start'>

    <span className=' text-[14px] text-[#1C1C1C] lg:text-[16.59px] font-extrabold'>عنوان آیتم | item name</span>
<span className=' text-[12px] text-[#229F7C] font-extrabold lg:text-[14.22px]'>عنوان دسته بندی</span>
<span className=' text-[13px] text-[#1C1C1C] font-medium'>توضیحات در اینجا نوشته میشود...</span>


<div className='  relative'>

<div className=' relative'>
    <span className=' text-[#1C1C1C] font-semibold text-[10px] lg:text-[11.85px]'>200 هزارتومان</span>
<div className='   top-0.5  right-1 absolute'>

<svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.9144 0.579346L0.201172 20.7194" stroke="#36B894" stroke-width="1.18471"/>
</svg>

</div>


</div>


<span className=' font-black text-[#1C1C1C] text-[14px] lg:text-[16.59px]'>180 هزارتومان</span>
<span className='offcard2 absolute   customtop top-0 text-[13.03px] font-black  bg-[#36B894] text-center min-w-[44.35897816820379] rounded-[33.17px] rotate-[-22.42deg]   py-[4px]'>
20 %

</span>


</div>


</div>


<div className='h-[152.82777404785156] flex  flex-col justify-between items-end'>

    
{isliked ? (<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-[#DEFBF3]'>
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7194 26.201C14.3577 26.201 14.0077 26.1543 13.7161 26.0493C9.2594 24.521 2.17773 19.096 2.17773 11.081C2.17773 6.99766 5.4794 3.68433 9.5394 3.68433C11.5111 3.68433 13.3544 4.45433 14.7194 5.83099C16.0844 4.45433 17.9277 3.68433 19.8994 3.68433C23.9594 3.68433 27.2611 7.00933 27.2611 11.081C27.2611 19.1077 20.1794 24.521 15.7227 26.0493C15.4311 26.1543 15.0811 26.201 14.7194 26.201ZM9.5394 5.43433C6.44773 5.43433 3.92773 7.96599 3.92773 11.081C3.92773 19.0493 11.5927 23.4827 14.2877 24.4043C14.4977 24.4743 14.9527 24.4743 15.1627 24.4043C17.8461 23.4827 25.5227 19.061 25.5227 11.081C25.5227 7.96599 23.0027 5.43433 19.9111 5.43433C18.1377 5.43433 16.4927 6.26266 15.4311 7.69766C15.1044 8.14099 14.3577 8.14099 14.0311 7.69766C12.9461 6.25099 11.3127 5.43433 9.5394 5.43433Z" fill="#1C1C1C"/>
</svg>



    
</div>
):(<div className=' w-[47.38845443725586] flex justify-center items-center h-[47.38845443725586] rounded-full bg-[#DEFBF3]'>
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2236 4.4635C17.112 4.4635 15.222 5.49017 14.0436 7.06517C12.8653 5.49017 10.9753 4.4635 8.86362 4.4635C5.28195 4.4635 2.37695 7.38017 2.37695 10.9852C2.37695 12.3735 2.59862 13.6568 2.98362 14.8468C4.82695 20.6802 10.5086 24.1685 13.3203 25.1252C13.717 25.2652 14.3703 25.2652 14.767 25.1252C17.5786 24.1685 23.2603 20.6802 25.1036 14.8468C25.4886 13.6568 25.7103 12.3735 25.7103 10.9852C25.7103 7.38017 22.8053 4.4635 19.2236 4.4635Z" fill="#FF3E3E"/>
</svg>


    
    
        
    </div>
    )}



<button onClick={()=>modaltriger(true)} className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 text-[14px] lg:text-[16.59px] w-[95.96px] font-extrabold   bg-[#36B894]  px-0 rounded-[14.22px] p-2'>جزئیات</button>


</div>


    </div>
  )
}

export default ItemsCard
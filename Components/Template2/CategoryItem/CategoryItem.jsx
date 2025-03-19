import Link from 'next/link'
import React from 'react'




function CategoryItem({icon,link,text}) {
  return (
    <Link href={link} className=' border-[1.36px]  transition-all duration-150   
    ease-in-out hover:scale-95  flex flex-col justify-center 
    lg:gap-2 gap-1 items-center lg:w-[147.3157958984375] lg:h-[147.3157958984375]
     bg-btn2 rounded-full   w-full h-auto  aspect-square  border-solid  border-white'>

{icon}
<span className=' text-white lg:max-w-[120px]  lg:w-[120px] max-w-[70px] text-center font-extrabold text-[10px] lg:text-[16px]'>{text}</span>
    </Link>
  )
}

export default CategoryItem
import Link from 'next/link'
import React from 'react'




function CategoryItem({icon,link,text}) {
  return (
    <Link href={link} className=' border-[1.36px]  transition-all duration-150  gap-4 ease-in-out hover:scale-95  flex flex-col justify-center lg:gap-2 items-center lg:w-[147.3157958984375] lg:h-[147.3157958984375] bg-btn2 rounded-full  w-[100%] h-[140px]  border-solid  border-white'>

{icon}
<span className=' text-white max-w-[120px]  w-[120px] text-center font-extrabold text-[11px] lg:text-[16px]'>{text}</span>
    </Link>
  )
}

export default CategoryItem
import Link from 'next/link'
import React from 'react'




function CategoryItem({icon,link,text}) {
  return (
    <Link href={link} className='  transition-all duration-150  gap-4 ease-in-out hover:scale-95 bg-white flex flex-col justify-center lg:gap-2 items-center  h-[110px]  w-[100%] lg:h-[140px] rounded-[18px] border-[1px] border-solid border-textsec1'>

{icon}
<span className='  text-icon3 text-center font-extrabold text-[11px] lg:text-[16px]'>{text}</span>
    </Link>
  )
}

export default CategoryItem
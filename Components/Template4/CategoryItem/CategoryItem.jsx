import Link from 'next/link'
import React from 'react'




function CategoryItem({icon,link,text}) {
  return (
    <Link href={link} className=' lg:py-0 py-3  transition-all duration-150  gap-4 ease-in-out
     hover:scale-95 categoryitembg4 w-full flex flex-col justify-center
      lg:gap-2 items-center  h-[110px]   lg:h-[207px]
       rounded-[18px]'>

{icon}
<span className='  text-white text-center font-extrabold text-[11px] lg:text-[16px]'>{text}</span>
    </Link>
  )
}

export default CategoryItem
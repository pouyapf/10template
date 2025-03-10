import Link from 'next/link'
import React from 'react'




function CategoryItem({icon,link,text}) {
  return (
    <Link href={link} className='  transition-all duration-150  ease-in-out hover:scale-95 bg-white flex flex-col justify-center gap-2 items-center w-[148px] h-[155px] rounded-[18px] border-[1px] border-solid border-textsec1'>

{icon}
<span className=' text-icontext text-center font-extrabold text-[16px]'>{text}</span>
    </Link>
  )
}

export default CategoryItem
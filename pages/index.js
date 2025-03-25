import React from 'react'
import LandingPage from '@/Components/Template2/LandingPage1/LandingPage1'
import Link from 'next/link'
function Home() {
  return (
    <div className=' bg-black flex justify-center items-center gap-2 flex-col min-h-screen'>
<Link href={'/template1'} className='  text-white text-center border border-btn3 rounded min-w-20 p-2' >Theme1</Link>
<Link href={'/template2'} className=' text-white text-center border border-btn3 rounded min-w-20 p-2' >Theme2</Link>
<Link href={'/template3'} className=' text-white text-center border border-btn3 rounded min-w-20 p-2' >Theme3</Link>


    </div>
  )
}

export default Home
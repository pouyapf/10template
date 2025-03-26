import React from 'react'
import Rating from "react-rating";
import { useState } from 'react';
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
function CommentCard({isadmin}) {
    const [rating, setRating] = useState(3);
  return (
    
    <div className={`lg:w-[443px] w-[95vw] relative  h-fit p-3.5    flex flex-col justify-between gap-3   ${isadmin ? 'bg-[#FFEBF3] mr-0 lg:mr-3 mt-2' :  'bg-white mt-5'} rounded-[20px] border-[1px]  border-[#FBD2E3]`}>


{isadmin ? (<div className=' absolute  w-1  -top-6  h-10 -z-10 bg-[#FFEBF3]/80'></div>):(null)}

<div className='  flex justify-between items-center'>


<div className=' flex justify-center gap-1 items-center'>

    {isadmin ? (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_307_2249)">
<rect width="40" height="40" rx="13.3333" fill="#B01E59"/>
<path d="M29.4717 24.6667C28.5316 21.6337 25.7264 19.5662 22.551 19.5662H17.4479C14.2726 19.5662 11.4673 21.6337 10.5273 24.6667C9.84286 26.8752 11.4935 29.1148 13.8055 29.1148H26.1934C28.5054 29.1148 30.1561 26.8752 29.4717 24.6667Z" fill="white"/>
<path d="M19.9985 16.9618C22.3955 16.9618 24.3388 15.0186 24.3388 12.6215C24.3388 10.2245 22.3955 8.28125 19.9985 8.28125C17.6014 8.28125 15.6582 10.2245 15.6582 12.6215C15.6582 15.0186 17.6014 16.9618 19.9985 16.9618Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_307_2249">
<rect width="40" height="40" rx="13.3333" fill="white"/>
</clipPath>
</defs>
</svg>


):(     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_307_2217)">
  <rect width="40" height="40" rx="13.3333" fill="#781BE1"/>
  <path d="M29.4717 24.6664C28.5316 21.6335 25.7264 19.5659 22.551 19.5659H17.4479C14.2726 19.5659 11.4673 21.6335 10.5273 24.6664C9.84286 26.8749 11.4935 29.1145 13.8055 29.1145H26.1934C28.5054 29.1145 30.1561 26.8749 29.4717 24.6664Z" fill="white"/>
  <path d="M19.9985 16.9618C22.3955 16.9618 24.3388 15.0186 24.3388 12.6215C24.3388 10.2245 22.3955 8.28125 19.9985 8.28125C17.6014 8.28125 15.6582 10.2245 15.6582 12.6215C15.6582 15.0186 17.6014 16.9618 19.9985 16.9618Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_307_2217">
  <rect width="40" height="40" rx="13.3333" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
  
    )}

<div className=' flex flex-col justify-center items-start'>
    {isadmin ? (    <span className=' text-[#343434] text-[15px] font-black'>محمد محمدی (مدیر فروشگاه)</span>):(    <span className=' text-[#343434] text-[15px] font-black'>محمد محمدی</span>)}
    {isadmin ? (        <span className='text-[12px]  text-[#343434] font-medium'>1403/10/27</span>):(      <span className='text-[12px]  text-[#781BE1] font-medium'>1403/10/27</span>)}

</div>



        </div>

        <div>

            {!isadmin &&   
            
            <div className=' flex flex-col justify-start items-start'>
           <Rating
        initialRating={rating}
        emptySymbol={<span style={{ color: "gray", fontSize: "30px" }}>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.36003 2.72614C9.0306 1.31346 10.9681 1.31346 11.6387 2.72613L12.7976 5.16761C13.0639 5.72858 13.5786 6.11741 14.174 6.20736L16.7655 6.59887C18.2649 6.8254 18.8636 8.74124 17.7786 9.84086L15.9034 11.7413C15.4726 12.1779 15.276 12.8071 15.3777 13.4236L15.8204 16.1071C16.0765 17.6598 14.509 18.8438 13.1679 18.1107L10.85 16.8438C10.3175 16.5527 9.68123 16.5527 9.14866 16.8438L6.83082 18.1107C5.48968 18.8438 3.9222 17.6598 4.17834 16.1071L4.62101 13.4236C4.72272 12.8071 4.52611 12.1779 4.09525 11.7413L2.22008 9.84086C1.13507 8.74125 1.73379 6.8254 3.23323 6.59887L5.82466 6.20736C6.42009 6.11741 6.93482 5.72858 7.20111 5.16761L8.36003 2.72614Z" fill="#781BE1"/>
</svg>



        </span>}
        fullSymbol={<span style={{ color: "gold", fontSize: "30px" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.36003 2.72614C9.0306 1.31346 10.9681 1.31346 11.6387 2.72613L12.7976 5.16761C13.0639 5.72858 13.5786 6.11741 14.174 6.20736L16.7655 6.59887C18.2649 6.8254 18.8636 8.74124 17.7786 9.84086L15.9034 11.7413C15.4726 12.1779 15.276 12.8071 15.3777 13.4236L15.8204 16.1071C16.0765 17.6598 14.509 18.8438 13.1679 18.1107L10.85 16.8438C10.3175 16.5527 9.68123 16.5527 9.14866 16.8438L6.83082 18.1107C5.48968 18.8438 3.9222 17.6598 4.17834 16.1071L4.62101 13.4236C4.72272 12.8071 4.52611 12.1779 4.09525 11.7413L2.22008 9.84086C1.13507 8.74125 1.73379 6.8254 3.23323 6.59887L5.82466 6.20736C6.42009 6.11741 6.93482 5.72858 7.20111 5.16761L8.36003 2.72614Z" fill="#781BE1"/>
        </svg>
        
        
        </span>}
        onChange={(value) => setRating(value)}
      />

      <div className=' flex  w-full justify-between gap-1 items-center'>
<div className=' flex justify-start gap-1 items-center'>     <span className='text-[#697C94] transition-all duration-150 ease-in-out hover:scale-95 hover:text-[#781BE1]'><BiLike  size={20} /></span>
<span className=' text-[12px]  text-[#697C94] font-medium'>3</span></div>

<div className=' flex justify-start gap-1 items-center'>   <span className='text-[#697C94] transition-all duration-150 ease-in-out hover:scale-95 hover:text-[#781BE1]'><BiDislike  size={20} /></span>
<span className=' text-[12px]  text-[#697C94] font-medium'>3</span></div>
   
     


      </div>



            </div>
  
      
      
      }

 
        </div>







</div>

<p className=' text-[14px]  min-h-[80px]  font-medium text-[#1E3A5F]'>گرچه به دلیل شهرت کباب شاندیز مشهد شاید بیش از یکصد رستوران نام شاندیز را با خود همراه دارند، اما این رستوران محبوب ترین و تا همین چند وقت پیش معروف ترین شاندیز تهران بوده است. علیرغم  ت کباب شاندیز مشهد شاید بیش از یکصد رستوران نام شاندیز را با خود همراه دارند، اما این رستوران محبوب ترین و تا همین چند وقت پیش معروف ترین شاندیز تهران بوده است. علیوسعت بزرگ رستوران</p>



    </div>
  )
}

export default CommentCard
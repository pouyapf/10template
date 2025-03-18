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
    
    <div className={`lg:w-[443px] w-[95vw] relative  h-fit p-3.5    flex flex-col justify-between gap-3 
      ${isadmin ? 'bg-[#E0E0E0] border-[#D5D5D5] mr-0 lg:mr-3 mt-2' :   'border-[#FFC3AA] bg-[#FFF1EB] mt-5'} rounded-[20px] border-[1px]  `}>


{isadmin ? (<div className=' absolute  w-1  -top-6  h-10 -z-10 bg-[#D5D5D5]'></div>):(null)}

<div className='  flex justify-between items-center'>


<div className=' flex justify-center gap-1 items-center'>

    {isadmin ? (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_112_1259)">
<rect width="40" height="40" rx="13.3333" fill="#B3390C"/>
<path d="M29.4727 24.6667C28.5325 21.6337 25.7273 19.5662 22.552 19.5662H17.4489C14.2736 19.5662 11.4682 21.6337 10.5283 24.6667C9.84384 26.8752 11.4945 29.1148 13.8065 29.1148H26.1944C28.5063 29.1148 30.157 26.8752 29.4727 24.6667Z" fill="white"/>
<path d="M20.0004 16.9618C22.3975 16.9618 24.3407 15.0186 24.3407 12.6215C24.3407 10.2245 22.3975 8.28125 20.0004 8.28125C17.6034 8.28125 15.6602 10.2245 15.6602 12.6215C15.6602 15.0186 17.6034 16.9618 20.0004 16.9618Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_112_1259">
<rect width="40" height="40" rx="13.3333" fill="white"/>
</clipPath>
</defs>
</svg>

):(      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_112_1227)">
  <rect width="40" height="40" rx="13.3333" fill="#DA4914"/>
  <path d="M29.4727 24.6664C28.5325 21.6335 25.7273 19.5659 22.552 19.5659H17.4489C14.2736 19.5659 11.4682 21.6335 10.5283 24.6664C9.84384 26.8749 11.4945 29.1145 13.8065 29.1145H26.1944C28.5063 29.1145 30.157 26.8749 29.4727 24.6664Z" fill="white"/>
  <path d="M20.0004 16.9618C22.3975 16.9618 24.3407 15.0186 24.3407 12.6215C24.3407 10.2245 22.3975 8.28125 20.0004 8.28125C17.6034 8.28125 15.6602 10.2245 15.6602 12.6215C15.6602 15.0186 17.6034 16.9618 20.0004 16.9618Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_112_1227">
  <rect width="40" height="40" rx="13.3333" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
    )}

<div className=' flex flex-col justify-center items-start'>
    {isadmin ? (    <span className=' text-[#1E3A5F] text-[15px] font-black'>محمد محمدی (مدیر فروشگاه)</span>):(    <span className=' text-[#8D2B07] text-[15px] font-black'>محمد محمدی</span>)}
    {isadmin ? ( <span className='text-[12px]  text-[#697C94] font-medium'>1403/10/27</span> ):( <span className='text-[12px]  text-[#8D2B07] font-medium'>1403/10/27</span>)}
   
</div>



        </div>

        <div>

            {!isadmin &&   
            
            <div className=' flex flex-col justify-start items-start'>
           <Rating
        initialRating={rating}
        emptySymbol={
        <span style={{ color: "gray", fontSize: "30px" }}>

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36051 1.72614C8.03109 0.313458 9.96859 0.313455 10.6392 1.72613L11.7981 4.16761C12.0644 4.72858 12.5791 5.11741 13.1745 5.20736L15.7659 5.59887C17.2654 5.8254 17.8641 7.74124 16.7791 8.84086L14.9039 10.7413C14.4731 11.1779 14.2765 11.8071 14.3782 12.4236L14.8208 15.1071C15.077 16.6598 13.5095 17.8438 12.1684 17.1107L9.85053 15.8438C9.31796 15.5527 8.68172 15.5527 8.14915 15.8438L5.83131 17.1107C4.49016 17.8438 2.92269 16.6598 3.17883 15.1071L3.62149 12.4236C3.72321 11.8071 3.5266 11.1779 3.09574 10.7413L1.22057 8.84086C0.135559 7.74125 0.734277 5.8254 2.23372 5.59887L4.82515 5.20736C5.42058 5.11741 5.93531 4.72858 6.20159 4.16761L7.36051 1.72614Z" fill="#B4BDCA"/>
</svg>

        </span>}
        fullSymbol={<span style={{ color: "gold", fontSize: "30px" }}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.361 1.72614C8.03157 0.313458 9.96907 0.313455 10.6396 1.72613L11.7986 4.16761C12.0649 4.72858 12.5796 5.11741 13.175 5.20736L15.7664 5.59887C17.2659 5.8254 17.8646 7.74124 16.7796 8.84086L14.9044 10.7413C14.4736 11.1779 14.277 11.8071 14.3787 12.4236L14.8213 15.1071C15.0775 16.6598 13.51 17.8438 12.1689 17.1107L9.85101 15.8438C9.31845 15.5527 8.6822 15.5527 8.14964 15.8438L5.83179 17.1107C4.49065 17.8438 2.92318 16.6598 3.17931 15.1071L3.62198 12.4236C3.72369 11.8071 3.52709 11.1779 3.09623 10.7413L1.22105 8.84086C0.136047 7.74125 0.734766 5.8254 2.23421 5.59887L4.82564 5.20736C5.42107 5.11741 5.9358 4.72858 6.20208 4.16761L7.361 1.72614Z" fill="#DA4914"/>
        </svg>
        
        </span>}
        onChange={(value) => setRating(value)}
      />

      <div className=' flex  w-full justify-between gap-1 items-center'>
<div className=' flex justify-start gap-1 items-center'>     <span className='text-[#697C94] transition-all duration-150 ease-in-out hover:scale-95 hover:text-btn2'><BiLike  size={20} /></span>
<span className=' text-[12px]  text-[#697C94] font-medium'>3</span></div>

<div className=' flex justify-start gap-1 items-center'>   <span className='text-[#697C94] transition-all duration-150 ease-in-out hover:scale-95 hover:text-btn2'><BiDislike  size={20} /></span>
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
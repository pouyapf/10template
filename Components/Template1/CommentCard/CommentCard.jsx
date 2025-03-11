import React from 'react'
import Rating from "react-rating";
import { useState } from 'react';
function CommentCard({isadmin}) {
    const [rating, setRating] = useState(3);
  return (
    
    <div className={`lg:w-[443px] w-[95vw] relative min-h-[159px] p-3.5    flex flex-col justify-between gap-3   ${isadmin ? 'bg-[#f6e6c8] mr-0 lg:mr-3 mt-2' :  'bg-white mt-5'} rounded-[20px] border-[1px]  border-btn1`}>


{isadmin ? (<div className=' absolute  w-1  -top-6  h-10 -z-10 bg-[#D99F3580]/50'></div>):(null)}

<div className='  flex justify-between items-center'>


<div className=' flex justify-center gap-1 items-center'>

    {isadmin ? (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1226)">
<rect width="40" height="40" rx="13.3333" fill="#900000"/>
<path d="M29.4722 24.6667C28.5321 21.6337 25.7269 19.5662 22.5515 19.5662H17.4484C14.2731 19.5662 11.4678 21.6337 10.5278 24.6667C9.84335 26.8752 11.494 29.1148 13.806 29.1148H26.1939C28.5058 29.1148 30.1565 26.8752 29.4722 24.6667Z" fill="white"/>
<path d="M19.9995 16.9618C22.3965 16.9618 24.3397 15.0186 24.3397 12.6215C24.3397 10.2245 22.3965 8.28125 19.9995 8.28125C17.6024 8.28125 15.6592 10.2245 15.6592 12.6215C15.6592 15.0186 17.6024 16.9618 19.9995 16.9618Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_1226">
<rect width="40" height="40" rx="13.3333" fill="white"/>
</clipPath>
</defs>
</svg>
):(        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_1194)">
    <rect width="40" height="40" rx="13.3333" fill="#8F9DAF"/>
    <path d="M29.4722 24.6664C28.5321 21.6335 25.7269 19.5659 22.5515 19.5659H17.4484C14.2731 19.5659 11.4678 21.6335 10.5278 24.6664C9.84335 26.8749 11.494 29.1145 13.806 29.1145H26.1939C28.5058 29.1145 30.1565 26.8749 29.4722 24.6664Z" fill="white"/>
    <path d="M19.9995 16.9618C22.3965 16.9618 24.3397 15.0186 24.3397 12.6215C24.3397 10.2245 22.3965 8.28125 19.9995 8.28125C17.6024 8.28125 15.6592 10.2245 15.6592 12.6215C15.6592 15.0186 17.6024 16.9618 19.9995 16.9618Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_1_1194">
    <rect width="40" height="40" rx="13.3333" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    )}

<div className=' flex flex-col justify-center items-start'>
    {isadmin ? (    <span className=' text-[#1E3A5F] text-[15px] font-black'>محمد محمدی (مدیر فروشگاه)</span>):(    <span className=' text-[#1E3A5F] text-[15px] font-black'>محمد محمدی</span>)}

    <span className='text-[12px]  text-[#697C94] font-medium'>1403/10/27</span>
</div>



        </div>

        <div>

            {!isadmin &&        <Rating
        initialRating={rating}
        emptySymbol={<span style={{ color: "gray", fontSize: "30px" }}>

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36051 1.72614C8.03109 0.313458 9.96859 0.313455 10.6392 1.72613L11.7981 4.16761C12.0644 4.72858 12.5791 5.11741 13.1745 5.20736L15.7659 5.59887C17.2654 5.8254 17.8641 7.74124 16.7791 8.84086L14.9039 10.7413C14.4731 11.1779 14.2765 11.8071 14.3782 12.4236L14.8208 15.1071C15.077 16.6598 13.5095 17.8438 12.1684 17.1107L9.85053 15.8438C9.31796 15.5527 8.68172 15.5527 8.14915 15.8438L5.83131 17.1107C4.49016 17.8438 2.92269 16.6598 3.17883 15.1071L3.62149 12.4236C3.72321 11.8071 3.5266 11.1779 3.09574 10.7413L1.22057 8.84086C0.135559 7.74125 0.734277 5.8254 2.23372 5.59887L4.82515 5.20736C5.42058 5.11741 5.93531 4.72858 6.20159 4.16761L7.36051 1.72614Z" fill="#B4BDCA"/>
</svg>

        </span>}
        fullSymbol={<span style={{ color: "gold", fontSize: "30px" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.36051 2.72614C9.03109 1.31346 10.9686 1.31346 11.6392 2.72613L12.7981 5.16761C13.0644 5.72858 13.5791 6.11741 14.1745 6.20736L16.7659 6.59887C18.2654 6.8254 18.8641 8.74124 17.7791 9.84086L15.9039 11.7413C15.4731 12.1779 15.2765 12.8071 15.3782 13.4236L15.8208 16.1071C16.077 17.6598 14.5095 18.8438 13.1684 18.1107L10.8505 16.8438C10.318 16.5527 9.68172 16.5527 9.14915 16.8438L6.83131 18.1107C5.49016 18.8438 3.92269 17.6598 4.17883 16.1071L4.62149 13.4236C4.72321 12.8071 4.5266 12.1779 4.09574 11.7413L2.22057 9.84086C1.13556 8.74125 1.73428 6.8254 3.23372 6.59887L5.82515 6.20736C6.42058 6.11741 6.93531 5.72858 7.20159 5.16761L8.36051 2.72614Z" fill="#FFB121"/>
        </svg>
        </span>}
        onChange={(value) => setRating(value)}
      />}

 
        </div>







</div>

<p className=' text-[14px]  max-h-[80px] overflow-auto font-medium text-[#1E3A5F]'>گرچه به دلیل شهرت کباب شاندیز مشهد شاید بیش از یکصد رستوران نام شاندیز را با خود همراه دارند، اما این رستوران محبوب ترین و تا همین چند وقت پیش معروف ترین شاندیز تهران بوده است. علیرغم  ت کباب شاندیز مشهد شاید بیش از یکصد رستوران نام شاندیز را با خود همراه دارند، اما این رستوران محبوب ترین و تا همین چند وقت پیش معروف ترین شاندیز تهران بوده است. علیوسعت بزرگ رستوران</p>



    </div>
  )
}

export default CommentCard
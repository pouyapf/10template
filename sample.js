{activeSection==='section2' ?(    
    <div ref={section2Ref}  className='lg:w-[443px]  custom-mt2   w-full ml-0  lg:ml-6  lg:mt-18  min-h-[390px]    flex flex-col  justify-start gap-1 items-start'>
<div className='  justify-center items-center  w-full lg:hidden flex'>

<div className='w-[51px] h-[4px]  mb-2 bg-btn1/50 rounded-full'></div>
</div>




<div className=' px-4 lg:px-0 flex justify-between mb-6  w-full items-center'>

  

<span className='  font-extrabold text-[#2D2D2D] text-[20px]'>نظرات کاربران</span>


<div className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section1")} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>برگشت به عقب</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
</svg>

</div>


</div>

<div className=' scrollbar-none   w-full lg:w-fit  flex flex-col justify-start items-center h-[410px] max-h-[35vh] lg:max-h-[410px] overflow-y-auto  '>


<CommentCard isadmin={false}/>
<CommentCard isadmin={true}/>
<CommentCard isadmin={false}/>


</div>



</div>
):activeSection==='section1' ?( <div ref={section1Ref} className='  gap-3 pb-3  flex flex-col justify-start lg:justify-center scrollbar-none  pt-10 lg:pt-0 overflow-y-scroll hcustom max-h-[28rem] bg-amber-700 h-[28rem]  lg:max-h-full  px-2 lg:px-12 lg:h-full  items-center lg:items-start'>
       
       
  <span className=' mb-3 bg-[#D99F35] w-[110px]   hidden lg:block   text-center font-black text-[16.49px] py-1 rounded-[35.51px]'>20 % تخفیف</span>

<div className='w-[51px] h-[4px] lg:hidden block  mb-2 bg-btn1/50 rounded-full'>.</div>


<div className=' min-h-fit relative'>

<span className=' mt-2 text-[20px] lg:text-[22px] font-extrabold text-black'>عنوان آیتم | item name</span>
<span className='offcard1 lg:hidden absolute -top-5 text-[13.03px] font-black  bg-btn1 text-center min-w-[48.35897816820379] rounded-[33.17px] rotate-[-25.15deg]   py-[4px]'>
20 %

</span>
</div>

<span className=' text-textsec1 text-[14px] lg:text-[16px]  font-extrabold'>عنوان دسته بندی</span>
<p className='text-[13px] my-4 font-medium text-[#515151] text-center lg:text-right 
'>توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود... توضیحات در اینجا نوشته میشود...توضیحات در اینجا نوشته میشود...</p>


<div className='  flex    bg-blue-700   mb-6 custom-mb w-full justify-start flex-col items-center lg:items-start  relative'>

<div className=' relative'>
<span className=' font-semibold text text-[#2D2D2D] text-[13px]'>200 هزارتومان</span>
<div className='   top-0.5  right-1 absolute'>

<svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.5536 0.579346L0.840332 20.7194" stroke="#D99F35" stroke-width="1.18471"/>
</svg>
</div>


</div>

<div className='  bg-yellow-400 flex-col lg:flex-row gap-7 lg:gap-0 flex justify-between items-center  w-full'>

<span className=' font-black text-textsec1 text-[18px]'>180 هزارتومان</span>


<div className=' cursor-pointer  transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section2")} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>مشاهده نظرات</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
</svg>

</div>


</div>






</div>

<div className=' flex justify-center    gap-3 items-center'>

<button onClick={() => navigateToSection("section3")} className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center w-[178px] py-3 bg-[#F2AEAE] rounded-[11px] gap-2 items-center'>
<div className=' text-black'><BiCommentAdd size={20} /></div>



<span className='text-[13px] text-black font-extrabold'>افزودن به نظر</span>



</button>


<button className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center w-[178px] py-3 bg-textsec1 rounded-[11px] gap-2 items-center'>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 8.70367V11.5C17.5 13.9998 17.5 15.2498 16.8634 16.1259C16.6577 16.4089 16.4089 16.6577 16.1259 16.8634C15.2498 17.5 13.9998 17.5 11.5 17.5H8.5C6.00017 17.5 4.75027 17.5 3.87405 16.8634C3.59107 16.6577 3.34221 16.4089 3.13661 16.1259C2.5 15.2498 2.5 13.9998 2.5 11.5V8.70367C2.5 8.35975 2.5 8.1878 2.51268 8.04282C2.65367 6.43132 3.93133 5.15368 5.54282 5.01268C5.6878 5 5.85977 5 6.2037 5H6.38889C6.5423 5 6.66667 4.87563 6.66667 4.72222C6.66667 3.49492 7.66159 2.5 8.88892 2.5H11.1111C12.3384 2.5 13.3333 3.49492 13.3333 4.72222C13.3333 4.87563 13.4577 5 13.6111 5H13.7963C14.1402 5 14.3122 5 14.4572 5.01268C16.0687 5.15368 17.3463 6.43132 17.4873 8.04282C17.5 8.1878 17.5 8.35975 17.5 8.70367ZM10 8.33333C8.61925 8.33333 7.5 9.45258 7.5 10.8333C7.5 12.2141 8.61925 13.3333 10 13.3333C11.3807 13.3333 12.5 12.2141 12.5 10.8333C12.5 9.45258 11.3807 8.33333 10 8.33333Z" fill="white" fill-opacity="0.18"/>
<path d="M17.5 11.5V8.70367C17.5 8.35975 17.5 8.1878 17.4873 8.04282C17.3463 6.43132 16.0687 5.15368 14.4572 5.01268C14.3122 5 14.1402 5 13.7963 5H13.6111C13.4577 5 13.3333 4.87563 13.3333 4.72222C13.3333 3.49492 12.3384 2.5 11.1111 2.5H8.88892C7.66159 2.5 6.66667 3.49492 6.66667 4.72222C6.66667 4.87563 6.5423 5 6.38889 5H6.2037C5.85977 5 5.6878 5 5.54282 5.01268C3.93133 5.15368 2.65367 6.43132 2.51268 8.04282C2.5 8.1878 2.5 8.35975 2.5 8.70367V11.5C2.5 13.9998 2.5 15.2498 3.13661 16.1259C3.34221 16.4089 3.59107 16.6577 3.87405 16.8634C4.75027 17.5 6.00017 17.5 8.5 17.5H11.5C13.9998 17.5 15.2498 17.5 16.1259 16.8634C16.4089 16.6577 16.6577 16.4089 16.8634 16.1259C17.5 15.2498 17.5 13.9998 17.5 11.5Z" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
<path d="M7.5 10.8334C7.5 9.45262 8.61925 8.33337 10 8.33337C11.3807 8.33337 12.5 9.45262 12.5 10.8334C12.5 12.2141 11.3807 13.3334 10 13.3334C8.61925 13.3334 7.5 12.2141 7.5 10.8334Z" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
</svg>

<span className='text-[13px] font-extrabold'>مشاهده تصاویر AR</span>



</button>




</div>




</div>  ):(<div ref={section3Ref} className='lg:w-[361px] w-full hcustom bg  px-2 lg:px-0  m-0 lg:ml-20  lg:min-h-[500px] lg:h-[336px]  justify-start  flex flex-col lg:justify-center lg:gap-1 items-center lg:items-start'>
        
        
        
        
        <div className='  justify-center items-center  w-full lg:hidden flex'>

<div className='w-[51px] h-[4px]  mb-2 bg-btn1/50 rounded-full'></div>
</div>




<div className=' px-4 lg:px-0 flex justify-between mb-6  w-full items-center'>

  

<span className='  font-extrabold text-[#2D2D2D] text-[20px]'>ثبت نظر</span>


<div className=' cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 flex justify-center items-center'>
<span onClick={() => navigateToSection("section1")} className=' border-b-3 border-b-[#D48B03] font-extrabold text-[16px] text-[#D48B03]'>برگشت به عقب</span>
<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L2 7L8 13" stroke="#D48B03" stroke-width="2"/>
</svg>

</div>


</div>

<div className='lg:overflow-hidden   max-h-[300px] px-2 overflow-auto pb-2 flex-col w-full justify-start flex items-center gap-2'>
<input type='text' className=' p-3 placeholder:text-[14px] focus:border-black border border-solid   text-black placeholder:text-medgray   border-medgray/60 w-full placeholder:font-medium transition-all duration-150 ease-in-out rounded-[8px]' placeholder='نام' />
<input 
  type="tel" 
  className="p-3 text-right placeholder:text-[14px] focus:border-black border border-solid text-black placeholder:text-medgray border-medgray/60 w-full placeholder:font-medium transition-all duration-150 ease-in-out rounded-[8px]" 
  placeholder="شماره تلفن" 
/>
         <Rating
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
      />
<textarea type='text' className=' resize-none min-h-[100px]  max-h-h-[202px] overflow-auto  p-3 placeholder:text-[14px] focus:border-black border border-solid   text-black placeholder:text-medgray   border-medgray/60 w-full placeholder:font-medium transition-all duration-150 ease-in-out rounded-[8px]' placeholder='پیام شما' />


<button  className='  py-2 px-4 bg-btn1   rounded'>ثبت نظر</button>
</div>







</div>)}

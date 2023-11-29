import React from 'react'
import doctor from "../../src/assets/doctor.jpg"
import nursing from "../../src/assets/Nursing.jpg"
import body from "../../src/assets/science.jpg"




function Product() {
  return (
    <>

<div className='md:py-14    px-5'>

    <h1 className='md:text-3xl text-lg'>Products and services for informed decisions</h1>



<div className='w-full md:flex-row flex-col-reverse md:mt-0 mt-5  flex gap-3  '>

{/* tabs bar div */}
<div class="mb-4  mt-10 border-gray-200 dark:border-gray-700 w-full  md:w-1/2">
    <ul class="flex flex-wrap text-xs  md:text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">

    <li class="me-2" role="presentation">
            <button class="inline-block p-2 border-b-2 rounded-t-lg hover:text-orange-600 hover:border-orange-600 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Academic & Government</button>
        </li>

        <li class="me-2" role="presentation">
            <button class="inline-block p-2 border-b-2 rounded-t-lg hover:text-orange-600 hover:border-orange-600 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Health</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-2 border-b-2 rounded-t-lg hover:text-orange-600 hover:border-orange-600 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Industry</button>
        </li>
       
    </ul>


<div className='md:mt-14'>
    <h1 className='md:text-3xl md:pt-0 pt-5 text-lg'>Advancing research for the benefit of society</h1>
    <p className='mt-3 md:text-lg text-sm flex-wrap w-[80%] text-left'>To support researchers, librarians, research leaders and funders, we curate and enrich research with high-quality data and analytics and help customers address challenges at every stage of the research journey.   </p>

<p className='mt-3 text-sm md:text-lg flex-wrap w-[80%] text-left'>From researcher tools to research management and evaluation solutions, learn how we can help you improve productivity and amplify research impact.  </p>


<button className=' text-white outline-none mt-5 flex flex-nowrap text-center bg-[#0056d6] rounded-lg p-3 text-[15px] duration-300 hover:bg-[#003dd6] '>Explore Academic & Government</button>
</div>
</div>






{/* gallery div */}


<div className="md:w-1/2 w-full     ">
    <img  src="https://images.ctfassets.net/o78em1y1w4i4/L6rj4ONvIh5OG43EOjwOd/6f08cc38e38d4f7c2a9d0f8fb6717538/academic-government.webp?fm=webp&w=750&q=75"  alt="" />
</div>
</div>


{/* Insights for better outcomes section */}
<h1 className='md:text-3xl text-lg'>Insights for better outcomes</h1>

<div className='w-full md:flex-row flex-col justify-between mt-5 flex'>

<div className='md:w-[64%] relative  w-full'>
    <img className='rounded-2xl h-[75%] w-full ' src="https://images.ctfassets.net/zlnfaxb2lcqx/5l370SxS43iinuTTazwr2f/3228564b163c40cf86efacfc88b96f5c/Insights-HBCU-Nursing-Students.jpg?fm=webp&w=1920&q=75" alt="" />


<div className='absolute leading-loose w-48 md:my-16 ml-5 my-1.5 md:ml-10  top-0'>

<h1 className=' text-white text-lg md:text-3xl'>Where does equitable care begin?</h1>

<p className='text-white md:text-lg text-sm mt-5'>Addressing healthcare disparities through scholarships</p>



<p className='text-white mt-3 text-sm md:text-xl'>Read article  </p>





</div>



</div>

{/* images & Cards Div */}

<div className='md:w-1/3 w-full '>

  <div class="container sm:mt-0 my-5   flex flex-wrap">

    <div class="flex flex-wrap -m-4">


      <div class="p-4">
        <div class="flex rounded-lg items-center gap-2 flex-row ">
          <div class="sm:flex-shrink-0 h-32 w-44  object-contain sm:mr-5    inline-flex items-center justify-center   ">
          <img src={doctor} className='rounded-xl sm:h-32 sm:w-44  h-16 w-22'  alt="" />
          </div>
          <div class="">
            <h2 class="text-gray-600 sm:text-base  text-xs ">Connect</h2>
            <p class="sm:leading-relaxed sm:text-base text-xs">Empowering new nurses: Boosting well-being and supporting patient mental health</p>
           
          </div>
        </div>
      </div>



      <div class="p-4">
        <div class="flex rounded-lg items-center gap-2 flex-row ">
          <div class="sm:flex-shrink-0 h-32 w-44  object-contain sm:mr-5    inline-flex items-center justify-center   ">
          <img src={nursing} className='rounded-xl sm:h-32 sm:w-44  h-16 w-22'  alt="" />
          </div>
          <div class="">
            <h2 class="text-gray-600 sm:text-base  text-xs ">Connect</h2>
            <p class="sm:leading-relaxed sm:text-base text-xs">Supporting nurses from nursing school to their last day in scrubs</p>
           
          </div>
        </div>
      </div>


      <div class="p-4">
        <div class="flex rounded-lg items-center gap-2 flex-row ">
          <div class="sm:flex-shrink-0 h-32 w-44  object-contain sm:mr-5    inline-flex items-center justify-center   ">
          <img src={body} className='rounded-xl sm:h-32 sm:w-44  h-16 w-22'  alt="" />
          </div>
          <div class="">
            <h2 class="text-gray-600 sm:text-base  text-xs ">Connect</h2>
            <p class="sm:leading-relaxed sm:text-base text-xs">Together we created the most advanced 3D female anatomy model</p>
           
          </div>
        </div>
      </div>



      
     
    </div>
  </div>



</div>

</div>



{/* Featured topics and communities section */}


<h1 className='md:text-4xl text-2xl'>Featured topics and communities</h1>


<div className='w-full  cursor-pointer md:flex justify-between mt-5'>


<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Sustainability</p>
<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Open science</p>
<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Gender & Diversity</p>
<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Healthcare & Medicine</p>

</div>

<div className='w-full cursor-pointer   md:flex justify-between mt-5'>


<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Research leadership</p>
<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Data & Analytics</p>
<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Researchers</p>
<p className='hover:text-blue-900 hover:underline duration-300 ease-in-out'>Librarians</p>

</div>



{/* Careers Section */}

<div className='bg-[#fff7ef] flex md:flex-row items-center flex-col-reverse mt-14 p-10 w-full  '>


<div className='md:w-[47%] w-full'>

<h1 className='text-xl md:mt-0 mt-5 md:text-3xl'>Careers at Quantum</h1>

<p className='text-sm md:text-lg mt-3'>We're building a great workplace culture at Elsevier where amazing people, like you and others, can do purposeful work, grow every day and work with colleagues who care</p>

<button className=' text-white outline-none mt-5 flex flex-nowrap text-center bg-[#0056d6] rounded-lg p-3 text-[15px] duration-300 hover:bg-[#003dd6] '>Explore careers at Quantum</button>


</div>

<div className='md:w-1/2 w-full'>

<img src="https://images.ctfassets.net/o78em1y1w4i4/2XrBpSdjPK1OJXAAFYU8iw/cf0ec7330c39536e90de4497ca27da2a/Elsevier-careers-video-thumbnail.jpg?fm=webp&w=640&q=75" alt="" />

</div>



</div>




{/* Discover more about Section */}


<h1 className='text-2xl md:text-4xl'>Featured topics and communities</h1>

<p>working...</p>























</div>

    </>
  )
}

export default Product

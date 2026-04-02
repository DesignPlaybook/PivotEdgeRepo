import React from 'react'
import Hero from './Hero'
import ServicesSection from './ServicesSection'
import DomainsSection from './DomainsSection'

import InsightsPreview from './InsightsPreview'
import Introhighlight from './Introhighlight'
import HowWeWork from './HowWeWork'
import ClosingSection from './WhyChooseUs'


function Home() {
  return (
    <div>
       
       
       <Hero/>
               <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

       <Introhighlight/>
               <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

       <ServicesSection/>
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

       <HowWeWork/>
               <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

       <DomainsSection/>
               <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

       <ClosingSection/>
       {/* <InsightsPreview/> */}
    </div>
  )
}

export default Home
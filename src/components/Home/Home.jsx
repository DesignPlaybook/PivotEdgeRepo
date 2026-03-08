import React from 'react'
import Hero from './Hero'
import ServicesSection from './ServicesSection'
import DomainsSection from './DomainsSection'
import WhyChooseUs from './WhyChooseUs'
import InsightsPreview from './InsightsPreview'
import Introhighlight from './Introhighlight'


function Home() {
  return (
    <div>
       
       
       <Hero/>
       <Introhighlight/>
       <ServicesSection/>
       <DomainsSection/>
       <WhyChooseUs/>
       <InsightsPreview/>
    </div>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import WhyChooseUs from '../components/WhyChooseUs'
import FAQSection from '../components/Faq'

const Home = () => {
  return (
    <div>
        <Header/>
        <Showcase/>
        <WhyChooseUs/>
        <FAQSection/>
    </div>
  )
}

export default Home
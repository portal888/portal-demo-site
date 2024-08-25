'use client'

import React, { useState, useEffect } from 'react'
import { StyledContainer, StyledExplainerSection } from './style'
import { renderCurrentPage } from '../../utils/utils'

// Import root components
import HeroSection from '@/app/components/heroSection'
import Footer from '@/app/components/Footer'

import Index from './layout/index'
import SinglePage from './layout/single'

const buzzwords = ["baddies", "mavericks", "geniuses", "people", "weirdos"]
const buzzwordsLength = buzzwords.length

const Layout = ({ pages }) => {

    const [currentPage, setCurrentPage] = useState(null)

    useEffect(() => {
        setCurrentPage(renderCurrentPage(pages))
      
        return () => {}
    }, [])

    const [buzzwordCounter, setBuzzwordCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBuzzwordCounter(prevCounter => (prevCounter + 1) % buzzwordsLength);
        }, 2500);

        return () => clearInterval(interval);
    }, [])
    
    return (
        <StyledContainer>
            <HeroSection
                image={'url(/assets/planets/universe.jpeg)'}
                height='70vh'
            >
                <h1 style={{
                        color: '#fff',
                        fontSize: '100px'
                }}>
                    Digital playgrounds for creative <span>{buzzwords[buzzwordCounter]}</span>
                </h1>
            </HeroSection>
            <div className='content'>
                {
                    currentPage ?
                        <SinglePage
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        :
                        <Index pages={pages} setCurrentPage={setCurrentPage} />
                }
            </div>
            <Footer />
        </StyledContainer>
    )
}

export default Layout
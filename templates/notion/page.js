'use client'

import React, { useState, useEffect, useContext } from 'react'
import { StyledContainer } from './style'
import { renderCurrentPage } from '../../utils/utils'

// Import root components
import HeroSection from '@/app/(frontend)/components/HeroSection'
import Footer from '@/app/(frontend)/components/Footer'

import Index from './layout/index'
import SinglePage from './layout/single'
import { AppContext } from '../../context'

const buzzwords = ["baddies", "mavericks", "geniuses", "people", "weirdos"]
const buzzwordsLength = buzzwords.length

const Layout = ({ pages }) => {

    // Get site metadata from React Context
    const context = useContext(AppContext)
    const { siteTitle, siteDescription } = context

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
            <HeroSection image={'url(/assets/planets/universe.jpeg)'} height='70vh'>
                <h1 style={{color: '#fff', fontSize: '64px'}}>
                    Digital playgrounds for creative <span>{buzzwords[buzzwordCounter]}</span>
                </h1>
                <p style={{color: '#fff'}}>{siteDescription}</p>
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
            <Footer>
                <p>Guess what? This site was designed using <span style={{color: 'purple'}}>Portal</span> too</p>
            </Footer>
        </StyledContainer>
    )
}

export default Layout
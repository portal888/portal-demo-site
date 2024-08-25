import React, { useContext } from 'react'

import { AppContext } from '../../../context'
import { getCoverImageUrl } from '../../../utils/utils'

// import { config } from '../template-config'

import { StyledPageIcon } from '../style'

import RenderPages from '@/app/utils/renderPages'

const Index = ({ pages, setCurrentPage }) => {

    // Get site metadata from React Context
    const context = useContext(AppContext)
    const { SiteTitle, SiteDescription } = context

    return (
        <>
            <div className='explainer-section'>
                <p className='heading'>Your website should be a <span className='portal'>Portal</span> into your mind</p>
                <p>Bring your artistry online in a way that truly reflects your creative spirit.
                    Choose a template, tweak it to suit your tastes and share so others can dive into your world
                </p>
                <a href='#templates' className='cta'>Get building</a>
            </div>
            <h2 id="templates">Templates</h2>
            <div className='pages-container'>
                {
                    pages.map((pageData) => {
                        const pageHeaderImage = getCoverImageUrl(pageData.coverImage)
                        return <RenderPages
                            openPageViaLink={true}
                            pageSlug={pageData.slug}
                            setCurrentPage={setCurrentPage}
                            currentPage={pageData}
                            key={pageData.id}
                        >
                            <StyledPageIcon>
                                <div className='img-container'>
                                    {pageHeaderImage && <img src={pageHeaderImage} alt='header image' />}
                                </div>
                                <h6>{pageData.title}</h6>
                            </StyledPageIcon>
                        </RenderPages>
                    })
                }
            </div>
        </>
    )
}

export default Index
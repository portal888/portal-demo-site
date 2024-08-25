import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../../context'

const StyledFooter = styled.div`
    background: ${props => props.$image ? props.$image : ( props.$color ? props.$color : '#ecf0f1' )};
    height: ${props => props.$height ? props.$height : '3.5rem'};

    display: flex;
    flex-direction: column;
    padding: 0 2.5rem;
    justify-content: center;
    align-items: center;
    font-family: monospace;
`

/**
 * Footer component (very similar to Header, can they be squashed into one?)
 * 
 * @param {string} background - Background color or image
 * @param {string} height - Height of the header
 * @param {boolean} [showPagesNav=false] - Flag to show/hide pages navigation
 * @param {object} [pages=false] - Pages to be passed to the Navbar component
 * @returns {JSX.Element} Footer component
 */
const Footer = ({ background, height, pages, showPagesNav }) => {
    const context = useContext(AppContext)
    return (
    <StyledFooter
        $background={background}
        $height={height}
        $showPagesNav={showPagesNav}
    >
        <p>Guess what? This site was designed using Portal</p>
    </StyledFooter>
    )
}

export default Footer
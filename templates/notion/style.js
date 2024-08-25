import { config } from './template-config'
import styled from 'styled-components'

const { style } = config

export const StyledContainer = styled.div`
    background: ${style.backgroundColor};

    .content {
        padding: ${style.padding};

        .pages-container {
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }

    div.explainer-section {

        p {
            font-size: 18px;
            color: #333;
            margin-bottom: 0.5rem;
        }

        p.heading {
            font-family: 'Courier', monospace;
            font-size: 24px;
            margin-bottom: 1rem;

            span.portal {
                color: purple;
            }
        }

        a.cta {
            background: purple;
            color: white;
            padding: 1rem;
            display: inline-block;
            border-radius: 5px;
            box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.5);

            &:hover {
                box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.5);
            }
        }

        margin-bottom: 3.5rem;
    }
`

export const StyledPageIcon = styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 2px 3px 4px rgba(0,0,0,0.25);
    cursor: pointer;
    color: ${style.bodyTextColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    &:hover {
        box-shadow: 4px 6px 5px rgba(0,0,0,0.25);
    }

    .img-container {
        height: 75%;
        border-bottom: 1px solid #ccc;
    }

    h6 {
        font-family: ${style.bodyFont};
    }
`
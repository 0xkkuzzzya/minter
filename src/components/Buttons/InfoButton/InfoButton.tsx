import styled from 'styled-components'
import { InfoBlock } from '../../Info/InfoBlock'

const ButtonInfoMain = styled.button`
   width: 100%;
   height: 100%;
   cursor: pointer;
   font-family: 'Metropolis', sans-serif;
   border: none;
   background: transparent;
   font-weight: 600;
    font-size: 17px;
    color: white;
`


export const InfoButton = () => {
    return(
        <ButtonInfoMain>
             1 ATOM = 8.722 USQ
        </ButtonInfoMain>
    )
}
import styled from 'styled-components'
import { BalanceButtonFrom } from '../Buttons/BalanceButton/BalanceButtonFrom'

const BalanceText = styled.div`
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    position: absolute;
    margin-top: -50px;
    margin-left: 190px;
    @media (max-width: 390px){
        margin-left: 165px;
    }
    @media (max-width: 365px){
        margin-left: 155px;
    }
    @media (max-width: 340px){
        margin-left: 130px;
    }
`


export const BalanceFrom = () => {
    return(
        <BalanceText>
            <BalanceButtonFrom></BalanceButtonFrom>
        </BalanceText>
    )
}
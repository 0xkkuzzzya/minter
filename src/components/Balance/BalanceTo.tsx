import styled from 'styled-components'
import { BalanceButtonTo } from '../Buttons/BalanceButton/BalanceButtonTo'

const BalanceText = styled.div`
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    position: absolute;
    margin-top: -50px;
    margin-left: 198px;
    @media (max-width: 390px){
        margin-left: 173px;
    }
    @media (max-width: 365px){
        margin-left: 165px;
    }
    @media (max-width: 340px){
        margin-left: 138px;
    }
`


export const BalanceTo = () => {
    return(
        <BalanceText>
            <BalanceButtonTo></BalanceButtonTo>
        </BalanceText>
    )
}
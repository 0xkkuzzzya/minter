import styled from 'styled-components'
import { BalanceButton } from '../Buttons/BalanceButton/BalanceButton'

const BalanceText = styled.div`
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    position: absolute;
    margin-top: -50px;
    margin-left: 11em;
`


export const Balance = () => {
    return(
        <BalanceText>
            <BalanceButton></BalanceButton>
        </BalanceText>
    )
}
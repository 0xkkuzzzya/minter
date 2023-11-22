import styled from 'styled-components'

const ButtonBalance = styled.button`
   width: 100%;
   height: 100%;
   cursor: pointer;
   font-family: 'Metropolis', sans-serif;
   border: none;
   background: transparent;
   font-weight: 600;
   font-size: 12px;
   color: #444;
   outline: none;
   text-align: right;
`

const BalanceText = styled.a`
    font-size: 12px;
    
`

export const BalanceButtonFrom = () => {
    return(
        <ButtonBalance>
            <BalanceText>Available: 1235533.22 ATOM</BalanceText>
        </ButtonBalance>
    )
}
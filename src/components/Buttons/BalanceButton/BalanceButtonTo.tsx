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
   padding: 0;
`

const BalanceText = styled.a`
    font-size: 12px;
    text-align: right;
`

export const BalanceButtonTo = () => {
    return(
        <ButtonBalance>
            <BalanceText>Available: 101521133.59 USQ</BalanceText>
        </ButtonBalance>
    )
}
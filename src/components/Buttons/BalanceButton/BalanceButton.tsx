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
`

export const BalanceButton = () => {
    return(
        <ButtonBalance>
            Available: 10.59 ATOM
        </ButtonBalance>
    )
}
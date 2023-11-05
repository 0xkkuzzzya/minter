import styled from 'styled-components'

const ButtonConnect = styled.button`
    width: 120px;
    height: 40px;
    background: linear-gradient(#77bff9, #2d96ff);
    color: #333;
    font-family: 'Metropolis', sans-serif;
    border-radius:5px;
    text-align:center;
    border:none;
    margin-left: auto;
    margin-right: 15px;
`

const ButtonConnectText = styled.a`
   font-weight: 600;
   font-size: 16px;
`

export const ConnectButton = () => {
    return(
        <ButtonConnect>
            <ButtonConnectText>Connect</ButtonConnectText>
        </ButtonConnect>
    )
}


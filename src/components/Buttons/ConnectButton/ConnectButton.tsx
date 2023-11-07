import styled from 'styled-components'

const ButtonConnect = styled.button`
    width: 120px;
    height: 35px;
    background: linear-gradient(to right, #77bff9, #2d96ff);
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius:5px;
    text-align:center;
    border:none;
    margin-left: auto;
    margin-right: 15px;
`

const ButtonConnectText = styled.a`
   font-weight: 500;
   font-size: 17px;
`

export const ConnectButton = () => {
    return(
        <ButtonConnect>
            <ButtonConnectText>Connect</ButtonConnectText>
        </ButtonConnect>
    )
}


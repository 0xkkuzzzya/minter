import styled from 'styled-components'

const InfoBlock = styled.div `
    width:85%;
    margin-top: 25px;
    margin-left:auto;
    margin-right:auto;
    color: white;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoText = styled.a`
   font-weight: 600;
   font-size: 17px;
`

export const Info = () => {
    return(
        <InfoBlock>
            <InfoText>1 ATOM = 8.7USQ</InfoText>
        </InfoBlock>
    )
}
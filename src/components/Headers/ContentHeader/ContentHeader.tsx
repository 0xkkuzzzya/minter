import styled from 'styled-components'

const ContainerHeader = styled.div `
    width:85%;
    margin-top: 35px;
    margin-left:auto;
    margin-right:auto;
`

const ContainerHeaderText = styled.h2 `
    font-size: 25px;
    font-family: 'Metropolis', sans-serif;
    color: white;
`

export const ContentHeader = () => {
    return(
        <ContainerHeader>
            <ContainerHeaderText>Convert qAssets</ContainerHeaderText>
        </ContainerHeader>
    )
}
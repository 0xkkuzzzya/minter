import styled from 'styled-components'
import { InfoButton } from '../Buttons/InfoButton/InfoButton'
import ArrowDown from '../../assets/svg/InfoArrrowDown.svg'

const InfoText = styled.div `
    margin-top: 25px;
    margin-left:auto;
    margin-right:auto;
    color: white;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
`

const InfoImg = styled.img `
    margin-top:-5px;
    cursor: pointer;
`


export const InfoBlock = () => {
    return(
        <InfoText>
            <InfoButton></InfoButton>
            <InfoImg src={ArrowDown}></InfoImg>
        </InfoText>
    )
}
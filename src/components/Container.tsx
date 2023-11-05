import styled from 'styled-components'
import { ContentHeader } from './Headers/ContentHeader/ContentHeader'
import { FromField } from './Fields/FromField/FromField'
import { ToField } from './Fields/ToField/ToField'
import { SwapButton } from './Buttons/SwapButton/SwapButton'
import { TokenChange } from './Buttons/TokenChange/TokenChange'
import { Info } from './Info/Info'

const MainContainer = styled.div `
    max-width: 400px;
    height:550px;
    background-color: #232323;
    border-radius:7px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
`

const Container = () => {
    return(
        <MainContainer>
            <ContentHeader></ContentHeader>    
            <FromField></FromField>
            <TokenChange></TokenChange>
            <ToField></ToField>
            <Info></Info>
            <SwapButton></SwapButton>
        </MainContainer>
    )
}

export default Container;
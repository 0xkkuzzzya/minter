import styled from 'styled-components'
import { MainHeader } from '../Headers/MainHeader/MainHeader'
import Container from '../Container'

const App = styled.div `
    height: 100vh;
    background: linear-gradient(#121212, #1f1f1f);
    overflow:hidden;
`

export const MainPages = () => {
    return(
        <App>
            <MainHeader></MainHeader>
            <Container></Container>
        </App>
    )
}
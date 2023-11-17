import styled from 'styled-components'
import { Example } from '../../../Modal/TokenModal/TokenModal'

const PopupChangeToToken = styled.button`
    width:100%;
    height:30px;
    background:rgb(50,50,50);
    border:none;
    outline: none;
    margin-left: 15px;
`

export const PopupToButton = () => {
    return(
        <PopupChangeToToken>
            <Example></Example>
        </PopupChangeToToken>
    )
}
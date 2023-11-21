import styled from 'styled-components'
import { TokenModalTo } from '../../../Modal/TokenModal/TokenModalTo'

const PopupChangeToToken = styled.button`
    width:100%;
    height:30px;
    border:none;
    outline: none;
    margin-left: 15px;
    background-color: transparent;
`

export const PopupToButton = () => {
    return(
        <PopupChangeToToken>
            <TokenModalTo></TokenModalTo>
        </PopupChangeToToken>
    )
}
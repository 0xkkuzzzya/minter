import styled from 'styled-components'
import { InputAmount } from '../../Input/InputAmount'
import { PopupSelectFromToken } from '../../Popup/PopupFrom/PopupSelectFromToken'


const ConvertFrom = styled.div `
    width:85%;
    height:80px;
    background-color: #1a1a1a;
    border: 3px solid #333333;
    border-radius: 10px;
    margin-top: 35px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

export const FromField = () => {
    return(
        <ConvertFrom>
            <PopupSelectFromToken></PopupSelectFromToken>
            <InputAmount></InputAmount>
        </ConvertFrom>
    )
}


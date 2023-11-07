import styled from 'styled-components'
import { PopupSelectToToken } from '../../Popup/PopupTo/PopupSelectToToken'
import { PopupToButton } from '../../Buttons/PopupButtons/PopupToButton/PopupToButton'


const ConvertTo = styled.div `
    width:85%;
    height:80px;
    background-color: #1a1a1a;
    border: 3px solid #333333;
    border-radius: 10px;
    margin-top: 15px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const ToFieldOutputAmount = styled.div`
    width:65%;
    height:100%;
    background: transparent;
    color: rgb(220,220,220);
    text-align: right;
    font-size: 21px;
    padding-right: 8px;
    padding-top:50px;
    font-family: system-ui, -apple-system,
     BlinkMacSystemFont, 'Segoe UI', Roboto, 
     Oxygen, Ubuntu, Cantarell, 'Open Sans', 
     'Helvetica Neue', sans-serif;
`



export const ToField = () => {
    return(
        <ConvertTo>
            <PopupSelectToToken></PopupSelectToToken>
            <ToFieldOutputAmount>
                0
            </ToFieldOutputAmount>
        </ConvertTo>
    )
}
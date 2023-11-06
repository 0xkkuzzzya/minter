import styled from 'styled-components'
import FromInput from '../../input/FromInput'
import PopupFromChangeToken from '../../Popup/PopupFromChangeToken'

const ConvertFrom = styled.div `
    width:85%;
    height:80px;
    background-color: #1a1a1a;
    border: 3px solid #333333;
    border-radius: 10px;
    margin-top: 35px;
    margin-left:auto;
    margin-right:auto;
    display:flex;
`

export const FromField = () => {
    return(
        <ConvertFrom>
            <PopupFromChangeToken></PopupFromChangeToken>
            <FromInput></FromInput>
        </ConvertFrom>
    )
}


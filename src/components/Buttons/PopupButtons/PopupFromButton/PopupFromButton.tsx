import styled from 'styled-components'

const PopupChangeFromToken = styled.button`
    width:100%;
    height:30px;
    background:rgb(50,50,50);
    border:none;
    outline: none;
    margin-left: 8px;
`

export const PopupFromButton = () => {
    return(
        <PopupChangeFromToken></PopupChangeFromToken>
    )
}
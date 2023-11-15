import styled from 'styled-components'
import sun from '../../../../assets/svg/sun.svg'

const PopupChangeFromToken = styled.button`
    width:100%;
    height:30px;
    background:rgb(50,50,50);
    border:none;
    outline: none;
    margin-left: 15px;
`

const PopupChangeFromTokenIamge = styled.img`
    width: 40px;
    height: 40px;
`

export const PopupFromButton = () => {
    return(
        <PopupChangeFromToken></PopupChangeFromToken>
    )
}
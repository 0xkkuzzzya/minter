import styled from 'styled-components' 
import qube from '../../assets/QubeLogo.jpg'
import keplr from '../../../assets/svg/Keplr.svg'

const ArrWallets = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const WalletFields = styled.button`
    background-color: rgb(50,50,50);
    border: none;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    cursor: pointer;
    outline:none;
    margin-top: 10px;
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 26px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const WalletsText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const WalletsTextH3 = styled.h3`
    color: white;
    font-size: 18px;
    margin-left: 10px;
`

const WalletsTextH2Number = styled.h2` 
    color: white;
    margin-left: auto;
    margin-right: 26px;
`

const WalletsTextH5 = styled.h5`
   margin-top: -10px;
    color: grey;
`



export const ConnectWallets = () => {
    return(
        <ArrWallets>
            <WalletFields>
                <Img src={keplr}></Img>
                <WalletsTextH3>Keplr</WalletsTextH3>
            </WalletFields>
            <WalletFields>
                <Img src={keplr}></Img>
                <WalletsTextH3>Keplr</WalletsTextH3>
            </WalletFields>
            <WalletFields>
                <Img src={keplr}></Img>
                <WalletsTextH3>Keplr</WalletsTextH3>
            </WalletFields>
            
        </ArrWallets>
    )
}
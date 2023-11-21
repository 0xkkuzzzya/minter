import styled from 'styled-components' 
import keplr from '../../../assets/svg/Keplr.svg'
import leap from '../../../assets/svg/LeapWallet.svg'

const ArrWallets = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`

const WalletFields = styled.button`
    background-color: rgb(50,50,50);
    width: 225px;
    height: 225px;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    cursor: pointer;
    outline:none;
    margin-top: 10px;
    justify-content: center;
`

const Img = styled.img`
    width: 170px;
    height: 170px;
    margin-top: 5px;
    margin-bottom: 5px;
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
            </WalletFields>
            <WalletFields>
                <Img src={leap}></Img>
            </WalletFields>
        </ArrWallets>
    )
}
import styled from "styled-components";
import Logo from "../media/Logo.svg"

export default function Ranking(){

    return (
        <>
            <Header>
                <MenuBar>
                    <Left>
                        <h2>Seja bem-vindo(a), Pessoa!</h2>
                    </Left>
                    <Rigth>
                        <h1>Home</h1>
                        <h1>Ranking</h1>
                        <h1>Sair</h1>
                    </Rigth>
                </MenuBar>
                <img src={Logo} alt="Shortly logo"/>
            </Header>      
            <Content>
            </Content>
        </>
    )
}

const Content = styled.div`
background-color: #FFFFFF;
background-color: red;
height: 100%;
`
const Header = styled.div`
    background-color: #FFFFFF;
    height: 200px;
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 40px;


    img{
        position: absolute;
        bottom: 20px;
        height: 100px;
        width: auto;
    }
`
const MenuBar = styled.div`
    height: 30px;
    width: 800px;
    display: flex;
    justify-content: space-between;

    h1{
        font-size: 14px;
        font-weight: 400;
        color: #9C9C9C;
        margin-left: 28px;
    }

    h2{
        font-size: 14px;
        font-weight: 400;
        color: #5D9040;
    }
`
const Left = styled.div`
    height: auto;
    display: flex;
    align-items: flex-end;
`
const Rigth = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
`
import styled from "styled-components";
import Logo from "../media/Logo.svg";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

export default function Main(){

    return (
        <>
            <Header>
                <MenuBar>
                    <Left>
                    </Left>
                    <Rigth>
                        <Link to="/signin">
                            Entrar
                        </Link>
                        <Link to="/signup">
                            Cadastrar-se
                        </Link>
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
background-color: green;
height: 100%;
font-family: 'Lexend Deca', sans-serif;
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
        margin-left: 28px;
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
    cursor: default;

    a:-webkit-any-link {
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        color: #5D9040;
        margin-left: 28px;
    }
`
import styled from "styled-components";
import Logo from "../media/Logo.svg";
import Trophy from "../media/Trophy.svg"
import { Link, useNavigate } from "react-router-dom";
import {useEffect} from 'react';
import axios from "axios";

export default function Ranking(){

    const navigate = useNavigate();

    function exit(){
        localStorage.setItem('token',"");
        localStorage.setItem('ursername',"");
        navigate("/");
    }

    if (localStorage.token===null || localStorage.token===""){
        navigate("/");
    }

    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        }

        axios.get("https://backend-projeto-shortly.herokuapp.com/users/me",config)
        .then(ans=> {
            localStorage.setItem('username',ans.data.name)
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao carregar! Consulte os logs.")
            localStorage.setItem('token',"");
            localStorage.setItem('ursername',"");
            navigate("/")
        })

    },);

    return (
        <>
            <Header>
                <MenuBar>
                    <Left>
                        <h1>Seja bem-vindo(a), {localStorage.username}</h1>
                    </Left>
                    <Rigth>
                        <Link to="/user">
                            Home
                        </Link>
                        <Link to="/ranking">
                            Ranking
                        </Link>
                        <h1 onClick={exit}>Sair</h1>
                    </Rigth>
                </MenuBar>
                <Link to="/">
                    <img src={Logo} alt="Shortly logo"/>
                </Link>
            </Header>     
            <Content>
                <Title>
                    <img src={Trophy} alt="Trophy"/>
                    <h1>Ranking</h1>
                </Title>
                <Table>
                    <User>
                        <h1><strong>1. Fulaninha -</strong> 32 links - 1.703.584 visualizações</h1>
                    </User>
                    <User>
                        <h1><strong>2. Ciclano -</strong> 20 links - 1.113.347 visualizações</h1>
                    </User>
                    <User>
                        <h1><strong>3. Beltrana -</strong> 18 links - 852.961 visualizações</h1>
                    </User>
                    <User>
                        <h1><strong>4. Joaozin -</strong> 14 links - 492.173 visualizações</h1>
                    </User>
                    <User>
                        <h1><strong>5. DEFINITIVAMENTE_NAO_E_UM_BOT -</strong> 12345252 links - 37.707 visualizações</h1>
                    </User>
                </Table>
            </Content>
        </>
    )
}

const Header = styled.div`
    background-color: #FFFFFF;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding-top: 30px;

    img {
        margin-top: 30px;
        left: 50%;
        height: 100px;
        width: auto;
    }
`
const MenuBar = styled.div`
    height: 30px;
    width: 800px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    height: auto;
    display: flex;
    align-items: flex-end;
    
    h1{
        font-size: 14px;
        font-weight: 400;
        color: #9C9C9C;
        margin-left: 28px;
        cursor: default;
    }
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

    h1{
        font-size: 14px;
        font-weight: 400;
        color: #5D9040;
        margin-left: 28px;
        cursor: pointer;
    }
`
const Content = styled.div`
    background-color: #FFFFFF;
    height: 100%;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    cursor: default;

    h1 {
        font-size: 36px;
        font-weight: 700;
    }

    img {
        height: 50px;
        width: 55px;
        margin-right: 15px;
    }
`
const Table = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    font-family: 'Lexend Deca', sans-serif;
    width: 1010px;
    margin-top: 55px;
    padding: 10px 40px;
    cursor: default;
`
const User = styled.div`
    display: flex;
    margin: 15px 0;

    h1 {
        font-size: 22px;
        font-weight: 400;
    }

    strong {
        font-weight: 500;
    }
`
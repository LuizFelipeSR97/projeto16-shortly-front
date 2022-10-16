import styled from "styled-components";
import Logo from "../media/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios";

import RenderLinks from "./renderComponents/urlsRender";

export default function UserPage(){

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState("")

    function exit(){
        localStorage.setItem('token',"");
        localStorage.setItem('username',"");
        // Sair da sessao com o token
        navigate("/");
    }

    function refreshPage() {
        window.location.reload(false);
    }    

    function sendForm(e){

        e.preventDefault();
        
        const config = {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        }

        const body = {"url": e.target.url.value};
        e.target.url.value="";

        axios.post("https://backend-projeto-shortly.herokuapp.com/urls/shorten", body, config).then(answer => {
  
            alert(`Seu link foi encurtado com sucesso! Seu código é: ${answer.data.shortUrl}`);
            refreshPage()

            }).catch(err => {
                if (err.response.status===401){
                    alert("Houve um erro. Por favor, tente novamente mais tarde.")
                    return
                }
                if (err.response.status===422){
                    return alert("Seu link não é valido. Por favor, escolha um link válido e tente novamente.")
                }
                console.error(err);
                alert("Erro no processo. Consulte os logs.")
            })
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
            console.log(config)
            console.log(ans)
            if (ans!==[]){
                setUserInfo(ans.data)
                localStorage.setItem('username',ans.data.name)
            }
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao carregar! Consulte os logs.")
            localStorage.setItem('token',"");
            localStorage.setItem('username',"");
            navigate("/")
        })

    },[navigate]);

    return (
        <>
            <Header>
                <MenuBar>
                    <Left>
                        <h1>Seja bem-vindo(a), {userInfo.name}</h1>
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
                <Form onSubmit={sendForm}>
                    <input name="url" placeholder="Links que cabem no bolso" type="text" required/>
                    <Button>
                        Encurtar link
                    </Button>
                </Form>
                    <RenderLinks user={userInfo}/>
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
    width: 1050px;
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
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
    margin-bottom: 55px;

input{
    width: 770px;
    height: 60px;
    padding-left: 22px;
    color: black;
    font-size: 14px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    font-family: 'Lexend Deca', sans-serif;
}

input::placeholder{
    color: #9C9C9C;
    font-size: 14px;
    font-family: 'Lexend Deca', sans-serif;  
}
`
const Button = styled.button`
    width: 180px;
    height: 60px;
    margin: 10px 0;
    background: #5D9040;
    border-radius: 12px;
    color: white;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-left: 70px;
    border: solid 1px #5D9040;
    border-radius: 12px;
    cursor: pointer;
`
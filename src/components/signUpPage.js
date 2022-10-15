import styled from "styled-components";
import Logo from "../media/Logo.svg";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

export default function SignUp(){

    const navigate = useNavigate();

    function sendForm(e){

        e.preventDefault();

        const user = {name: e.target.name.value, email: e.target.email.value, password: e.target.password.value, confirmPassword: e.target.confirmPassword.value};

        axios.post("https://backend-projeto-shortly.herokuapp.com/signup", user).then(answer => {

            alert('Cadastro realizado com sucesso!')        
            navigate("/signin");

            }).catch(err => {
                if (err.response.status===422){
                    e.target.password.value="";
                    e.target.confirmPassword.value="";
                    return alert(err.response.data)
                }
                if (err.response.status===409){
                    e.target.name.value="";
                    e.target.email.value="";
                    e.target.password.value="";
                    e.target.confirmPassword.value="";
                    return alert("Já existe um usuário cadastrado com esse email. Crie uma nova conta com outro email ou conecte-se a sua conta na aba Entrar no menu superior à direita")
                }
                console.error(err);
                return alert("Erro ao fazer cadastro. Consulte os logs.")
            })
    }


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
                        <h1>Cadastrar-se</h1>
                    </Rigth>
                </MenuBar>
                <Link to="/">
                    <img src={Logo} alt="Shortly logo"/>
                </Link>
            </Header>      
            <Content>
                <Form onSubmit={sendForm}>
                    <input name="name" placeholder="Nome" type="text" required/>
                    <input name="email" placeholder="E-mail" type="email" required/>
                    <input name="password" placeholder="Senha" type="password" required/>
                    <input name="confirmPassword" placeholder="Confirmar senha" type="password" required/>
                    <Button>
                        Criar Conta
                    </Button>
                </Form>
            </Content>
        </>
    )
}

const Content = styled.div`
background-color: #FFFFFF;
height: 100%;
font-family: 'Lexend Deca', sans-serif;
`
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
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

input{
    width: 770px;
    height: 60px;
    margin-bottom: 25px;
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
    margin-top: 40px;
    border: solid 1px #5D9040;
    border-radius: 12px;
    cursor: pointer;
`
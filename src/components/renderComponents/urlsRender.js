import styled from "styled-components";
import Trash from "../../media/Trash.svg";

export default function RenderLinks({user}){

    function deleteLink(){
        // Falta fazer esse
    }

    return ((user === "" || user.shortenedUrls === []) ? 
    <></>
    :
    (user.shortenedUrls.map(link=>
    <CreatedLink>
        <Info>
            <h1>{link.url}</h1>
            <h2>{link.shortUrl}</h2>
            <h3>Quantidade de visitantes: {link.visitCount}</h3>
        </Info>
        <Delete onClick={deleteLink}><img src={Trash} alt="Delete"/></Delete>
    </CreatedLink>
    )))
}

const CreatedLink = styled.div`
    width: 1020px;
    heigth: 60px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
    margin-bottom: 40px;
`
const Info = styled.div`
    background-color: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    height: 60px;
    width: 880px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 50px;
`
const Delete = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    height: 60px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 25px;
        width: 20px;
    }
`
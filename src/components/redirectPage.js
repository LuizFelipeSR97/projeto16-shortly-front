import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react';

export default function Redirect(){

    const navigate = useNavigate();

    const params = useParams();
    const shortUrl = params.shortUrl

    useEffect(() => {    
        
        axios.get(`https://backend-projeto-shortly.herokuapp.com/urls/open/${shortUrl}`)
        .then(ans=> 
            console.log(ans)
        )
        .catch(err => {
            console.error(err);
            alert("Erro ao redirecionar! Consulte os logs.")
            navigate("/")
        })

    },[navigate,shortUrl]);

    return <></>
}
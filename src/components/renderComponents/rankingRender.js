import styled from "styled-components";

const rankingUsers=[
	{
		"id": 254,
		"name": 'Fulaninha',
		"linksCount": 32,
		"visitCount": 1703584
	},
	{
		"id": 13,
		"name": 'Ciclano',
		"linksCount": 20,
		"visitCount": 1113347
	},
	{
		"id": 25,
		"name": 'Beltrana',
		"linksCount": 18,
		"visitCount": 852961
	},
	{
		"id": 44,
		"name": 'Joazin',
		"linksCount": 14,
		"visitCount": 492173
	},
	{
		"id": 2,
		"name": 'DEFINITIVAMENTE_NAO_E_UM_BOT',
		"linksCount": 12345252,
		"visitCount": 37017
	}
]

export default function RankingRender(){

    return (rankingUsers.map((user,index)=>
    <>
        <User>
            <h1><strong>{index+1}. {user.name} -</strong> {user.linksCount} links - {user.visitCount} visualizações</h1>
        </User>
    </>

    ))
}


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
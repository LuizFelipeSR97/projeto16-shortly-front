import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";

import Main from "./mainPage";
import SignIn from "./signInPage";
import SignUp from "./signUpPage";
import Ranking from "./rankingPage";
import UserPage from "./userPage";

export default function App(){

    return (
    <Page>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
            </BrowserRouter>        
    </Page>
    )
}

const Page = styled.div`
    background-color: #FFFFFF;
    background-color: blue;
    height: 100vh;
    font-family: 'Lexend Deca', sans-serif;
`
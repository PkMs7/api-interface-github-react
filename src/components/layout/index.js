import React from "react";
import Header from "../header";
import useGithub from "../hooks/github-hooks";
import * as S from "./styled"
import Repositories from "../repositories";
import Profile from "../profile";
import NoSearch from "../no-search";

function Layout({ children }) {

    const { githubState } = useGithub();

    return (
        <S.WrapperLayout>
            <Header />

            { githubState.hasUser ? <><Profile /><Repositories /></> : <NoSearch /> }

            { githubState.loading ? <p>Loading ...</p> : <>{ children }</>}
            
        </S.WrapperLayout>
    );
}

export default Layout;
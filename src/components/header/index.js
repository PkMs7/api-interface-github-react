import React, { useState } from "react";
import useGithub from "../hooks/github-hooks";
import * as S from "./styled";

function Header() {

    const { getUser } = useGithub();

    const [usernameForSearch, setusernameForSearch] = useState()

    const submitGetUser = () => {

        if(!usernameForSearch) return;
        return getUser(usernameForSearch);

    };

    return(
        <header>
            <S.WrapperHeader>
                <input type="text" placeholder="Digite o username para pesquisa..." onChange={(event) => setusernameForSearch(event.target.value)}></input>
                <button type="submit" onClick={submitGetUser}>Buscar</button>
            </S.WrapperHeader>
        </header>
    );

};

export default Header;
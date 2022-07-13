import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

function Repositories(){

    return ( 

        <S.WrapperTabs 
        selectedTabClassName = 'is-selected'
        selectedTabPanelClassName = 'is-selected'
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="api-interface-github-react"
                    fullName="PkMs7/api-interface-github-react"
                    linkToRepo="https://github.com/PkMs7/api-interface-github-react"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
            <RepositoryItem
                    name="bankline-api"
                    fullName="PkMs7/bankline-api"
                    linkToRepo="https://github.com/PkMs7/bankline-api"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>

    );

};

export default Repositories;
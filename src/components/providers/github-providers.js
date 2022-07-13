import React, { createContext, useState } from "react";

export const GitHubContext = createContext ({

    user:{},
    repositories: [],
    starred: []

});

function GitHubPorvider({ children }) {

    const [githubState, setgithubState] = useState({
        user: {
            login: undefined,
            name: 'Patrick M.',
            public_url: undefined,
            blog: undefined,
            company:undefined,
            location: undefined,            
            followers: undefined,
            following: undefined,
            public_gists: undefined,
            public_repo: undefined
        },

        repositories: [],

        starred: []


    });

    const contextValue = {
        githubState,
    };

    return (

        <GitHubContext.Provider value={ contextValue }>{ children }</ GitHubContext.Provider>

    );

};

export default GitHubPorvider;
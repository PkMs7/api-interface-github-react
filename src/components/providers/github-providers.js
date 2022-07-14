import React, { createContext, useCallback, useState } from "react";
import api from "../../services/api";

export const GitHubContext = createContext ({

    loading: false,
    user:{},
    repositories: [],
    starred: []

});

function GitHubPorvider({ children }) {

    const [githubState, setgithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: 'Patrick M.',
            html_url: undefined,
            blog: undefined,
            company:undefined,
            location: undefined,            
            followers: undefined,
            following: undefined,
            public_gists: undefined,
            public_repos: undefined
        },

        repositories: [],

        starred: []

    });

    const getUser = (username) => {

        api.get(`users/${username}`).then( ({ data }) => {

            setgithubState( prevState => ({
                ...prevState,
                user: {
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,            
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                }
            }))

        });

    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    };

    return (

        <GitHubContext.Provider value={ contextValue }>{ children }</ GitHubContext.Provider>

    );

};

export default GitHubPorvider;
import React, { createContext, useCallback, useState } from "react";
import api from "../../services/api";

export const GitHubContext = createContext ({

    loading: false,
    user:{},
    repositories: [],
    starred: [],

});

function GitHubPorvider({ children }) {

    const [githubState, setgithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
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

        starred: [],

    });

    const getUser = (username) => {

        setgithubState((prevState) => ({

            ...prevState,
            loading: !prevState.loading

        }));

        api.get(`users/${username}`).then( ({ data }) => {

            setgithubState( prevState => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
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
            }));
        }).finally(() => {

            setgithubState((prevState) => ({

                ...prevState,
                loading: !prevState.loading
    
            }));
        });

    };

    const getUserRepos = (username) => {

        api.get(`users/${username}/repos`).then( ({ data }) => {

            setgithubState( prevState => ({
                ...prevState,
                repositories: data,
            }));
        });
    };

    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {

          setgithubState((prevState) => ({
            ...prevState,
            starred: data,
          }));
        });
      };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };

    return (

        <GitHubContext.Provider value={ contextValue }>{ children }</ GitHubContext.Provider>

    );

};

export default GitHubPorvider;
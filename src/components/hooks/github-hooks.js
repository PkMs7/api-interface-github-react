import { useContext } from "react";
import { GitHubContext } from "../providers/github-providers";

function useGithub() {

    const { githubState } = useContext(GitHubContext);

    return { githubState };

};

export default useGithub;
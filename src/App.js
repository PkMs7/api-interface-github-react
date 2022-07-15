import React from "react";
import useGithub from "./components/hooks/github-hooks";
import Layout from "./components/layout";
import GitHubPorvider from "./components/providers/github-providers";
import { ResetCSS } from "./global/resetCSS"

function App() {

  const { githubState } = useGithub();

  return (
  <main>
    <GitHubPorvider>
      <ResetCSS />
        <Layout />
    </GitHubPorvider>
  </main>
  );

};

export default App;

import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS"

// link para o JSON do user https://api.github.com/users/PkMs7

function App() {
  return (
  <main>
    <ResetCSS />
      <Layout>
          <Profile />
          <Repositories />
      </Layout>
  </main>
  );
}

export default App;

import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./global/resetCSS"

// link para o JSON do user https://api.github.com/users/PkMs7

function App() {
  return (
  <main>
    <ResetCSS />
    <Layout>
        <div>
          <Profile />
        </div>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
  </main>
  );
}

export default App;

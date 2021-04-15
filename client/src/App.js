import { Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Layout from "./layout/Layout";
import "./assets/MainContainer.css"
import "./assets/Layout.css"
import "./assets/Components.css"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/">
          <MainContainer />
        </Route>
      </Layout>
    </div>
  );
}

export default App;

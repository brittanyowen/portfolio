import { Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Layout from "./layout/Layout";
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

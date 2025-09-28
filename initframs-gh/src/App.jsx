import { Route, Switch } from "wouter";
import Root from "./pages/Root";

const App = () => (
  <>
    <Switch>
      <Route path="/">
        <Root/>
      </Route>
      <Route>404, Not Found!</Route>
    </Switch>
  </>
);

export default App
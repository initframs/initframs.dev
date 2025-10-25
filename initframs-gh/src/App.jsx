import { Route, Switch } from "wouter";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
const App = () => (
  <>
    <Switch>
      <Route path="/">
        <Root />
      </Route>
      <Route><NotFound /></Route>
    </Switch>
  </>
);

export default App
import { Route, Switch } from "wouter";
import Root from "./pages/Root";
import Tools from "./pages/Tools"
import NotFound from "./pages/NotFound";
const App = () => (
  <>
    <Switch>
      <Route path="/">
        <Root />
      </Route>
      <Route path="/tools" nest>
        <Switch>
          <Route path="/"><Tools /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Route>
      <Route><NotFound /></Route>
    </Switch>
  </>
);

export default App
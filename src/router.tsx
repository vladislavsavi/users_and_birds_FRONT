import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppLayout } from "./components";
import { SignUpPage, SignInPage, Birds } from "./pages";

export function AppRouter() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/birds">
            <Birds />
          </Route>
          <Route path="/users">
            <h1>USERS</h1>
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

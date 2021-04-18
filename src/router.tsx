import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { AppLayout } from './components';

import {SignUpPage, SignInPage} from './pages';

export function AppRouter() {
    return (
        <Router>
            <AppLayout>
                <Switch>
                    <Route path="/sign-in" exact>
                        <SignInPage/>
                    </Route>
                    <Route path="/sign-up">
                        <SignUpPage />
                    </Route>
                    <Route path="/birds">
                        <h1>BIRDS</h1>
                    </Route>
                    <Route path="/users">
                        <h1>USERS</h1>
                    </Route>
                    <Route path="/">
                        <h1>HOME</h1>
                    </Route>
                </Switch>
            </AppLayout>
        </Router>
    );
}
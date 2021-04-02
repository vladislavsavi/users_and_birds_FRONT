import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { AppLayout } from './components';

import {SignUpPage} from './pages';

export function AppRouter() {
    return (
        <Router>
            <AppLayout>
                <Switch>
                    <Route path="/sign-in">
                        <h1>sign-in</h1>
                    </Route>
                    <Route path="/sign-up">
                        <SignUpPage />
                    </Route>
                    <Route path="/">
                        <h1>HOME</h1>
                    </Route>
                </Switch>
            </AppLayout>
        </Router>
    );
}
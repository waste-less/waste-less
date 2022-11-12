import { Link, Route, Switch } from "wouter-preact";
// NOTE these are just for examples
import TypedPage from "./route/x/typed";
import StyledPage from "./route/x/styled";
// NOTE app starts here
import IndexPage from "./route";
import NotFoundPage from "./route/404";
import DashBoardPage from "./route/dashboard";
import SignUpPage from "./route/sign-up";
import SignInPage from "./route/sign-in";
import { authContext } from "./firebase";

export function App() {
    const AuthContext = authContext();

    return (
        <AuthContext>
            <Switch>
                <Route path="/" component={IndexPage} />

                <Route path="/dashboard" component={DashBoardPage} />
                <Route path="/sign-in" component={SignInPage} />
                <Route path="/sign-up" component={SignUpPage} />

                <Route path="/x/typed" component={TypedPage} />
                <Route path="/x/styled" component={StyledPage} />

                <Route component={NotFoundPage} />
            </Switch>
        </AuthContext>
    );
}

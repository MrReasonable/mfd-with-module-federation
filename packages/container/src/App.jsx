import Header from "./components/Header";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import { lazy, Suspense, useState } from "react";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <HistoryRouter history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <hr />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route path="/auth">
                <Route
                  path="*"
                  element={
                    <AuthLazy
                      history={history}
                      onSignIn={() => {
                        console.log("Signed in.");
                        setIsSignedIn(true);
                      }}
                    />
                  }
                />
              </Route>
              <Route path="/*" element={<MarketingLazy history={history} />} />}
              />
            </Routes>
          </Suspense>
        </div>
      </StylesProvider>
    </HistoryRouter>
  );
};

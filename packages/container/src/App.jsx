import Header from "./components/Header";
import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import { lazy, Suspense, useEffect, useState } from "react";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

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
                        setIsSignedIn(true);
                      }}
                    />
                  }
                />
              </Route>
              <Route
                path="/dashboard"
                index
                element={
                  <>
                    {!isSignedIn && <Navigate to="/" replace={true} />}
                    {isSignedIn && <DashboardLazy />}
                  </>
                }
              />
              <Route path="/*" element={<MarketingLazy history={history} />} />}
            </Routes>
          </Suspense>
        </div>
      </StylesProvider>
    </HistoryRouter>
  );
};

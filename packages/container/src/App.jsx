import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import React from "react";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  return (
    <HistoryRouter history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <hr />
          <Routes>
            <Route path="/auth">
              <Route
                path="*"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <AuthApp history={history} />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <React.Suspense fallback={<>...</>}>
                  <MarketingApp history={history} />} />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
      </StylesProvider>
    </HistoryRouter>
  );
};

import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

import React from "react";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" />
          </Routes>
        </HistoryRouter>
      </StylesProvider>
    </div>
  );
};

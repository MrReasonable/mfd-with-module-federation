import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import React from "react";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <HistoryRouter history={history}>
          <Routes>
            <Route index path="/" element={<Landing />} />
            <Route
              path="/pricing"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Pricing />
                </React.Suspense>
              }
            />
            <Route path="/*" element={<></>} />
          </Routes>
        </HistoryRouter>
      </StylesProvider>
    </div>
  );
};

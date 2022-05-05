import { Routes, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import React from "react";

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Landing />} />
              <Route
                path="pricing"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Pricing />
                  </React.Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

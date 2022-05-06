import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import React from "react";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
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

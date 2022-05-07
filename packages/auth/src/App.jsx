import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

import React from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/auth">
              <Route path="signin" element={<SignIn onSignIn={onSignIn} />} />
              <Route path="signup" element={<SignUp onSignIn={onSignIn} />} />
            </Route>
            <Route path="/*" element={<></>} />
          </Routes>
        </HistoryRouter>
      </StylesProvider>
    </div>
  );
};

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";

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
          <MarketingApp history={history} />
        </div>
      </StylesProvider>
    </HistoryRouter>
  );
};

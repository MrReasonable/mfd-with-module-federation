import { createRoot } from "react-dom/client";
import { createBrowserHistory, createMemoryHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  const root = createRoot(el);
  root.render(<App onSignIn={onSignIn} history={history} />);

  return {
    onParentNavigate({ location: { pathname: nextPathname } }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

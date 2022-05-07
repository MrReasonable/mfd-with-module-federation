import { mount } from "auth/AuthApp";
import { useEffect, useRef } from "react";

export default ({ history }) => {
  const ref = useRef(null);
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ location: { pathname: nextPathName } }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn: () => {
        console.log("User signed in");
      },
    });
    return history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

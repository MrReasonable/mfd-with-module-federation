import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";

export default ({ history }) => {
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ location: { pathname: nextPathName } }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
    return history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

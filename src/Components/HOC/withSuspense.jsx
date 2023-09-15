import React from "react";
import loaderImg from "../../assets/images/Walk.gif";

function withSuspense(args) {
  const { page, data } = args;

  return function InnerComponent(
    props
  ) {
    const LazyComponent = React.lazy(() => import(`./${page}`));

    return (
      <React.Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <img src={loaderImg} alt="loader" className="spin-loader" />
            </div>
          </div>
        }
      >
        {/* <LazyComponent {...props} {...data} /> */}
      </React.Suspense>
    );
  };
}

export default withSuspense;

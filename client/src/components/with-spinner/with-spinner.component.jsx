import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => {
  // const spans = [...Array(9).keys()];

  const Spinner = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );

  return Spinner;
};

export default WithSpinner;

// <div>
// <Loader className="grey" grey={true}>
//   {spans.map((span) => (
//     <span key={span} />
//   ))}
// </Loader>
// <Loader grey={false}>
//   {spans.map((span) => (
//     <span key={span} />
//   ))}
// </Loader>
// </div>

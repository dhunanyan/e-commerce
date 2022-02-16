import React from "react";

import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

import Logo from "../../assets/NOVELEX_Logo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripce = price * 100;
  const publishableKey =
    "pk_test_51KTccsAqyN9H2Cd0WvBCIQ13hHZAW3BC7roGpEpXfEq8xcQoXkRh6Jpr22tU1UvpLEhqFYp5GWNBZhvYSo36Basn008yhTSVtB";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      name="Novelex Consulting LLC"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripce}
      token={onToken}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      label="Pay Now"
    >
      <button className="my-super-cool-button">Pay Now</button>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;

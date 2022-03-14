import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { StripeButton } from "./stripe-button.styles";
import Logo from "../../assets/NOVELEX_Logo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KTccsAqyN9H2Cd0WvBCIQ13hHZAW3BC7roGpEpXfEq8xcQoXkRh6Jpr22tU1UvpLEhqFYp5GWNBZhvYSo36Basn008yhTSVtB";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful!");
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      name="Novelex Consulting LLC"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      label="Pay Now"
    >
      <StripeButton>Pay Now</StripeButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;

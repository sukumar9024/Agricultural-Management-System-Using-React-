import React from 'react';
import GooglePayButton from '@google-pay/button-react';

function Payment({ totalCost }) {
  const formattedTotalCost = totalCost ? totalCost.toString() : '0'; // Check if totalCost is defined

  return (
    <GooglePayButton
      environment="TEST"
      buttonSizeMode="fill"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '17613812255336763067',
          merchantName: 'Demo Only (you will not be charged)',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: formattedTotalCost, // Use the formatted totalCost
          totalPrice: formattedTotalCost, // Use the formatted totalCost
          currencyCode: 'USD',
          countryCode: 'US',
        },
      }}
      onLoadPaymentData={paymentData => {
        console.log('TODO: send order to server', paymentData.paymentMethodData);
      }}
    />
  );
}

export default Payment;

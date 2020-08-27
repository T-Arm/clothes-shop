import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceInCents = price * 100
    const publishableKey = 'pk_test_51HKVnREhVP4KfrI9GVxbtQ1UcV3pNsIT6yeHfoZE7PIuOczxYCfYPs5szbCpTbNTwAWLhzKf1nDwEvfyX6G18tmW005auc00ye'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label= 'Pay Now'
            name= 'Ecommerse'
            shippingAddress
            billingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}`}
            ammount = {priceInCents}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    )

}

export default StripeCheckoutButton
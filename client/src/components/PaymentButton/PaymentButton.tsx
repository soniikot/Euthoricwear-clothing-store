import { makeRequest } from '@/makeRequest';
import { loadStripe } from '@stripe/stripe-js';
import style from './styles.module.scss';
import { FC } from 'react';

interface PaymentButtonProps {
  cart: {};
}
export const PaymentButton: FC<PaymentButtonProps> = ({ cart }) => {
  const stripePromise = loadStripe(
    'pk_test_51Q9wuPAoB7FsfDJTAWmTQwiO12bwE2ipelQqXrw65HsfYgorAJC9APIjY9KF67q6W5HnKzlniB2qfyAgNqTGr05t00hIIn4Jpx'
  );
  const isCartEmpty = Object.keys(cart).length === 0;
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      if (stripe === null) {
        return;
      }

      const res = await makeRequest.post('/orders', { cart });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className={style.button_checkout}
      onClick={handlePayment}
      disabled={isCartEmpty}
    >
      PROCEED TO CHECKOUT
    </button>
  );
};

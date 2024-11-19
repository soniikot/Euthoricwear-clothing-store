import { SectionTitle } from '@/shared/components/SectionTitle/SectionTitle';
import { FC } from 'react';
import style from './styles.module.scss';

export const AboutPage: FC = () => {
  return (
    <div className="container">
      <SectionTitle text="Track Order" />
      <p>
        Step 1: Log In to Your Account To get started, log in to your account on
        our website. If you don’t have an account yet, no worries – simply
        create one.
      </p>
      <p>
        Step 2: Go to "My Orders" Once logged in, navigate to the "My Orders"
        section from the main menu. This is where you'll find a list of all your
        past and current orders.
      </p>
      <p>
        Step4: View Tracking Information In the order details, you'll find a
        Tracking Number and a link to the shipping carrier's website. You can
        use this tracking number to check the real-time status of your package.
        The tracking page will show you the location of your order, estimated
        delivery date, and any updates or delays.
      </p>
      <p>
        Step 5: Get Updates via Email/SMS To stay updated without checking
        manually, you can enable email or SMS notifications. We'll send you
        automatic updates whenever your order moves through key shipping
        milestones
      </p>
      <p>
        Step 6: Need Help? If you encounter any issues or the tracking info is
        unclear, our Customer Support team is here to help. Simply reach out to
        us via our Contact Us page, and we’ll assist you right away.
      </p>
      <SectionTitle text="Return & Refunds" />
      <p>
        Once we receive and inspect your returned item(s), we will process your
        refund within 7-10 business days. Refunds will be issued to the original
        payment method used for the purchase. Please note: Shipping fees are
        non-refundable, unless the return is due to an error on our part (e.g.,
        wrong item shipped). If you received a gift, the refund will be issued
        to the original purchaser's account. Partial refunds may be issued for
        items returned in used or damaged condition.
      </p>
      <p>
        you'd prefer an exchange instead of a refund, simply let us know when
        you initiate your return. We will process the exchange as quickly as
        possible, and we’ll cover any additional shipping costs for a
        replacement item.
      </p>
      <SectionTitle text="FAQ's" />
      <div className={style.faq_section}>
        <div className={style.faq_item}>
          <div className={style.faq_question}>1. How do I place an order?</div>
          <div className={style.faq_answer}>
            <p>
              To place an order, simply browse our collection, select your
              desired items, and choose your size and color options. Click the{' '}
              <strong>"Add to Cart"</strong> button, and when you're ready,
              proceed to <strong>Checkout</strong>. You can pay securely using a
              variety of payment methods, including credit cards, PayPal, and
              more. Once your order is confirmed, we’ll send you an email with
              the details.
            </p>
          </div>
        </div>

        <div className={style.faq_item}>
          <div className={style.faq_question}>
            2. How can I check my order status?
          </div>
          <div className={style.faq_answer}>
            <p>
              Once your order is shipped, we’ll send you a{' '}
              <strong>tracking number</strong> via email. You can use this
              number to track the status of your shipment on the carrier’s
              website. If you created an account with us, you can also log in to
              check the status in your <strong>"My Orders"</strong> section.
            </p>
          </div>
        </div>

        <div className={style.faq_item}>
          <div className={style.faq_question}>3. What size should I order?</div>
          <div className={style.faq_answer}>
            <p>
              We offer a detailed <strong>size chart</strong> on every product
              page to help you find your perfect fit. If you’re between sizes,
              we recommend sizing up for a more comfortable fit. If you’re
              unsure, our customer service team is happy to assist with size
              recommendations!
            </p>
          </div>
        </div>

        <div className={style.faq_item}>
          <div className={style.faq_question}>
            4. What if I receive the wrong item or a defective product?
          </div>
          <div className={style.faq_answer}>
            <p>
              We’re sorry for the inconvenience! If you receive the wrong item
              or a defective product, please contact our Customer Support team
              within <strong>7 days</strong> of receiving your order. We’ll
              arrange for a return, replacement, or refund as soon as possible.
            </p>
          </div>
        </div>

        <div className={style.faq_item}>
          <div className={style.faq_question}>
            5. Can I change or cancel my order?
          </div>
          <div className={style.faq_answer}>
            <p>
              Once your order is placed, we process it quickly to get your items
              shipped as soon as possible. If you need to make a change or
              cancel your order, please contact us immediately. Unfortunately,
              we cannot guarantee changes after an order has been processed, but
              we’ll do our best to accommodate your request.
            </p>
          </div>
        </div>

        <div className={style.faq_item}>
          <div className={style.faq_question}>6. Do you offer gift cards?</div>
          <div className={style.faq_answer}>
            <p>
              Yes! We offer <strong>digital gift cards</strong> in various
              denominations. They can be purchased directly from our website and
              are delivered to your email inbox. Gift cards can be redeemed
              during checkout.
            </p>
          </div>
        </div>

        <div className={style.faq_item}>
          <div className={style.faq_question}>
            7. What payment methods do you accept?
          </div>
          <div className={style.faq_answer}>
            <p>We accept a variety of payment methods, including:</p>
            <ul>
              <li>
                <strong>Credit/Debit Cards</strong>: Visa, MasterCard, American
                Express, Discover
              </li>
              <li>
                <strong>PayPal</strong>
              </li>
              <li>
                <strong>Apple Pay</strong> and <strong>Google Pay</strong>{' '}
                (where available)
              </li>
              <li>
                <strong>Shop Pay</strong> for quicker checkout (for registered
                customers)
              </li>
            </ul>
          </div>
        </div>

        <div className={style.faq_item}>
          <div className={style.faq_question}>
            8. How do I return or exchange an item?
          </div>
          <div className={style.faq_answer}>
            <p>
              We want you to love what you ordered, but if you’re not satisfied,
              we offer hassle-free returns and exchanges. Please visit our{' '}
              <a href="/return-policy">Return & Refunds</a> page for detailed
              instructions on how to return or exchange an item. All returns
              must be made within <strong>30 days</strong> of receiving your
              order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

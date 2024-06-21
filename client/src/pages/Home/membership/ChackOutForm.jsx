import { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseAuth from "../../../hooks/UseAuth";


const ChackOutForm = ({ price, name,id }) => {
 
  const { user } = UseAuth();
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const AxiosSecure = UseAxiosSecure();

  useEffect(() => {
    AxiosSecure.post(`/create-payment-intent`, { price: price })
      .then(res => {
        setClientSecret(res.data.clientSecret);
      });
  }, [AxiosSecure, price]);

  const stripe = useStripe();
  const elements = useElements();

  // const updateUserBadge = async () => {
  //   try {
  //     const { data } = await AxiosSecure.patch(`/users/badge/${user?._id}`);
  //     console.log("Badge updated:", data);
  //   } catch (error) {
  //     console.error("Error updating badge:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    if (paymentMethodError) {
      setError(paymentMethodError.message);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: paymentMethodError.message,
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      setError('');
      console.log('paymentMethod', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'name not found',
          email: user?.email || 'email not found'
        }
      }
    });

    if (confirmError) {
      setError(confirmError.message);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: confirmError.message,
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        setError('');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment success!",
          showConfirmButton: false,
          timer: 2000
        });

        const paymentData = {
          email: user?.email,
          price,
          transactionId: paymentIntent.id,
          date: new Date().toLocaleDateString()
        };
        await AxiosSecure.post(`/payment`, paymentData);
        await updateUserBadge();
      }
      console.log('confirm payment', paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className="text-red-600">{error}</p>
      {
        transactionId && <p className="text-green-500">Your transaction id: {transactionId}</p>
      }
      <button className="btn bg-blue-400 hover:bg-blue-400 text-white font-bold px-8 mt-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
  );
};

export default ChackOutForm;

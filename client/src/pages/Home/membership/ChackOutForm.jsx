import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseAuth from "../../../hooks/UseAuth";
// import UseCard from "../../../hooks/UseCard";


const ChackOutForm = ({price}) => {
  const {user}=UseAuth()
  const [error,seterror]=useState('')
  const [transectionId,setTransectionId]=useState('')

  const [clientSecret,setClientSecret]=useState('')
  const AxiosSecure=UseAxiosSecure()
  
  useEffect(()=>{
      AxiosSecure.post(`/create-payment-intent`,{price:price})
      .then(res=>{
        setClientSecret(res.data.clientSecret)
       
      })
      
  },[AxiosSecure,price])

  // console.log(clientSecret);
  // const [card]=UseCard()
    const stripe=useStripe()
    const elements=useElements()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card=elements.getElement(CardElement)
        if(card==null){
            return
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
          seterror(error.message)
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 2000
          });
            
        }else{
          seterror('')
            console.log('paymentmethod',paymentMethod);
        }
        const {paymentIntent,error:confirmerror}=await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card:card,
            billing_details:{
              name:user?.displayName || 'name not found',
              email:user?.email ||'email not found'
            }
          }
        })

        if(confirmerror){
          seterror(confirmerror.message)
          Swal.fire({
              position: "top-end",
              icon: "error",
              title: confirmerror.message,
              showConfirmButton: false,
              timer: 2000
            });
     
        }
        else{
          if(paymentIntent.status==='succeeded'){
            setTransectionId(paymentIntent.id)
            seterror('')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "payment success!",
                showConfirmButton: false,
                timer: 2000
              });
          }
         
          console.log('confirm payment',paymentIntent);
        }
    }
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
        transectionId && <p className="text-green-500">your transection id : {transectionId}</p>
      }
      <button className="btn bg-blue-400 hover:bg-blue-400 text-white font-bold px-8
       mt-4" type="submit" disabled={!stripe || !clientSecret}>
        pay
      </button>
    </form>
    );

    
    
};

export default ChackOutForm;
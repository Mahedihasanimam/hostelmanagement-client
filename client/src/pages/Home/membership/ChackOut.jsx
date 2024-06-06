import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";
import MyButton from "../../../components/MyButton";


const ChackOut = () => {
    const {user}=UseAuth()
    const {data}=useLoaderData()
    const {price,name,_id}=data
    return (
        <div className="mt-28">
           <div className="lg:w-1/2 md:w-1/2 w-full px-4 mx-auto  h-screen space-y-2 ">
            <h3 className="text-center font-bold text-xl pb-2">purchase monthly membership</h3>
            <hr />
            <p className="">order summary</p>
            <hr />
            <div>
            <strong className="flex  justify-between pr-4 pt-2">total <p>${price}/month</p></strong>
            </div>
            <br />
            <strong >Billing Name</strong><br />
            <p type="text" className="border-2 border-slate-200-400 w-full p-2">
                {user?.displayName}
            </p><br />
            <strong >Billing Email</strong><br />
            <p type="text" className="border-2 border-slate-200-400 w-full p-2">
                {user?.email}
            </p><br />
            <strong >Billing id</strong><br />
            <p type="text" className="border-2 border-slate-200-400 w-full p-2">
                {_id}
            </p>
            <strong>Payment Details</strong>
            {/* stripe payment mehode  */}

                <div className="text-center space-y-4">
                    <p className="font-semibold">secure payments with <Link className="text-blue-600" target="_blank"  to={'https://stripe.com/'}>stripe</Link></p>
                    <p>By providing your payment details, you authorise us to send instructions to the financial institution that issued your card to take payments from your card account.</p>
                </div>
            <MyButton toLink={''} label={'purchase'}/>
           </div>
        </div>
    );
};

export default ChackOut;
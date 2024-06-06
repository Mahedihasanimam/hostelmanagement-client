import MyButton from "../../../components/MyButton";


const MemberCard = ({item}) => {
    const {name,price,subtitle,features,_id}=item
    return (
        <div>
            <div
              className="flex  mb-8 sm:px-4 lg:mb-0"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 ">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">{name}</h4>
                  <span className="text-6xl font-bold">
                    ${price}
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                </div>
                <p className="leading-relaxed ">
               {subtitle}
                </p>
                <ul className="space-y-2 ">
                    {
                        features.map((i,index)=><li key={index} className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{i}</span>
                      </li>)
                    }
                  
                 
                </ul>
                <MyButton toLink={`/chackout/${_id}`} withclass={"w-full"} label={"Checkout"} />
              </div>
            </div>
        </div>
    );
};

export default MemberCard;
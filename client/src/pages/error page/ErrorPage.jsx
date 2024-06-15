import errorimg from "../../assets/404-error-dribbble-800x600.gif"
import MyButton from "../../components/MyButton";

const ErrorPage = () => {
    return (
        <div>
            <div >
                <img className="w-fit mx-auto" src={errorimg} alt="" />
               <div className="text-center">
               <h3 className="text-4xl font-bold">oops! page not found</h3>
               <MyButton toLink={'/'} label={'Back to home'}/>
               </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;
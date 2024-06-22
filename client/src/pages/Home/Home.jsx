
import Carocel from "./Carocel";
import MealByCategory from "./MealsByCategory/MealByCategory";
import FeedBack from "./feedback/FeedBack";
import MemberShip from "./membership/MemberShip";
import Reviews from "./reviews/Reviews";



const Home = () => {
    return (
        <div className="font-poppins">
            <Carocel/>
            <MealByCategory/>
            <MemberShip/>
            <Reviews/>
            <FeedBack/>
        </div>
    );
};

export default Home;
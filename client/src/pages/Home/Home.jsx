
import Carocel from "./Carocel";
import MealByCategory from "./MealsByCategory/MealByCategory";
import MemberShip from "./membership/MemberShip";
import Reviews from "./reviews/Reviews";



const Home = () => {
    return (
        <div className="">
            <Carocel/>
            <MealByCategory/>
            <MemberShip/>
            <Reviews/>
        </div>
    );
};

export default Home;
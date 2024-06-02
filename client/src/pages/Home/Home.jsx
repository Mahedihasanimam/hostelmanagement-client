
import Carocel from "./Carocel";
import MealByCategory from "./MealsByCategory/MealByCategory";
import MemberShip from "./membership/MemberShip";



const Home = () => {
    return (
        <div className="">
            <Carocel/>
            <MealByCategory/>
            <MemberShip/>
        </div>
    );
};

export default Home;
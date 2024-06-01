
import MealCard from './MealCard';

const TapCard = ({category}) => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
           {
            category.map(item=><MealCard item={item} key={item._id}/>)
            }
           </div>
        </div>
    );
};

export default TapCard;
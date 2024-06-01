
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import UseCard from "../../../hooks/UseCard";

import TapCard from "./TapCard";

const MealByCategory = () => {
 
  const [card,isLoading]=UseCard()
const breakfast=card.filter(item=>item.category==='breakfast')
const lunch=card.filter(item=>item.category==='lunch')
const dinner=card.filter(item=>item.category==='dinner')
const allMeals=card.filter(item=>item.category==='allMeals')

console.log(card);

  return (
    <div className="my-8 px-4">
      <div className="lg:w-1/2 mx-auto text-center my-6 space-y-2">
      <h1 className="text-4xl font-bold text-center">Meal by category</h1>
      <p>Meals by Category" offers diverse options like Breakfast, Lunch, and Dinner. Each category features delicious meals with detailed descriptions!</p>
      </div>
      <Tabs >
        <div className="w-fit mx-auto ">
        <TabList>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
          <Tab>All Meals</Tab>
        </TabList>
        </div>
      <div className="container mx-auto">
      <TabPanel>
           <TapCard category={breakfast}/>
        </TabPanel>
        <TabPanel>
            <TapCard category={lunch}/>
        </TabPanel>
        <TabPanel>
        <TapCard category={dinner}/>
        </TabPanel>
        <TabPanel>
        <TapCard category={allMeals}/>
        </TabPanel>
      </div>
      </Tabs>
    </div>
  );
};

export default MealByCategory;

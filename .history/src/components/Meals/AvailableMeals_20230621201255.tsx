import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Trà sữa Socola",
    img:'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Chocolate-2.png',
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Trà sữa 2",
    img:'https://gongcha.com.vn/wp-content/uploads/2022/11/Mint-Chocolate-Milk-Tea-w-Pearl-Iced.png',
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",    
    name: "Đào Sữa Hoàng Kim",
    img:'https://gongcha.com.vn/wp-content/uploads/2023/05/Tra-sua-Thach-Dao.png',
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",    
    name: "Trà sữa dâu tây",
    img:'https://gongcha.com.vn/wp-content/uploads/2023/02/Tra-Xanh-Sua-Dau.png',
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",    
    name: "Trà Sữa Trân Châu Hoàng Kim",
    img:'https://gongcha.com.vn/wp-content/uploads/2022/06/Tra-sua-tran-chau-HK.png',
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m6",    
    name: "Trà sữa 2",
    img:'',
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m7",    
    name: "Trà sữa 2",
    img:'',
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m8",    
    name: "Trà sữa 2",
    img:'',
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;

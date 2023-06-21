import { useAppDispatch } from "../../../app/hooks";
import { addMeal } from "../../../app/mealSlice";
import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const MealItem = (props: any) => {
  const dispatch = useAppDispatch();
  const meal = props.item;
  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    const newMeal = {
      ...meal,
      amount: amount
    };
    dispatch(addMeal(newMeal));
  }

  return (
    <li className={classes.meal}>
      <div style={{display:'flex'}}>
        <img src="https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Oolong-3J-2.png" style={{width:80,height:80}}/>
        <div>
          <h3>{meal.name}</h3>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div><MealItemForm onAddToCart={addToCartHandler}/></div>
    </li>
  );
};

export default MealItem;

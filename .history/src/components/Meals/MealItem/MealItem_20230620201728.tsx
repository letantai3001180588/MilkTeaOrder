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
      <div>
        <img src="https://free.vector6.com/wp-content/uploads/2021/03/freepng1205-tra-sua-nuoc-giai-khat-do-uong-png-hinh-tach-nen-28.png" style={{width:50,height:50}}/>
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

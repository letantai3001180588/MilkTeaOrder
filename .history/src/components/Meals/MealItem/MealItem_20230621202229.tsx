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
      <div style={{width:100+'%',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <img src={meal.img} style={{width:140,height:140}}/>
        <div>
          <h3>{meal.name}</h3>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{price}</div>
        </div>

          <MealItemForm onAddToCart={addToCartHandler}/>
        <div>
        </div>
      </div>
    </li>
  );
};

export default MealItem;

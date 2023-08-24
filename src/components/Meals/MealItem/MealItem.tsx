import { useAppDispatch } from "../../../app/hooks";
import { addMeal } from "../../../app/mealSlice";
import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const MealItem = (props: any) => {
  const dispatch = useAppDispatch();
  const meal = props.item;

  const addToCartHandler = (amount: number) => {
    const newMeal = {
      ...meal,
      amount: amount
    };
    dispatch(addMeal(newMeal));
  }

  return (
    <li className={classes.meal}>
      <div style={{width:100+'%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{width:100+'%',display:'flex',alignItems:'center'}}>
          <img src={'http://localhost:8000'+meal.image} style={{width:10+'rem',height:10+'rem'}}/>
          
          <div>
            <h3>{meal.name}</h3>
            <div className={classes.description}>{meal.description}</div>
            <div className={classes.price}>{meal.price} đ</div>
          </div>
        </div>

        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;

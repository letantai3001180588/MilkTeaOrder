import CartIcon from "../Cart/CartIcon";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.scss";

const HeaderCartButton = (props: any) => {
  const [itemAdded, setItemAdded] = useState(false);

  const meals = useAppSelector((state) => state.meals.meals);
  const cartMealsCount = meals.reduce((currrentNumber, item) => {
    return currrentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${itemAdded && classes.bump}`;

  useEffect(() => {
    setItemAdded(true);
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [meals]);

  return (
    <div style={{display:'inline-block',marginRight:20}}>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
          <span className={classes.badge}>{cartMealsCount}</span>
        </span>
      </button>

    </div>
  );
};

export default HeaderCartButton;

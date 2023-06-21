import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import mealsImage from "../../assets/img/meals.jpg";

const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]} style={{marginTop:100}}>
        <img src='https://printgo.vn/uploads/media/792227/banner-quang-cao-tra-sua-7_1623309814.png' alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import mealsImage from "../../assets/img/meals.jpg";

const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src="https://free.vector6.com/wp-content/uploads/2020/03/PNG-ly-tra-sua.jpg" style={{width:30,height:30}}/>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]} style={{marginTop:80}}>
        <img src='https://media.licdn.com/dms/image/C5112AQG_O5ZDHRGffw/article-cover_image-shrink_600_2000/0/1520220680019?e=2147483647&v=beta&t=AwiO8h3AZosdBPC5vLgsLZmupFLUkyZEYsAKuNIPzu8' alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

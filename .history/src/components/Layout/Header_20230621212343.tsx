import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import logo from "../../assets/img/logo.png";

const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div style={{display:'flex'}}>
          <img src={logo} style={{width:60,height:90,margin:'auto',marginRight:10}}/>
          <h1>Trà Sữa</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]} style={{marginTop:80}}>
        <img src='https://media.licdn.com/dms/image/C5112AQG_O5ZDHRGffw/article-cover_image-shrink_600_2000/0/1520220680019?e=2147483647&v=beta&t=AwiO8h3AZosdBPC5vLgsLZmupFLUkyZEYsAKuNIPzu8' alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

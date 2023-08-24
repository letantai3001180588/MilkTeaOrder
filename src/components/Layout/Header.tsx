import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import HeaderLoginButton from "./HeaderLoginButton";

const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div style={{display:'flex'}}>
          <img src={logo} style={{width:60,height:70,margin:'auto',marginRight:10,backgroundSize:'cover'}}/>
          <h1>Trà Sữa</h1>
        </div>
        <div>
          <HeaderCartButton onClick={props.onShowCart} />
          <HeaderLoginButton onClick={props.onShowLogin} />

        </div>
      </header>
      <div className={classes["main-image"]} style={{marginTop:80}}>
        <img src='https://media.licdn.com/dms/image/C5112AQG_O5ZDHRGffw/article-cover_image-shrink_600_2000/0/1520220680019?e=2147483647&v=beta&t=AwiO8h3AZosdBPC5vLgsLZmupFLUkyZEYsAKuNIPzu8' alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

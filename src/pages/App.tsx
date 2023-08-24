import { Fragment, useState } from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Login from "../components/Login/Login";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showLoginHandler = () => {
    setShowLogin(true);
  };

  const hideLoginHandler = () => {
    setShowLogin(false);
  };

  return (
    <Fragment>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      {showLogin && <Login onHideLogin={hideLoginHandler}/>}
      <Header onShowCart={showCartHandler} onShowLogin={showLoginHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;

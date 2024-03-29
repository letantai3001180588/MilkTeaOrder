import classes from "./CartItem.module.scss";

const CartItem = (props: any) => {
  const item = props.item;

  return (
    <li className={classes["cart-item"]}>
      <div style={{display:'flex',alignContent:'center'}}>
        <img src={'https://milk-tea-shop-be.onrender.com'+item.image} style={{width:5+'rem',height:5+'rem'}}/>
        <div>
          <h2>{item.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{item.price} đ</span>
            <span className={classes.amount}>x {item.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

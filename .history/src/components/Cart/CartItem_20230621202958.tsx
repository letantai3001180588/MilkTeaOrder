import classes from "./CartItem.module.scss";

const CartItem = (props: any) => {
  const item = props.item;
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div style={{display:'flex'}}>
        <img src={item.img} style={{width:10+'rem',height:10+'rem'}}/>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
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

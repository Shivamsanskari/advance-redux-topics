import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

  const itemQuantity = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch();
  
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle()); 
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;

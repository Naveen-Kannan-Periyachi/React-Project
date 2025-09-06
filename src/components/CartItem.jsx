import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice'
import './CartItem.css'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id))
  }

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id))
  }

  const handleRemove = () => {
    dispatch(removeFromCart(item.id))
  }

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <p className="unit-cost">Unit Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="item-controls">
        <div className="quantity-controls">
          <button 
            className="quantity-btn decrease" 
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            className="quantity-btn increase" 
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <p className="total-cost">${item.totalPrice.toFixed(2)}</p>
        <button className="delete-btn" onClick={handleRemove}>
          🗑️ Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem

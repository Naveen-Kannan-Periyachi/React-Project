import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart)

  const handleCheckout = () => {
    alert('Coming Soon! 🌱')
  }

  if (items.length === 0) {
    return (
      <div className="shopping-cart empty">
        <div className="cart-container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Discover our beautiful plants and add them to your cart!</p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="shopping-cart">
      <div className="cart-container">
        <header className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{totalQuantity} item{totalQuantity !== 1 ? 's' : ''} in your cart</p>
        </header>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Total Items:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="summary-line total">
                <span>Total Amount:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <Link to="/products" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart

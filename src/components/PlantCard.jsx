import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import './PlantCard.css'

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  
  // Check if this plant is already in the cart
  const isInCart = cartItems.some(item => item.id === plant.id)

  const handleAddToCart = () => {
    dispatch(addToCart(plant))
  }

  return (
    <div className="plant-card">
      <div className="plant-image">
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.price}</span>
          <button 
            className={`add-to-cart-btn ${isInCart ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard

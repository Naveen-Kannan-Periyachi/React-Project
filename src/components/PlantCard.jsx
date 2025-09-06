import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import './PlantCard.css'

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  
  // Check if this plant is already in the cart
  const isInCart = cartItems.some(item => item.id === plant.id)

  const handleAddToCart = () => {
    dispatch(addToCart(plant))
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  // Fallback image URL for when images fail to load
  const fallbackImage = 'https://via.placeholder.com/400x400/4a7c59/ffffff?text=🌱'

  return (
    <div className="plant-card">
      <div className="plant-image">
        {imageLoading && (
          <div className="image-loading">
            <div className="loading-placeholder">🌱</div>
          </div>
        )}
        <img 
          src={imageError ? fallbackImage : plant.image} 
          alt={plant.name}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
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

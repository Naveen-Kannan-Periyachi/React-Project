import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Discover the beauty of nature with our premium collection of house plants. 
             Transform your living space into a green paradise with our carefully curated selection 
             of aromatic and medicinal plants.</p>
          <Link to="/products" className="cta-button">
            Explore Our Plants
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" 
            alt="Beautiful garden plants" 
          />
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">🌿</div>
            <h3>Premium Quality</h3>
            <p>Handpicked, healthy plants that will thrive in your home environment.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Quick and safe delivery to ensure your plants arrive in perfect condition.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💚</div>
            <h3>Expert Care Tips</h3>
            <p>Detailed care instructions and ongoing support for all your plants.</p>
          </div>
        </div>
      </section>

      <section className="categories-preview">
        <div className="categories-container">
          <h2>Our Plant Categories</h2>
          <div className="category-cards">
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=300&h=200&fit=crop" 
                alt="Aromatic plants" 
              />
              <h3>Aromatic Plants</h3>
              <p>Fill your home with natural fragrances from our selection of aromatic herbs and flowers.</p>
            </div>
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1509423350716-97f2360af867?w=300&h=200&fit=crop" 
                alt="Medicinal plants" 
              />
              <h3>Medicinal Plants</h3>
              <p>Discover the healing power of nature with our collection of therapeutic plants.</p>
            </div>
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=200&fit=crop" 
                alt="Decorative plants" 
              />
              <h3>Decorative Plants</h3>
              <p>Beautiful houseplants that add style and elegance to any living space.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

import { plantsData } from '../data/plantsData'
import PlantCard from './PlantCard'
import './ProductListing.css'

const ProductListing = () => {
  return (
    <div className="product-listing">
      <div className="product-container">
        <header className="product-header">
          <h1>Our Plant Collection</h1>
          <p>Discover our carefully curated selection of beautiful house plants</p>
        </header>

        <section className="plant-section">
          <h2 className="section-title">🌸 Aromatic Plants</h2>
          <p className="section-description">
            Fill your home with natural fragrances from our selection of aromatic herbs and flowers.
          </p>
          <div className="plants-grid">
            {plantsData.aromatic.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        <section className="plant-section">
          <h2 className="section-title">🌿 Medicinal Plants</h2>
          <p className="section-description">
            Discover the healing power of nature with our collection of therapeutic plants.
          </p>
          <div className="plants-grid">
            {plantsData.medicinal.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        <section className="plant-section">
          <h2 className="section-title">🪴 Decorative Plants</h2>
          <p className="section-description">
            Beautiful houseplants that add style and elegance to any living space.
          </p>
          <div className="plants-grid">
            {plantsData.decorative.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductListing

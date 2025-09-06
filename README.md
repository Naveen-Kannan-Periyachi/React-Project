# Paradise Nursery - House Plants Shopping Cart

A modern, responsive React application for an online plant shop built with Vite, Redux Toolkit, and React Router. This project implements a complete e-commerce shopping cart experience for purchasing house plants.

## 🌿 Features

### Core Functionality

- **Landing Page**: Welcome page with call-to-action button linking to products
- **Navigation Bar**: Sticky navigation with cart quantity indicator
- **Product Listing**: Two categories of plants (Aromatic & Medicinal)
- **Shopping Cart**: Full cart functionality with quantity management
- **Redux State Management**: Centralized state for cart operations

### Plant Categories

1. **🌸 Aromatic Plants**: Lavender, Rosemary, Mint, Eucalyptus, Jasmine
2. **🌿 Medicinal Plants**: Aloe Vera, Echinacea, Chamomile, Ginseng, Turmeric

### Shopping Cart Features

- Add plants to cart with single click
- View cart with plant thumbnails and details
- Increase/decrease quantity with intuitive controls
- Remove items from cart
- Real-time total calculation
- Cart quantity badge in navigation
- Continue shopping and checkout functionality

### UI/UX Features

- Responsive design for all devices
- Modern gradient backgrounds and shadows
- Hover effects and smooth transitions
- Card-based layout for better organization
- Professional green color scheme
- High-quality plant images from Unsplash

## 🚀 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 7
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: CSS3 with Flexbox/Grid
- **Package Manager**: npm

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd paradise-nursery
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Application Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with cart indicator
│   ├── LandingPage.jsx     # Welcome page
│   ├── ProductListing.jsx  # Plants catalog
│   ├── PlantCard.jsx       # Individual plant display
│   ├── ShoppingCart.jsx    # Cart page
│   └── CartItem.jsx        # Cart item component
├── store/
│   ├── store.js           # Redux store configuration
│   └── cartSlice.js       # Cart state management
├── data/
│   └── plantsData.js      # Plant inventory data
└── styles/                # Component CSS files
```

## 🔧 Redux Store Structure

```javascript
{
  cart: {
    items: [],           // Array of cart items
    totalQuantity: 0,    // Total number of items
    totalAmount: 0       // Total price
  }
}
```

## 📋 Cart Actions

- `addToCart(plant)` - Add plant to cart
- `removeFromCart(id)` - Remove plant from cart
- `increaseQuantity(id)` - Increase item quantity
- `decreaseQuantity(id)` - Decrease item quantity

## 🎨 Design Features

- **Color Palette**: Green theme (#2d5a27, #4a7c59)
- **Typography**: Inter font family
- **Layout**: CSS Grid and Flexbox
- **Responsive**: Mobile-first design
- **Animations**: Smooth hover effects and transitions

## 🌐 Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Update base URL in `vite.config.js` if needed

### Alternative Hosting

- Netlify: Drag and drop `dist` folder
- Vercel: Connect GitHub repository
- Surge: `npm install -g surge` then `surge dist`

## 📝 Learning Objectives Achieved

✅ **React Components**: Functional components with composition  
✅ **State Management**: useState and useEffect hooks  
✅ **Redux Integration**: Actions, reducers, and store  
✅ **Dynamic Rendering**: Mapping arrays to components  
✅ **Event Handling**: Button clicks and form interactions  
✅ **Conditional Rendering**: Empty cart states

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:

- Open an issue in the repository
- Check the documentation
- Review the code comments

---

**Paradise Nursery** - Bringing nature to your home, one plant at a time! 🌱+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

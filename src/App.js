import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import "@fontsource/poppins"
import "@fontsource/poppins/600.css";
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;

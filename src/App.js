import './App.css';
import image from './shoppingBag.webp';
import imageTwo from './delivery.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='App'>

    <div className='containerOne'>
    <img src={ image } width="200px" alt='shopping'></img> 
    </div>

  <div className='container'>
    <h1> Grocery List </h1>
  </div>
  <GroceryList />
  <div className='containerTwo'>
    <img src={ imageTwo } width='200px' alt='man'></img>
  </div>
    </div>
  )
}

export default App;

import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import Profile from "./components/Profile";
import Product from "./components/Product";
import "./App.css";
import Recipe from "./components/Recipe";
import Counter from "./components/Counter";
import ClickListener from "./components/ClickListener";
import Log from "./components/Log"
import Die from "./components/Die"
import CounterImproved from "./components/CounterImproved"





function App() {
  return (
    <>
      <Profile 
        name="Quackie Makers"
        job="Makers' favourite rubber duck"
        birthdate="2013"
        birthplace="London"
      />
      <Product
        name="Air Fryer K2000"
        description="The best air fryer to fry all things, even Mars bars"
        price={2000}
      />
      <Recipe
        title="Finnish cinnamon buns"
        type="dessert"
        duration={60}
      />
      <Counter />
      <ClickListener />
      <Log />
      <Die />
      <CounterImproved />
    </>
  );
}

export default App;

import "./menu.css";
import Pizza from "../pizza/Pizza";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price="6"
        photoName="pizzas/focaccia.jpg"
      />

      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price="10"
        photoName="pizzas/margherita.jpg"
      />
    </div>
  );
};

export default Menu;

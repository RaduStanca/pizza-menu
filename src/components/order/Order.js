import "./Order.css";

const Order = (props) => {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00.Come visit us or order online!!
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;

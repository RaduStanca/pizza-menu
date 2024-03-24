import "./Pizza.css";

const Pizza = (props) => {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h2>{props.name}</h2>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default Pizza;

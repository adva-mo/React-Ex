import "./Card.css";
import Link from "./Link";

const Card = (props) => {
  return (
    <div className="card">
      {console.log(props)}
      <image src={props.img}></image>
      <h3>{props.title}</h3>
      <p>{props.des}</p>
      <a href={props.a1}>a1</a>
      <a href={props.a2}>a2</a>
      {/* <Link link1={links[0][1]} lin/k2={links[0][2]}></Link> */}
    </div>
  );
};
export default Card;

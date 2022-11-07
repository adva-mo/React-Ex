import "./Link.css";

const Link = (props) => {
  return (
    <div>
      <link src={props.link1}>{props.value1}</link>
      <link src={props.link2}>{props.value2}</link>
    </div>
  );
};
export default Link;

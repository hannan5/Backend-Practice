import { Color } from "../constants/Color";
const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.theme ? Color.mainColor : "#fff",
        width: "100%",
        height: "100%",
        border: "none",
        color: props.theme ? "#fff" : Color.mainColor,
        fontSize: "18px",
        border: props.theme ? "" : "1px solid #fbfbfb",
        borderRadius:props.theme?1:10,

      }}
    >
      {props.name}
    </button>
  );
};
export default Button;

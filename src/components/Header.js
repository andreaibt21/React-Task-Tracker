import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

// const Header = (props) => {
//     return (
//        <header>
//            <h1>{props.title}</h1>

//        </header>
//     )
// }
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      {/* <h1 style={{color: 'blue'}}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
//COmo agregar css a una etiqueta
// const headingStyle = {
//     color: 'blue',
// }

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;

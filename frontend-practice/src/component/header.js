import { fontstyles } from "../constants/FontStyle";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_left">
          <p style={fontstyles.heading}>Categories</p>
          <p style={fontstyles.heading}>Dashboard</p>
          <p style={fontstyles.heading}>Product</p>
        </div>
        <div className="header_right">
          <p style={fontstyles.heading}>Cart</p>
          <p style={fontstyles.heading}>Profile</p>
          <p style={fontstyles.heading}>Logout</p>
        </div>
      </div>
    </>
  );
};
export default Header;

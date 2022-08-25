import { fontstyles } from "../constants/FontStyle";
import Button from "./button";

const Banner = () =>{
    return(
        <>
        <div className="banner">
            <h2 style={fontstyles.MainHeading}>Branded & imported items</h2>
            <h5 style={fontstyles.BigHeading}>Easiest and cheapest way to get your branded & imported makeups</h5>
            <div className="mainsearch">
            <div className="searchBox">
                <input placeholder="Search your Products from here"/>
                <div className='button'>
                    <Button name='Search' theme={true}/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Banner;
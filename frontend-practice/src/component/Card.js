import card_sample from '../assest/images/sample.jpg'
import { Color } from '../constants/Color'
import { fontstyles } from '../constants/FontStyle'
import Button from './button'
const Card = () =>{
    return(
        <>
        <div className='main_card'>
            <div style={{height:'250px',textAlign:'center'}}>
            <img src={card_sample} style={{height:'100%',objectFit:'cover'}}/>
            </div>
            <div className='main_card_content' >
                <h3 style={fontstyles.BigHeading}>Absolute Plus Meat Dental Set</h3>
                <p style={fontstyles.heading}>1 pc(s)</p>
            </div>
            <div className='card_bottom'>
                <div style={{width:'50%'}}>
                <p style={fontstyles.heading}>100Rs</p>
                </div>
                <div style={{width:'30%'}}>
                <button>Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card
import Banner from "../component/banner";
import Card from "../component/Card";
import Header from "../component/header";
import { fontstyles } from "../constants/FontStyle";
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import { GetProducts } from "../NetworkCalls/Get";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [allProduct, setallproduct] = useState([])
  useEffect(()=>{
    GetProducts()
    .then((res)=>{console.log(res);setallproduct(res.data.res)})
    .catch((e)=>console.log(e))
  },[])
// console.log(allProduct)
  return (
    <>
      <Header />
      <Banner />
      <div className="main_container">
        <div className='filter_container'>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
            <div className="filter-item">
            <p style={fontstyles.BigHeading}>Electronics</p>
            <IoIosArrowDropdownCircle class='filter-item-icon'/>
            </div>
        </div>
        <div className="product_container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};
export default Dashboard;

import Banner from "../component/banner"
import Card from "../component/Card"
import Header from "../component/header"

const Dashboard = () =>{
    return(
        <>
        <Header/>
        <Banner/>
        <div className='product_container'>
            <Card/>
        </div>
        </>
    )
}
export default Dashboard
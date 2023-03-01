import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Card from "../../components/Card/card";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets"> */}
        <div className="btnflex">
          <button className="btn" variant="contained">Filter By</button>
          <Link to="/tmq" style={{ textDecoration: "none" }}>
            <button className="btn2" variant="contained">TMQ</button>
          </Link>
        </div>

        {/* </div> */}
        <div>
          <Card />
        </div>

        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          

        </div>  */}
        <div className="listContainer">
          <div className="listTitle">Active Orders</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;

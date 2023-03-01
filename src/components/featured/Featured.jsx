import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Widget from "../widget/Widget";
import BasicCard from "../Card/card";

const Featured = () => {
  return (
    <>
    <div className="featured">
      {/* <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="smallBox ">
<BasicCard/>
        <BasicCard />
        <BasicCard />
        {/* <Widget type="user" />
        <Widget type="user" />
        <Widget type="user" />
        <Widget type="user" />   <br /> */}
{/*       
        <Widget type="user" />
        <Widget type="user" />
        <Widget type="user" />
        <Widget type="user" /> */}
        </div>
        <div className="nextsmallBox">
          <BasicCard  style={{padding:"10px"}}/>
          <BasicCard />
          <BasicCard />
        </div>
     
    </div>
     
    </>
  );
};

export default Featured;

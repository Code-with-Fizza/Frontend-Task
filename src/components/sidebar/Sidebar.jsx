import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import logo from "../../images/shopping-basket.png"
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo1" src={logo} alt="" /><br/>
          <span className="logo">Baskyt</span>
         
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
   <Link to="/" style={{ textDecoration: "none" }}>
          <li>
          
              <HomeIcon className="icon" />

          </li>
           </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />

            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />

            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />

          </li>
          <li>
            <LocalShippingIcon className="icon" />

          </li>

          <li>
            <InsertChartIcon className="icon" />

          </li>
          <li>
            <NotificationsNoneIcon className="icon" />

          </li>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />

          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />

          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />

          </li>

          <li>
            <AccountCircleOutlinedIcon className="icon" />

          </li>
          <li>
            <ExitToAppIcon className="icon" />

          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;

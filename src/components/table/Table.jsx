import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import good from "../../images/good.PNG"
import bad from "../../images/bad.PNG"
import ok from "../../images/ok.PNG"
import venimg from "../../images/venimg.PNG"


const List = () => {
  const rows = [
    {
      id: 1143155,
      order:"25602",
      zipCode:"23456",
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      time:"3:12 PM",
      amount: "$785",
      performance: { ok },
      venfor: { venimg },
      rider:"Iqbal butt",
      method: "Cash on Delivery",
      status: "squad",
    },
    {
      id: 2235235,
      order: "25603",
      zipCode: "40066",
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      time: "4:17 PM",
      amount: "$900",
      rider:"Rasheed Khan",
      performance:{good},
      venfor:{venimg},
      method: "Online Payment",
      status: "Normal",
    },
    {
      id: 2342353,
      order: "25604",
      zipCode: "45555",
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      time: "5:12 PM",
      amount: "$35",
      performance: { bad },
      venfor: { venimg },
      rider:"Saad Ali",
      method: "Cash on Delivery",
      status: "Normal",
    },
    {
      id: 2357741,
      order: "25605",
      zipCode: "60006",
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      time: "8:12 PM",
      amount: "$920",
      performance: { good },
      venfor: { venimg },
      method: "Online",
      rider:"Christain",
      status: "squad",
    },
    {
      id: 2342355,
      order: "25606",
      zipCode: "30002",
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      time: "7:12 PM",
      amount: "$2000",
      performance: { ok },
      vendor: { venimg },
      rider:"Alex",
      method: "Online",
      status: "Normal",
    },
    {
      id: 2342355,
      order: "25607",
      zipCode: "30002",
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      time: "7:12 PM",
      amount: "$2000",
      performance: { ok },
      vendor: { venimg },
      rider: "Alex",
      method: "Online",
      status: "squad",
    },
    {
      id: 2342355,
      order: "25609",
      zipCode: "30002",
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      time: "7:12 PM",
      amount: "$2000",
      performance: { ok },
      vendor: { venimg },
      rider: "Alex",
      method: "Online",
      status: "Normal",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Type <i className="fa-solid fa-arrow-up"></i> 
            <i className="fa-solid fa-arrow-down"></i>
            </TableCell>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Order<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Customer<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Zip code<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Order Time<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
            <TableCell className="tableCell" style={{color:"red",fontWeight:"bold"}}>Vendors<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Rider<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Order Amount<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
            <TableCell className="tableCell" style={{ color: "red", fontWeight: "bold" }}>Performance<i className="fa-solid fa-arrow-up"></i>
              <i className="fa-solid fa-arrow-down"></i></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.order}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.customer}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.zipCode}</TableCell>
              <TableCell className="tableCell">{row.time}</TableCell>
              <TableCell className="tableCell"><img src={venimg} alt=""/></TableCell>
              <TableCell className="tableCell">{row.rider}</TableCell>
              <TableCell className="btnorder">{row.amount}</TableCell>
            
              {/* <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
              <TableCell className="tableCell"><img src={good} alt="" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

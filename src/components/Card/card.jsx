import React from 'react'
import customer from "../../images/customerImage.png"
import starlogo from "../../images/starLogo.png"
import customerimage from "../../images/customerImage.png"
import avg1 from "../../images/avg1.PNG"
import avg2 from "../../images/avg2.PNG"
import customer1 from "../../images/customer.PNG"
import delivery from "../../images/delivery.PNG"
import orders from "../../images/orders.PNG"
import users from "../../images/users.PNG"
import revenu from "../../images/revenu.PNG"
import "../../style/style.css"
import Linechart from '../chart/Linechart'

const Card = () => {
  return (
    <>
      <div className="d-flex m-3">
        <div className="col-6">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="card text-center row-2 box-border ">
                <div className="card-body">
                  <span>
                    <img src={customer1} alt =""/>
                  </span>
                  {/* <p className="card-text title-font">Customer</p> */}
                  <span>12345</span>
                </div>
              </div>
              <div className="card text-center row-2  box-border">
                <div className="card-body">
                  <span>
                    <img src={orders} alt="" />
                  </span>
                  {/* <p className="card-text title-font">Customer</p> */}
                  <span>12345</span>
                </div>
              </div>
              <div className="card text-center row-2  box-border">
                <div className="card-body">
                  <span>
                    <img src={delivery} alt="" />
                  </span>
                  {/* <p className="card-text title-font">Customer</p> */}
                  <span>12345</span>
                </div>
              </div>
              <div className="card text-center row-2  box-border">
                <div className="card-body">
                  <span>
                    <img src={users} alt="" />
                  </span>
                  {/* <p className="card-text title-font">Customer</p> */}
                  <span>12345</span>
                </div>
              </div>
              {/* <div className="card text-center row-2  box-border">
                <div className="card-body">
                  <span>
                    <img src={revenu} alt="" />
                  </span>
                 
                  <span>12345</span>
                </div>
              </div> */}
            </div>
            {/* <div>

            </div> */}
          </div>
          <div classNames="col-12 pt-4">
            <div className="d-flex justify-content-between">
              <div className="card text-center row-2  box-border mt-3">
                <div className="card-body">
                  <span>
                    <img src={revenu} alt="" />
                  </span>
                  {/* <p className="card-text title-font">Customer</p> */}
                  <span>12345</span>
                </div>
              </div>
              <div className="card text-center row-2 box-border mt-3">
                <div className="card-body">
                  <span>
                    <img src={starlogo} alt="" />
                  </span>
                  {/* <p className="card-text title-font">Customer</p> */}
                  <span>12345</span>
                </div>
              </div>
              <div className="card text-center row-2  box-border mt-3">
                <div className="card-body">
                  <span>
                    <img src={avg1} alt="" />
                  </span>
                  
                  <span>12345</span>
                </div>
              </div>
              <div className="card text-center row-2  box-border mt-3">
                <div className="card-body">
                  <span>
                    <img src={avg2} alt="" />
                  </span>
                 
                  <span>12345</span>
                </div>
              </div>
              {/* <div className="card text-center row-2  box-border mt-3 ">
                <div className="card-body">
                  <span>
                    <img src={starlogo} alt="" />
                  </span>
                  <p className="card-text title-font">Customer</p>
                  <span>12345</span>
                </div>
              </div>
              <div className="card text-center row-2  box-border mt-3">
                <div className="card-body">
                  <span>
                    <img src={starlogo} alt="" />
                  </span>
                  <p className="card-text title-font">Customer</p>
                  <span>12345</span>
                </div>
              </div> */}
            </div>
            <div>

            </div>
          </div>
        </div>
        <div class="col-6  box-border">
          <Linechart/>
        </div>
      </div>
      <div className="d-flex justify-content-evenly col-12 ">
        <div className="col-4 box-border rounded  mt-3" style={{ paddingright: "0px!important", paddingleft: "0px!important" }}>
          <div className="d-flex align-items-center justify-content-center top-customer-style">
            <span>
              Top Customer
            </span>
          </div>
          <div className="mx-4">
            <div className="d-flex mt-2 justify-content-between">
              <div>
               
                <img src={customerimage} alt="" />
              </div>
              <div className="d-flex align-items-center pr-5">
                <span>
                  Christina<br/>Ambrosia
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span className="credit-font-size mx-4">$49,137</span>
              </div>
            </div>
            <div className="d-flex justify-content-between card-label-font my-3">
              <div>
                <div>
                  <span>REVENUE / MONTH</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="card-text-body-font">$ 13469.80</span>
                  <div>
                    <i className="fa-solid fa-arrow-up"></i>12%
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>PROCESSED ORDERS / MONTH</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="card-text-body-font">182</span>
                  <div>
                    <i className="fa-solid fa-arrow-down"></i>8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 box-border rounded mt-3" style={{ paddingright: "0px!important", paddingleft: "0px!important" }}>
          <div className="d-flex align-items-center justify-content-center top-customer-style">
            <span>
              Top Customer
            </span>
          </div>
          <div className="mx-4">
            <div className="d-flex mt-2 justify-content-between">
              <div>
                <img src={customerimage} alt="" />
              </div>
              <div className="d-flex align-items-center pr-5">
                <span>
                  Christina<br/>Ambrosia
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span className="credit-font-size mx-4">$49,137</span>
              </div>
            </div>
            <div className="d-flex justify-content-between card-label-font my-3">
              <div>
                <div>
                  <span>REVENUE / MONTH</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="card-text-body-font">$ 13469.80</span>
                  <div>
                    <i className="fa-solid fa-arrow-up"></i>12%
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>PROCESSED ORDERS / MONTH</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="card-text-body-font">182</span>
                  <div>
                    <i className="fa-solid fa-arrow-down"></i>8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 box-border rounded mt-3" style={{paddingright: "0px!important",paddingleft: "0px!important"}}>
          <div class="d-flex align-items-center justify-content-center top-customer-style">
            <span>
              Top Customer
            </span>
          </div>
          <div class="mx-4">
            <div class="d-flex mt-2 justify-content-between">
              <div>
                <img src={customerimage} alt="" />
              </div>
              <div class="d-flex align-items-center pr-5">
                <span>
                  Christina<br/>Ambrosia
                </span>
              </div>
              <div class="d-flex align-items-center">
                <span class="credit-font-size mx-4">$49,137</span>
              </div>
            </div>
            <div class="d-flex justify-content-between card-label-font my-3">
              <div>
                <div>
                  <span>REVENUE / MONTH</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="card-text-body-font">$ 13469.80</span>
                  <div>
                    <i class="fa-solid fa-arrow-up"></i>12%
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>PROCESSED ORDERS / MONTH</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="card-text-body-font">182</span>
                  <div>
                    <i class="fa-solid fa-arrow-down"></i>8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
import React from 'react'
import "./style.css";
import orderAccp from "../../images/orderAccp.PNG"
import deliveryorder from "../../images/deliveryorder.PNG"
import clearpay from "../../images/clearpay.PNG"
import totalquality from "../../images/totalquality.PNG"
import ReachingVendor from "../../images/ReachingVendor.PNG"
const TmqCard = () => {
  return (
    <>
          {/* <!-------------------------------------- 2nd page html--------------------------------------------------> */}

          <div class="mx-4">
              <div class="d-flex justify-content-between">
                  <div class="mx-auto">
                      <button class="quality-btn-bg-font">Quality</button>
                      <button class="performance-btn-bg-font">Performance</button>
                  </div>
                  <div class="d-flex align-items-center">
                      <button class="btn btn-dark rounded-pill" style={{ width: "48px", height: "48px" }} >
                          <i class="fas fa-edit text-white"></i>
                      </button>
                  </div>
              </div>
              <div class="d-flex justify-content-end">
                  <div class="d-flex align-items-center">
                       <i class="far fa-calendar-alt text-white"></i>
                      <button class="btn btn-dark d-flex justify-content-center align-items-center" style={{width: "32px", height: "32px"}} data-toggle="datepicker">
                          <i class="far fa-calendar-alt text-white"></i>
                      </button>
                  </div>
                  <div>
                      <div class="ml-3 input-group">
                          <input type="text" class="form-control" placeholder="Search..."/>
                              <div class="input-group-append">
                                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="title-label-font">
                  <span>Company Insights</span>
              </div>
              <div class="">
                  <div class="col-12 mt-5 d-flex justify-content-between">
                      <div class="card col-4 mr-2 main-card-bg-border">
                          <div class="card-body text-center ">
                              <img src={orderAccp} style={{ width: "221px", height: "100px" }} alt="Logo" />
                                 
                              <h6 style={{ marginTop: "21px", marginRight: "181px", fontSize: "large" }} class="card-subtitle d-flex mb-3 text-muted">85% <i class="fas fa-arrow-down text-danger ml-4"></i>8%</h6>
                              <button class="btn btn-orange rounded" style={{ width: "122px", height: "59px" }}>Phase 1 Goal</button>

                          </div>
                      </div>
                      <div class="card col-4 mx-2 main-card-bg-border">
                          <div class="card-body text-center ">
                              <img src={ReachingVendor} style={{ width: "221px", height: "100px" }} alt="Logo" />
                              
                              <h6 style={{ marginTop: "21px", marginRight: "181px", fontSize: "large" }} class="card-subtitle d-flex mb-3 text-muted" style={{ marginTop: "21px", marginRight: "181px", fontSize:"large" }}>85% <i class="fas fa-arrow-up text-success ml-4"></i>8%</h6>
                              <button class="btn btn-orange rounded" style={{ width: "122px", height: "59px" }}>Phase 1 Goal</button>

                          </div>
                      </div>
                      <div class="card col-4 ml-2 main-card-bg-border">
                          <div class="card-body text-center ">
                              <img src={deliveryorder} style={{width:"221px",height:"100px"}} alt="Logo"/>
                                 
                              <h6 style={{ marginTop: "21px", marginRight: "181px", fontSize: "large" }} class="card-subtitle d-flex mb-3 text-muted">85% <i class="fas fa-arrow-up text-success ml-4"></i>8%</h6>
                              <button class="btn btn-orange rounded" style={{ width: "122px", height: "59px", backgroundColor:"#32b332" }}>Phase 1 Goal</button>

                          </div>
                      </div>

                  </div>
                  <div class="col-12 d-flex mt-5">
                      <div class="card col-4 mr-2 main-card-bg-border">
                          <div class="card-body text-center ">
                              <img src={clearpay} style={{ width: "221px", height: "100px" }} alt="Logo"/>
                                 
                              <h6 style={{ marginTop: "21px", marginRight: "181px", fontSize: "large" }}class="card-subtitle d-flex mb-3 text-muted">85% <i class="fas fa-arrow-down text-danger ml-4"></i>8%</h6>
                              <button class="btn btn-orange rounded" style={{ width: "122px", height: "59px", backgroundColor:"#d73030" }}>Phase 1 Goal</button>

                          </div>
                      </div>
                      <div class="card col-4 mx-2 main-card-bg-border">
                          <div class="card-body text-center ">
                              <img src={totalquality} style={{ width: "221px", height: "100px" }} alt="Logo" />
                              
                              <h6 style={{ marginTop: "21px", marginRight: "181px", fontSize: "large" }} class="card-subtitle d-flex mb-3 text-muted">85% <i class="fas fa-arrow-down text-danger ml-4"></i>8%</h6>
                              <button class="btn btn-orange rounded" style={{ width: "122px",height:"59px" }}>Phase 1 Goal</button>

                          </div>
                      </div>

                  </div>
              </div>
          </div>
    </>
  )
}

export default TmqCard
import React from "react";
// import Layout from "../../../components/Dashboard/Layout";
import config from "../../config";
import Header from "../../components/Home/Head";
import Footer from "../../components/Home/Footer";
import Datetime from "react-datetime";
import generalHelper from '../../Helpers/GeneralHelper'
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-mobile-datepicker";
var moment = require("moment");
import dynamic from "next/dynamic";
import { data } from "jquery";
const OwlCarousel = dynamic(
  () => {
    return import("react-owl-carousel");
  },
  { ssr: false }
);
export default class Login extends React.Component {
  state = {
    time: new Date(),
    isOpen: false,
    min_date: new Date(),
    max_date: new Date(),
    morning:'',
    afternon:'',
    evening:'',
    time_slots:[]
  };
  componentDidMount = () => {
    this.handleLimit();
  };
  handleLimit = () => {
    var today = moment();
    var mindate = moment(today).subtract(1, "days");
    var maxdate = moment(today).add(183, "days");
    this.setState({ min_date: mindate.toDate(), max_date: maxdate.toDate() });
  };
  handleClick = () => {
    this.setState({ isOpen: true });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  handleSelect = (time) => {
    this.setState({ time, isOpen: false });
  };
  handleSelectDate = (time) => {
    let data ={
      path:"service_time_slots/60ab3a33833b3e059d5a9893",
      type:"POST",
      data:{
        date:23231321,
        customer:"60a38c29f1b5b618593e5a4f",
        services_val:"60ab9955ecb7dd0a3a4e2e01"
      }
    }
    generalHelper.Get(data).then((resp)=>{
       let morning=[];
       let afternon=[];
       let evening=[];
      for (let i = 0; i < resp.data.length; i++) {
        const element = resp.data[i];
        if (element.start_time < 27400) {
          console.log(element.start_time);
          morning.push(<li><a  href="#.">{moment(new Date((element.start_time+(new Date().getTimezoneOffset()*60))*1000)).format('LT')}</a></li>)
        }else if (element.start_time < 49000) {
          afternon.push(<li><a  href="#.">{moment(new Date((element.start_time+(new Date().getTimezoneOffset()*60))*1000)).format('LT')}</a></li>)
        }else {
          evening.push(<li><a  href="#.">{moment(new Date((element.start_time+(new Date().getTimezoneOffset()*60))*1000)).format('LT')}</a></li>)
        }
        
      }
      this.setState({morning,afternon,evening})
      console.log(morning)
    })
  };

  renderInput( props, openCalendar, closeCalendar ){
    function clear(){
        props.onChange({target: {value: ''}});
    }
    return (
        <div>
            <input {...props} />
            <button onClick={openCalendar}>open calendar</button>
            <button onClick={closeCalendar}>close calendar</button>
            <button onClick={clear}>clear</button>
        </div>
    );
}

  render() {
    return (
      <>
        <Header />
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered bookingmodal modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Powered by <img src="images/footerlogo.svg" alt="" />
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="bookingmodal_1" style={{ display: " none" }}>
                  <h4>Select Service</h4>
                  <div class="babrerbox">
                    <h1>JD BARBER @jdbarberpr</h1>
                    <p>4279 US Highway 27, Suite H, Clermont, 34711</p>
                    <span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                    </span>
                  </div>
                  <div class="mobileservice">
                    <div class="row">
                      <div class="col-md-6">
                        <h2>Mobile Service</h2>
                        <p>
                          ‼️ Please Read‼️ Effective 1/1/2021 This is a fla...
                        </p>
                      </div>
                      <div class="col-md-6">
                        <div class="bookbtnrow">
                          <div>
                            <div class="purify">
                              <strong>$50.00</strong>
                            </div>
                            <span class="purify_2vd">45min</span>
                          </div>
                          <div class="purify_3kC">
                            <button class="btn btn-info">Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mobileservice">
                    <div class="row">
                      <div class="col-md-6">
                        <h2>Mobile Service</h2>
                        <p>
                          ‼️ Please Read‼️ Effective 1/1/2021 This is a fla...
                        </p>
                      </div>
                      <div class="col-md-6">
                        <div class="bookbtnrow">
                          <div>
                            <div class="purify">
                              <strong>$50.00</strong>
                            </div>
                            <span class="purify_2vd">45min</span>
                          </div>
                          <div class="purify_3kC">
                            <button class="btn btn-info">Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mobileservice">
                    <div class="row">
                      <div class="col-md-6">
                        <h2>Mobile Service</h2>
                        <p>
                          ‼️ Please Read‼️ Effective 1/1/2021 This is a fla...
                        </p>
                      </div>
                      <div class="col-md-6">
                        <div class="bookbtnrow">
                          <div>
                            <div class="purify">
                              <strong>$50.00</strong>
                            </div>
                            <span class="purify_2vd">45min</span>
                          </div>
                          <div class="purify_3kC">
                            <button class="btn btn-info">Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mobileservice">
                    <div class="row">
                      <div class="col-md-6">
                        <h2>Mobile Service</h2>
                        <p>
                          ‼️ Please Read‼️ Effective 1/1/2021 This is a fla...
                        </p>
                      </div>
                      <div class="col-md-6">
                        <div class="bookbtnrow">
                          <div>
                            <div class="purify">
                              <strong>$50.00</strong>
                            </div>
                            <span class="purify_2vd">45min</span>
                          </div>
                          <div class="purify_3kC">
                            <button class="btn btn-info">Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mobileservice">
                    <div class="row">
                      <div class="col-md-6">
                        <h2>Mobile Service</h2>
                        <p>
                          ‼️ Please Read‼️ Effective 1/1/2021 This is a fla...
                        </p>
                      </div>
                      <div class="col-md-6">
                        <div class="bookbtnrow">
                          <div>
                            <div class="purify">
                              <strong>$50.00</strong>
                            </div>
                            <span class="purify_2vd">45min</span>
                          </div>
                          <div class="purify_3kC">
                            <button class="btn btn-info">Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bookingmodal_2">
                  <h4 onClick={this.handleClick}>
                    <i class="fas fa-chevron-left mr-2 float-left"></i> Pick a
                    date & time
                  </h4>
                  <label class="mr-5"  > Select Date </label>
                  <Datetime
                    // id="timepicker"
                    inputProps={{placeholder:'This is placeholder'}}
                    initialValue={new Date(this.state.start_view * 1000)}
                    viewMode="date"
                    dateFormat="YYYY-MM-DD"
                    timeFormat={false}
                    closeOnSelect={true}
                    // renderInput={ this.renderInput }
                    onChange={this.handleSelectDate}
                    // onChange={(time) => {
                    //   var time1 = new Date(time.format()).getTime() / 1000;
                    //   var time2 =
                    //     new Date(time.format("YYYY-MM-DD")).getTime() / 1000;
                    //   let zone = new Date().getTimezoneOffset();

                    //   this.state.start =
                    //     time1 - time2 + Math.sqrt(zone * zone) * 60;
                    //   this.setState({
                    //     start: time1 - time2 + Math.sqrt(zone * zone) * 60,
                    //   });
                    //   this.hendalfielda();
                    // }}
                  />
                  {/* <DatePicker
                    value={this.state.time}
                    isOpen={this.state.isOpen}
                    onSelect={(e) => {
                      console.log(e);
                    }}
                    onCancel={this.handleCancel}
                    theme="ios"
                    min={new Date(this.state.min_date)}
                    max={new Date(this.state.max_date)}
                    confirmText="Submit"
                    cancelText="cancle"
                  /> */}
                  <hr/>
                  <div class="row days">
                    <span class="col">MORNING</span>
                    <span class="col">AFTERNOON</span>
                    <span class="col">EVENING</span>
                  </div>
                  <div class="row days">
                    
                    <div class="col">
                      <ul>
                          {this.state.morning}
                      </ul>
                    </div>
                    <div class="col">
                      <ul>
                        {this.state.afternon}
                      </ul>
                    </div>
                    <div class="col">
                      <ul>
                      {this.state.evening}
                      </ul>
                    </div>
                  </div>
                  <div class="mobileservice pt-4 pb-4 border-0">
                    <div class="closeb">
                      <a href="#.">
                        <i class="fas fa-times"></i>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <h2>Mobile Service</h2>
                        <p>
                          ‼️ Please Read‼️ Effective 1/1/2021 This is a fla...
                        </p>
                      </div>
                      <div class="col-md-6">
                        <div class="bookbtnrow">
                          <div>
                            <div class="purify">
                              <strong>$50.00</strong>
                            </div>
                            <span class="purify_2vd">1:30PM - 3:00PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#." class="btn btn-info btn-block btn-lg">
                    CONFRIME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="maincontent">
          <div class="profile_wrepp">
            <div class="container">
              <div class="row">
                <div class="col-md-8">
                  <div class="catg_slider mb-5">
                    {/* <div class="owl-five owl-carousel owl-theme"> */}
                    <OwlCarousel
                      className="owl-theme "
                      items={1}
                      loop={true}
                      autoplay={true}
                      dots={false}
                      margin={10}
                    >
                      <div class="item">
                        <a href="#.">
                          <div class="ctgsldimg">
                            <img src="/images/fg-05.png" alt="" />
                            <p>
                              5.0 <span>240 Reviews</span>
                            </p>
                            <p class="recomnned">
                              <i
                                class="fas fa-thumbs-up"
                                aria-hidden="true"
                              ></i>{" "}
                              stylicle recommended
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="item">
                        <a href="#.">
                          <div class="ctgsldimg">
                            <img src="/images/fg-05.png" alt="" />
                            <p>
                              5.0 <span>240 Reviews</span>
                            </p>
                            <p class="recomnned">
                              <i
                                class="fas fa-thumbs-up"
                                aria-hidden="true"
                              ></i>{" "}
                              stylicle recommended
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="item">
                        <a href="#.">
                          <div class="ctgsldimg">
                            <img src="/images/fg-05.png" alt="" />
                            <p>
                              5.0 <span>240 Reviews</span>
                            </p>
                            <p class="recomnned">
                              <i
                                class="fas fa-thumbs-up"
                                aria-hidden="true"
                              ></i>{" "}
                              stylicle recommended
                            </p>
                          </div>
                        </a>
                      </div>
                    </OwlCarousel>
                    {/* </div> */}
                  </div>
                  <div class="babrerbox">
                    <h2>
                      <FontAwesomeIcon
                        style={{
                          color: config.primaryColor,
                        }}
                        icon={faCar}
                      />
                      <i class="fas fa-car"></i> Traveling service{" "}
                    </h2>
                    <h1>JD BARBER @jdbarberpr</h1>
                    <p>4279 US Highway 27, Suite H, Clermont, 34711</p>
                    <span>
                      <i class="far fa-heart"></i>
                    </span>
                  </div>
                  <div class="barbersearch">
                    <div class="row">
                      <div class="col-md-6">
                        <h1>Services</h1>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search for services"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="accordion" class="accordion">
                    <div class="mb-0">
                      <div
                        class="card-header"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <a class="card-title">
                          <strong>Haircut and Beard</strong>
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        class="card-body collapse p-0 show"
                        data-parent="#accordion"
                      >
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                      >
                        <a class="card-title">
                          <strong>Haircut and Beard</strong>
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        class="card-body collapse p-0"
                        data-parent="#accordion"
                      >
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                      >
                        <a class="card-title">
                          <strong>Haircut and Beard</strong>
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        class="card-body collapse p-0"
                        data-parent="#accordion"
                      >
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mobileservice">
                          <div class="row">
                            <div class="col-md-6">
                              <h2>Mobile Service</h2>
                              <p>
                                ‼️ Please Read‼️ Effective 1/1/2021 This is a
                                fla...
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="bookbtnrow">
                                <div>
                                  <div class="purify">
                                    <strong>$50.00</strong>
                                  </div>
                                  <span class="purify_2vd">45min</span>
                                </div>
                                <div class="purify_3kC">
                                  <button
                                    class="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="venue_box">
                    <h1>Venue Health and Safety Rules</h1>
                    <ul>
                      <li>
                        <i class="fas fa-shield-alt"></i> Employees wear masks
                      </li>
                      <li>
                        <i class="fas fa-shield-alt"></i> Disinfection of all
                        surfaces in the workplace
                      </li>
                      <li>
                        <i class="fas fa-shield-alt"></i> Disinfection between
                        clients
                      </li>
                      <li>
                        <i class="fas fa-shield-alt"></i> Maintain social
                        distancing
                      </li>
                      <li>
                        <i class="fas fa-shield-alt"></i> Barbicide COVID-19
                        Certified
                      </li>
                      <li>
                        <i class="fas fa-shield-alt"></i> Place to wash hands
                        available
                      </li>
                    </ul>
                  </div>
                  <div class="venue_box">
                    <h1>See Our Work</h1>
                    <div class="row">
                      <div class="col-md-6">
                        <img class="mb-3" src="/images/img.jpeg" alt="" />
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-sm-6">
                            <img class="mb-4" src="/images/img.jpeg" alt="" />
                          </div>
                          <div class="col-sm-6">
                            <img class="mb-4" src="/images/img.jpeg" alt="" />
                          </div>
                          <div class="col-sm-6">
                            <img class="mb-4" src="/images/img.jpeg" alt="" />
                          </div>
                          <div class="col-sm-6">
                            <img class="mb-4" src="/images/img.jpeg" alt="" />
                          </div>
                        </div>
                      </div>
                      <a
                        href="#."
                        class="btn btn-outline-info btn-block btn-lg"
                      >
                        See All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="barberright">
                    <div class="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13606.813007965276!2d74.3235535!3d31.50483955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1623046095247!5m2!1sen!2s"
                        width="100%"
                        height="250"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div class="p-3">
                      <h1>About Us</h1>
                      <p>
                        In convallis eget sapien vel tincidunt. Sed a massa id
                        nunc facilisis viverra. Nam scelerisque lorem venenatis
                        lacus sollicitudin, eget porttitor sem gravida. Aliquam
                        nec neque eu velit faucibus vulputate ut pretium quam.
                        Fusce non ultrices massa.
                      </p>
                    </div>
                    <div class="p-3">
                      <h1 class="border-bottom pb-3">
                        Contact & Business hours
                      </h1>
                      <div class="mobileservice">
                        <div class="row">
                          <div class="col-md-6">
                            <p>
                              <i class="fas fa-mobile-alt mr-2 mt-3"></i> (787)
                              366-3257{" "}
                            </p>
                          </div>
                          <div class="col-md-6">
                            <div class="bookbtnrow">
                              <div class="purify_3kC">
                                <a href="#." class="btn btn-info">
                                  Call
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pt-4">
                        <p class="pb-2">
                          Sunday{" "}
                          <span class="float-right">
                            <strong>Closed</strong>
                          </span>
                        </p>
                        <p class="pb-2">
                          Monday{" "}
                          <span class="float-right">
                            <strong>Closed</strong>
                          </span>
                        </p>
                        <p class="pb-2">
                          Tuesday{" "}
                          <span class="float-right">
                            <strong>09:00 AM - 05:00 PM</strong>
                          </span>
                        </p>
                        <p class="pb-2">
                          Wednesday{" "}
                          <span class="float-right">
                            <strong>09:00 AM - 05:00 PM</strong>
                          </span>
                        </p>
                        <p class="pb-2">
                          Thursday{" "}
                          <span class="float-right">
                            <strong>09:00 AM - 05:00 PM</strong>
                          </span>
                        </p>
                        <p class="pb-2">
                          Friday{" "}
                          <span class="float-right">
                            <strong>09:00 AM - 05:00 PM</strong>
                          </span>
                        </p>
                        <p class="pb-2">
                          Saturday{" "}
                          <span class="float-right">
                            <strong>09:00 AM - 05:00 PM</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="p-3">
                      <h1>Social Media & Share</h1>
                      <ul>
                        <li>
                          <a href="#.">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#.">
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#.">
                            <i
                              class="fab fa-linkedin-in"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#.">
                            <i class="fab fa-pinterest" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#.">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="p-3">
                      <p class="pt-3 pb-3 border-top border-bottom">
                        <a href="#.">
                          Payment & Cancellation Policy{" "}
                          <span class="float-right">
                            <i class="fas fa-chevron-right"></i>
                          </span>
                        </a>
                      </p>
                      <p class="pt-2">
                        <a href="#.">
                          Payment & Cancellation Policy{" "}
                          <span class="float-right">
                            <i class="fas fa-chevron-right"></i>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

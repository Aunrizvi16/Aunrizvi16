import React from "react";
// import Layout from "../../../components/Dashboard/Layout";
import config from "../../config";
import Header from "../../components/Home/Head";
import Footer from "../../components/Home/Footer";

import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import DatePicker from "react-mobile-datepicker";
import dynamic from "next/dynamic";
var moment = require("moment");
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
  render() {
    return (
      <div>
        <DatePicker
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
        />
        </div>
    );
  }
}

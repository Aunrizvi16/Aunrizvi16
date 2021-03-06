import React from "react";
import { connect } from "react-redux";
import AuthHelper from "../../../../Helpers/AuthHelper";
import WorkinghoursHelper from "../../../../Helpers/WorkinghoursHelper";
import Datetime from "react-datetime";
import $ from "jquery";
import Fields from "./Fields";
var moment = require("moment");

class Workinghours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mon: { starting_time: 0, end_time: 0, off: 0, day: "1" },
      tus: { starting_time: 0, end_time: 0, off: 0, day: "2" },
      wed: { starting_time: 0, end_time: 0, off: 0, day: "3" },
      thu: { starting_time: 0, end_time: 0, off: 0, day: "4" },
      fri: { starting_time: 0, end_time: 0, off: 0, day: "5" },
      sat: { starting_time: 0, end_time: 0, off: 0, day: "6" },
      sun: { starting_time: 10, end_time: 10, off: 0, day: "7" },
      totall: {},
    };
  }
  componentDidMount = () => {
    this.setState({
      totall: this.props.user_workinghours,
    });
    console.log(this.state.totall);
  };
  handleWorkinghours = async (data) => {
    this.state.totall[data.day-1] = data;
    console.log(this.state.totall);
    
  };
  handleWorkinghoursUpdates = async (data) => {
   this.state.totall.forEach(element => {
     if (element.update) {
      WorkinghoursHelper.update(element).then((resp)=>{
        console.log(resp)
      })
     }
   });
    
  };

  render() {
    return (
      <>
        <div class="grid lg:grid-cols-3 mt-12 gap-8">
          <div>
            <br />
            <input
              type="text"
              onChange={(text) => console.log(text)}
              placeholder="***********"
              class="bg-gray-200 mb-2 shadow-none dark:bg-gray-800"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
            <Datetime
              // id="timepicker"
              value={new Date()}
              viewMode="time"
              dateFormat={false}
              onChange={(time) => console.log(time.format())}
            />
            {/* <Datetime
              viewMode="time"
              onChange={(time) => console.log(time.format("MM"))}
              // inputProps={{ placeholder: "Datetime Picker Here" }}
            /> */}
            <h3 class="text-xl mb-2">Workinghours</h3>
            <p> Lorem ipsum dolor sit amet nibh consectetuer adipiscing elit</p>
          </div>
          <div class="bg-white rounded-md lg:shadow-lg shadow col-span-2">
            <Fields
              name={"Monday"}
              id={1}
              onChange={this.handleWorkinghours.bind(this)}
            />
            <Fields
              name={"Tuesday"}
              id={2}
              onChange={this.handleWorkinghours.bind(this)}
            />
            <Fields
              name={"Wednesday"}
              id={3}
              onChange={this.handleWorkinghours.bind(this)}
            />
            <Fields
            id={4}
              name={"Thursday"}
              onChange={this.handleWorkinghours.bind(this)}
            />
            <Fields
              name={"Friday"}
              
              id={5}
              onChange={this.handleWorkinghours.bind(this)}
            />
            <Fields
              id={6}
              name={"Saturday"}
              onChange={this.handleWorkinghours.bind(this)}
            />
            <Fields
              id={7}
              name={"Sunday"}
              onChange={this.handleWorkinghours.bind(this)}
            />

            <div class="bg-gray-10 p-6 pt-0 flex justify-end space-x-3">
              <button
                onClick={this.handleWorkinghoursUpdates}
                type="button"
                class="button bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user_data: state.user_data,
    user_workinghours: state.user_workinghours,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    _user_data: (data) => {
      dispatch({ type: "user_data", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Workinghours);

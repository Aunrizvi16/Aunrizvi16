import React from "react";
import { connect } from "react-redux";

import Layout from "../../../components/Dashboard/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
// import Profile from "../../../components/Dashboard/Settings/Profile";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import('../../../components/Dashboard/Settings/Profile'), {
  ssr: false
});
const Workinghours = dynamic(() => import('../../../components/Dashboard/Settings/workinghours'), {
  ssr: false
})
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: false,
      index:0
    };
  }
  componentDidMount = () => {
  };

  tabhendal = async (index) => {
    // alert(index)
    this.setState({index})
    await $(".Profile_Settings_tab").removeClass("uk-active");
    $("#tab_" + index).addClass("uk-active");
  };

  render() {
    return (
      <>
        <Layout>
          <div class="container m-auto">
            <h1 class="text-2xl leading-none text-gray-900 tracking-tight mt-5">
              Account Setting
            </h1>

            <Tabs   selectedIndex={this.state.index}  onSelect={(index) => this.tabhendal(index)}>
              <TabList>
                <ul class="mt-5 -mr-3 flex-nowrap lg:overflow-hidden overflow-x-scroll uk-tab">
                  <Tab disabled={false} >
                    <li id={'tab_0'} class=" uk-active tab_0 Profile_Settings_tab">
                      <a href="#">General</a>
                    </li>
                  </Tab>
                  <Tab  disabled={false} >
                    <li id={'tab_1'} class="Profile_Settings_tab   ">
                      <a href="#">Working Hours</a>
                    </li>
                  </Tab>
                 <Tab>
                    <li id={'tab_2'} class=" Profile_Settings_tab  ">
                      <a href="#">Privacy</a>
                    </li>
                  </Tab>
                   <Tab>
                    <li id={'tab_3'} class=" Profile_Settings_tab ">
                      <a href="#">Notification</a>
                    </li>
                  </Tab>
                  <Tab>
                    <li  id={'tab_4'} class=" Profile_Settings_tab 4">
                      <a href="#">Social links</a>
                    </li>
                  </Tab>
                  <Tab>
                    <li  id={'tab_5'} class=" Profile_Settings_tab  ">
                      <a href="#">Billing</a>
                    </li>
                  </Tab>
                  <Tab>
                    <li id={'tab_6'} class=" Profile_Settings_tab  ">
                      <a href="#">Security</a>
                    </li>
                  </Tab>
                </ul>
              </TabList>
              <TabPanel>
                {this.props.user_fname!=''?<Profile />:''}
                <Profile />
              </TabPanel>
              <TabPanel>
                <Workinghours/>
              </TabPanel>
            </Tabs>
          </div>
        </Layout>
      </>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    user_data: state.user_data,
    user_fname: state.user_fname,
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
import React from "react";
import Link from "next/link";
import AuthHelper from "../../../Helpers/AuthHelper";
import Router from 'next/router'


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      f_name: "",
      l_name: "",
      email: "",
      phone: "",
      password: "",
      c_password: "",
      messages: "",
    };
  }
  handleLogin = () => {

    if (this.state.password != this.state.c_password) {
      this.setState({ messages: 'password dose not match' });
      return false;
    }
    var data = {
      name:this.state.f_name+' '+this.state.l_name,
      email:this.state.email,
      phone:this.state.phone,
      password:this.state.password
    };
    AuthHelper.Signup(data).then((resp) => {
      if (resp.data.status != "success") {
        console.log(resp.data.status);
        let str=JSON.stringify(resp.data.status)
         str = str.replace(/"/g, " ");
         str = str.replace(/`/g, " ");
        str = str.substring(1, str.length - 1);
        this.setState({ messages: str });
      } else {
        Router.push('/dashboard/feed')

      }
    });

  };

  render() {
    return (
      <div>
        <div class="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
          <h1 class="lg:text-3xl text-xl font-semibold mb-6"> Sign in</h1>
          <p class="mb-2 text-black text-lg">
            {" "}
            Register to manage your account{" "}
          </p>
          {/* <form action=""> */}
            <div class="flex lg:flex-row flex-col lg:space-x-2">
              <input
                onChange={(text) => [
                  this.setState({ f_name: text.target.value }),
                ]}
                type="text"
                placeholder="First Name"
                class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
                style={{ border: "1px solid #d3d5d8 !important" }}
              />
              <input
                onChange={(text) => [
                  this.setState({ l_name: text.target.value }),
                ]}
                type="text"
                placeholder="Last Name"
                class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
                style={{ border: "1px solid #d3d5d8 !important" }}
              />
            </div>
            <input
              onChange={(text) => [
                this.setState({ email: text.target.value }),
              ]}
              type="text"
              placeholder="Email"
              class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
            <input
              onChange={(text) => [
                this.setState({ phone: text.target.value }),
              ]}
              type="text"
              placeholder="Phone No"
              class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
            <input 
              onChange={(text) => [
                this.setState({ password: text.target.value }),
              ]}
              type="text"
              placeholder="Password"
              class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
            <input
              onChange={(text) => [
                this.setState({ c_password: text.target.value }),
              ]}
              type="text"
              placeholder="Confirm Password"
              class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
            <div class="flex justify-start my-4 space-x-1">
              <div class="checkbox">
                <input type="checkbox" id="chekcbox1" checked />
                <label for="chekcbox1">
                  <span class="checkbox-icon"></span> I Agree
                </label>
              </div>
              <a href="#"> Terms and Conditions</a>
            </div>
            <p class="form_message">{this.state.messages}</p>
            {/* <Link href="/auth/login"> */}
            <button
              onClick={this.handleLogin}
              class="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full"
            >
              Login
            </button>
            {/* </Link> */}
            <div class="text-center mt-5 space-x-2">
              <Link href="/auth/login">
                <p class="text-base">
                  {" "}
                  Do you have an account? <a href="form-login.html"> Login </a>
                </p>
              </Link>
            </div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

// import Cookies from "js-cookie";
import Router from "next/router";
const jwt = require("jsonwebtoken");

import config from "../config";
const Upload = async (data) => {
  return new Promise((resolve, reject) => {
    
    var path = "media/upload";
    var type = "post";

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEzOGMyOWYxYjViNjE4NTkzZTVhNGYiLCJpYXQiOjE2MjE0MDgwODV9.Egna5NA54XN-xY_vdYbhReyrZ2MHjGCmIP2ibsZ8cHI"
    );

    var formdata = new FormData();
    formdata.append(
      "image",
      data,
      "WhatsApp Video 2021-05-19 at 12.54.25 AM.mp4"
    );

    var requestOptions = {
      method: type,
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(config.URL + path, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resolve({
          status: true,
          data: result,
        });
      })
      .catch((error) => console.log("error", error));
  });
};


export default {
  Upload,
  
};

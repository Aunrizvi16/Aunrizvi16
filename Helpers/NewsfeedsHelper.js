// import Cookies from "js-cookie";
import Router from 'next/router'
const jwt = require('jsonwebtoken');

import config from "../config";
const Get_all = async (data) => {
  return new Promise((resolve, reject) => {
    var path="newsfeeds_posts/allnewsfeeds"
    var type='get'
    fetch(config.URL + path, {
      method: type,
      headers:{"Content-Type":"application/json","Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEzOGMyOWYxYjViNjE4NTkzZTVhNGYiLCJpYXQiOjE2MjE0MDgwODV9.Egna5NA54XN-xY_vdYbhReyrZ2MHjGCmIP2ibsZ8cHI"},
    })
      .then((res) => res.json())
      .then(async (resjson) => {
        resolve({
          status: true,
          data: resjson
        });
      })
      .catch((err) => {
        console.log("failed", err);
      });
  });
};

export default {
  Get_all,
};

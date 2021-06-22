// import Cookies from "js-cookie";
import Router from 'next/router'
const jwt = require('jsonwebtoken');

import config from "../config";
const Login = async (data) => {
  return new Promise((resolve, reject) => {
    var path="users/login"
    var type='post'
    fetch(config.URL + path, {
      method: type,
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data),
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
const Signup = async (data) => {
  return new Promise((resolve, reject) => {
    var path="users/register"
    var type='post'
    fetch(config.URL + path, {
      method: type,
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data),
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
const Varification = async (data) => {
  return new Promise((resolve, reject) => {
    let status=''
    try {
      let Authenticated = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFiNjRjNzllM2RjNTA3Zjg4ZDVlNzgiLCJpYXQiOjE2MjM0ODk4MjR9.8G4r30wm3nN0bn_AeL2CGCl1A2ktm3yU2CQRCiHO0xo', 'erger34I&IY&IYI&TUI&TU^&TT*&G*&G&^T');
      status='authorize'
    } catch (e) {
      status='unauthorize'
    }

    resolve({
      status:status
    })
        
     
  });
};
const Get = async () => {
  return new Promise((resolve, reject) => {
    var path="users/"
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
const Update = async (data) => {
  return new Promise((resolve, reject) => {
    var path="users/"
    var type='PATCH'
    fetch(config.URL + path, {
      method: type,
      headers:{"Content-Type":"application/json","Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEzOGMyOWYxYjViNjE4NTkzZTVhNGYiLCJpYXQiOjE2MjE0MDgwODV9.Egna5NA54XN-xY_vdYbhReyrZ2MHjGCmIP2ibsZ8cHI"},
      body:JSON.stringify(data)
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
  Login,
  Varification,
  Signup,
  Get,
  Update
};

/**********************************************************************************
 *  WEB700 – Assignment 1
 * * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * * No part of this assignment has been copied manually or electronically from any other source
 * * (including web sites) or distributed to other students.
 * ** Name: Aritra Nandy 
 * Student ID: 137916227 
 * Date: 01/19/24
 * *********************************************************************************/

var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
  "Welcome to WEB700 Assignment01",
  "This assignment was prepared by Aritra Nandy",
  "Aritra Nandy: anandy@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete",
];

function httpRequest(httpVerb, path) {
  var indexOfPath;
  if (httpVerb && path) {
    // checking and setting index
    for (var i = 0; i < serverPaths.length; i++) {
      if (path === serverPaths[i]) {
        indexOfPath = i;
        break;
      }
    }
    if (httpVerb === serverVerbs[indexOfPath]) {
      return `200: ${serverResponses[indexOfPath]}`;
    } else {
      return `404: Unable to process ${httpVerb} request for ${path}`;
    }
  } else {
    return "!!! ERROR  You have to provide a server variable and a path";
  }
}

console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/panel"));
console.log(httpRequest("PUT", "/"));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function automateTests() {
  var testVerbs = ["GET", "POST"];
  var testPaths = [
    "/",
    "/about",
    "/contact",
    "/login",
    "/panel",
    "/logout",
    "/randompath1",
    "/randompath2",
  ];
  function randomRequest() {
    var randVerb = testVerbs[getRandomInt(testVerbs.length)];
    var randPath = testPaths[getRandomInt(testPaths.length)];
    console.log(httpRequest(randVerb, randPath));
  }
  setInterval(randomRequest, 1000);
}

automateTests();
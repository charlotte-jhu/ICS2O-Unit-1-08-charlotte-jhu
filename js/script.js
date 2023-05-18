// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Charlotte Jhu
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-charlotte-jhu/sw.js", {
    scope: "/ICS2O-Unit-1-08-charlotte-jhu/",
  })
}

function myButtonClicked() {
  // this function shows an alert
  alert("You clicked the button!");
}

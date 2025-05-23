// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: May 22 2025
// This file contains the JS functions for index.html

"use strict"

// Setiing the functoin 
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  // Setting the varibles
  const radius = params.get("radius")
  console.log(radius)

  // Calculatosin 
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions =
    "<ul>\n<li> Volume is " +
    volume.toFixed(2) + " " + "cm³ " +
    "</li>\n</ul>"

  // Showing the asnwer 
  document.getElementById("Volume").innerHTML = dimensions
  "Volume is: " + volume.toFixed(2)
}

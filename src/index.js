import React, { Component } from "react";
import ReactDOM from "react-dom";

import Viewer from "./js/components/Viewer";
import r from './js/recipes/recipes.json';

import "./styles.css";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Viewer recipes={r.recipes} />, wrapper) : false;

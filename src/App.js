import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TaskList from './component/TaskList';
import AboutVueJs from './component/AboutVueJs';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.css';

if(window.location.reload) {
  sessionStorage.removeItem('questions');
}

export default () => (
  
<BrowserRouter>

<div>
  <Header />
  <div>
  <Route exact path = '/' component = { TaskList } />
  <Route path = '/about' component = { AboutVueJs } /> 
  </div>
</div>
  
</BrowserRouter>  

)
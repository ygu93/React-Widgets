import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';

const list = [
  {title: "one", content: "hey"},
  {title: "two", content: "whatsup"},
  {title: "three", content: "hello"}
];

const Root = () => (
  <div className="root">
    <h1>Widgets</h1>
    <Tabs list={list} />
    <Clock/>
    <Weather/>
  </div>
);

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});

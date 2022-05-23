import React, { useState } from "react";
import "./App.css";
import { data } from "./utils/data";

function App() {
  const [show, setShow] = useState("");
  
  return (
    <main className="App">
      <div className="card_top">
        <div className="top__left-container">
          <h1 className="top__left-header">My balance</h1>
          <h1 className="top__left-subtitle">$921.48</h1>
        </div>
        <div className="top__right-container">
          <div className="circle__white"></div>
          <div className="circle__black"></div>
        </div>
      </div>
      <div className="card_bottom">
        <h1 className="bottom__header">Spending - Last 7 days</h1>
        <div className="grap__container">
          {data.map((item) => (
            <div className="inner_grap">
              {show === item.day && (
                <span className="value__span">{item.amount}</span>
              )}
              <div
                className="grap__bar"
                id={item.day}
                onMouseEnter={(e) => setShow(e.target?.id)}
                onMouseLeave={()=>setShow('')}
                style={{
                  height: item.height,
                }}
              ></div>
              <span className="grap__bar-span">{item.day}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="bottom__card-container">
          <div className="left__bottom_card-container">
            <span className="bottom_card-container-left-header">
              Total this month
            </span>
            <span className="bottom_card-container-left-subtitle">$478.33</span>
          </div>
          <div className="right__bottom_card-container">
            <span className="bottom_card-container-right-header">+2.4% </span>
            <span className="bottom_card-container-right-subtitle">
              from last month
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

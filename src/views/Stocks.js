import React from "react";
import "../App.css";
import { stockData } from "../data";
import { HomePageHeader } from "../components/HomePageHeader";
import { Stock } from "../components/Stock";
export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
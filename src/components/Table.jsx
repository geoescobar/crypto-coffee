import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./CoinInfo";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="text-5xl text-center font-bold pb-5">Search</h1>{" "}
        <form>
          {/* <input className="coin-input" type="text" placeholder="Search" /> */}
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </form>
      </div>
      <div className="w-3/4">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Ticker</th>
              <th>Current Price</th>
            </tr>
          </thead>

          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;

import React from "react";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <>
      <tbody>
        <tr>
          <td>
            <div className="flex  space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={image} alt="crypto" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">
                  {" "}
                  {priceChange < 0 ? (
                    <p className="coin-percent red">
                      {priceChange.toFixed(2)}%
                    </p>
                  ) : (
                    <p className="coin-percent green">
                      {priceChange.toFixed(2)}%
                    </p>
                  )}
                </div>
              </div>
            </div>
          </td>
          <td>
            <p className="symbol">{symbol}</p>
          </td>
          <td>
            {priceChange < 0 ? (
              <p className="coin-percent red">${price.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">${price.toFixed(2)}%</p>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Coin;

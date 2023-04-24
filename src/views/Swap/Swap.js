import React from 'react';
import Web3Provider from "../../network";
import CoinSwapper from '../../components/CoinSwapper/CoinSwapper.js'

function Swap() {
  return (
    <>
      <div className="">
        <Web3Provider
          render={(network) => (
            <CoinSwapper network={network} />
          )}
        ></Web3Provider>
      </div>
    </>
  );
}

export default Swap;

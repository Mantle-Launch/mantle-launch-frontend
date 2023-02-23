//Default
import React from 'react';

//Group
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Card from '../../components/Card/Card.js';
import CardBody from '../../components/Card/CardBody.js';

function Home() {
  return (
    <>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8} justifyContent="center">
          <h3> Welcome to Mantle Launch</h3>
          <h1 style={{ color: '#65B3AE !important' }}>Secure DeFi Infrastructure</h1>
          <h3>Decentralized, scalable, trusted... </h3>
          <p>
            Mantle Launch helps ev`eryone to create their own tokens and token sales in few seconds. Tokens created on
            Mantle Launch will be verified and published on explorer websites.
          </p>

          {/* <Card>
            <CardBody style={{ color: 'black' }} justifyContent="center">
              <h2>Coming Soon</h2>

              <h5>
                Try MSwap Factory Contract : &nbsp;
                <a href="https://explorer.testnet.mantle.xyz/address/0x74c9edBe1f78De461F78957ceFeCb210849b38BA">
                  0xAD2456e1074A607712Ac27b1793625f80cCB96f5
                </a>
              </h5>
            </CardBody>
          </Card> */}
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Home;
